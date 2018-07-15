var db = require("../models");

//Store operations
var Sequelize = require('sequelize');
var Op = Sequelize.Op

//Require momentjs
var moment = require('moment');

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/my-sessions", isAuthenticated, function (req, res) {
    // console.log("my-sessions req======================");
    // console.log(req.body);
    // console.log(req.user);
    // console.log("my-sessions res======================");
    // console.log(res);
    // console.log("my-sessions end res==================");

    db.sessions.findAll({
      attributes: ['conn_info', 'name', 'item_date', 'description'],
      where: {
        people_id: req.user.id,
        item_date: {
          [Op.gte]: moment()
        }
      },
      include: [{
        model: db.people_session,
        required: false,
        attributes: ['people_id', 'session_id'],
        include: [{
          model: db.People,
          required: false,
          attributes: ['logon_id', 'lst_nam', 'fst_nam', 'id']
        }]
      }],
      order: [
        ['item_date', 'ASC']
      ]
    }).then(function (sessions) {
     // console.log(sessions);

      for (let i = 0; i < sessions.length; i++) {
        const row = sessions[i];

        let myDate = moment(row.item_date).format("MMMM Do YYYY, h:mm a");
        row.dateFormated = myDate;
       // console.log("row#"+i);
       // console.log(row.dateFormated);
        
        if(row.people_sessions){
           row.attendeeCnt = row.people_sessions.length;
        } else {
           row.attendeeCnt = 0;
        }
        // console.log(row.attendeeCnt);
      }
      // var data = {
      //   title: "Trainer Sessions",
      //   role: req.user.role,
      //   username: req.user.fst_nam + " " + req.user.lst_nam,
      //   logon_id2: String(req.user.logon_id),
      //   user_id: req.user.id,
      //   isHost: req.user.role === 'host' ? true : false,
      //   sessions: sessions
      // }
      var sessions = {
        title: "my-sessions",
        fullname: req.user.fst_nam + " " + req.user.lst_nam,
        isHost: req.user.role === 'host' ? true : false,
        loginInfo: {
          id: req.user.id,
          logon_id: req.user.logon_id,
          firstName: req.user.fst_nam,
          lastName: req.user.lst_nam,
          role: req.user.role,
          photo: req.user.photo,
          user_id: req.user.id,
          email_adr: req.user.email_adr,
          cell_phone: req.user.cell_phone,
        },
        sessions: sessions,
      };
      // res.render("hostSession", data);  // project 2
      res.json(sessions);  
    }).catch(function () {
      res.status(500).end();
    });
  });
};

