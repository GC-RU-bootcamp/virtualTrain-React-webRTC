// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var handlebars = require('express-handlebars');
var socket = require('socket.io');
var path = require("path");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
//Setting up the view engine for handlebars
// Setting up a view engine
app.engine('handlebars', handlebars({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/host-routes.js")(app);

// if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
// }

app.get("*", (req, res) => {
  console.log("server.js app.get(*): ", __dirname + "\\client\\build\\index.html");
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force: false}).then(function() {
  var server = app.listen(PORT, function() {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
  //Setting up socket.io to listen on our app
  var io = socket(server);

  //Setup null array to contain connections
  var hostIDs = [];
  var Connections = [];

  // If a connection is formed push the connection to the connections array
  // Listen for a disconnect for said connection
  io.on('connection',function(socket){
    console.log("------------",'\t:: Socket :: has made a connection.');
    Connections.push(socket.id);
    console.log("------------","connection -> Connections.push(socket.id) socket.id=", socket.id);
    console.log("------------",'\t:: Socket :: has ' + Connections.length + ' connections.');


    //If the specific connection stops remove connection from connections array
    socket.on('disconnect',function(){
      console.log("------------",'\t:: Socket :: has lost a connection');
      console.log("------------",'\t:: Socket :: has ' + Connections.length + ' connections.');

      // NEW CODE 
      hostIDs = hostIDs.filter(item => {
        return item[0] != socket.id
      });
      console.log("------------",'this should only have no elements! : ???' + hostIDs.length);
      console.log("------------",'\t:: Socket :: has (before splce)' + Connections.length + ' connections.');  
      Connections.splice(Connections.indexOf(socket),1);
      console.log("------------",'\t:: Socket :: has (before splce)' + Connections.length + ' connections.');  
    });

    socket.on('room',function(roomID){
      socket.join(roomID);
      console.log("------------",'joined a room || ' + roomID);
      socket.emit('host-check');
    })

    socket.on('host-answer',function(data){
      console.log("------------","socket.on('host-answer',function(data->)", data);

      console.log("------------","host-answer -> data.isHost: ", data.isHost);

      if(data.isHost === 1){
        var hostInfo = [ socket.id , data.uuid ];
        console.log("------------","host-answer if(data.isHost === 1)-> hostIDs.push(hostInfo) hostInfo=", hostInfo);
        hostIDs.push(hostInfo);
      }
      console.log("------------","host-answer -> hostInfo: ", hostInfo);
      console.log("------------","host-answer -> hostIDs: ",  hostIDs);
      console.log("------------","host-answer if(data.isHost === 1)-> socket.broadcast.emit('signal-ready,data->);", data);
      socket.emit('signal-ready',data);
    })

    //Server is listening for a video-offer msg from client-side
    socket.on('video-offer',function(data){
      if(data.isHost === 1){
        console.log("------------","video-offer if(data.isHost === 1) -> socket.to(data.uuid).emit('video-offer',data);", data);
        socket.to(data.uuid).emit('video-offer',data);

      }else{
        console.log("------------","video-offer -> hostIDs: ",  hostIDs);
        for(var i = 0; i < hostIDs.length; i++ ){
          if(data.uuid === hostIDs[i][1]){
            console.log("------------","socket.on(video-offer -> socket.to(hostIDs[i][0]).emit('video-offer',data) data=" , data, " i=", i);
            
            socket.to(hostIDs[i][0]).emit('video-offer',data);
          }
        }
        console.log("------------","socket.on(video-offer) -> socket.emit(no-host)" );
        socket.emit('no-host');
      }
        
    });
    //Server is listening for a video-answer msg from client-side
    socket.on('video-answer',function(data){
      //if server receives video-answer msg broadcast the video-answer msg to all clients except original sender
      console.log("------------","socket.on(video-answer -> socket.broadcast.emit('video-answer',data->);", data);
      socket.broadcast.emit('video-answer',data);
    });

    //Server is listening for a video-answer msg from client-side
    socket.on('new-ice-canidate',function(data){
      //if server receives video-answer msg broadcast the video-answer msg to all clients except original sender
      console.log("------------","socket.on new-ice-canidate -> socket.broadcast.emit('new-ice-canidate',data->);", data);
      socket.broadcast.emit('new-ice-canidate',data);
    });
  });
});
