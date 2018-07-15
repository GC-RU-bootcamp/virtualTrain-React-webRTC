import React, {
  Component
} from 'react'
import {
  Button,
//  Modal
} from 'semantic-ui-react'

import io from 'socket.io-client';

import { Player } from 'video-react';
//import io from 'socket.io'
//import { Input } from 'semantic-ui-react'
//import { Form } from 'semantic-ui-react'
//import { Form } from 'semantic-ui-react'

//import { Button, Modal, Label } from 'semantic-ui-react'
//import { Input } from 'semantic-ui-react'
//import { Form } from 'semantic-ui-react'

import API from '../utilities/API'
// //import { Route, Redirect,  withRouter } from 'react-router'

// import JoinSession from "./JoinSession"

// import {
//   //BrowserRouter as Router, Route, Switch,  NavLink,
//    Link} from "react-router-dom";

// import adapter from "../../public/js/adapter.js"
// import socket  from "../../public/js/socket.io.js"

//const socket = io();

class JoinSession extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      localView: {
        videoElement: "", //such as `= document.createElement('video')`
        audioElement: "", //such as ` = document.createElement('audio')`
        stream: "", // event.stream
        key: 0
      },
      remoteViews: [{
        videoElement: "", //such as `= document.createElement('video')`
        audioElement: "", //such as ` = document.createElement('audio')`
        stream: "", // event.stream
        key: 0
      }],
      session_name: "",
      socket:"",

    };
    console.log("<JoinSession> constructor() state=>", this.state, " props=>", this.props, " context=>", this.context);
    //socket = io();

    this.clickHandler = this.clickHandler.bind(this);

    this.handleICECandidateEvent = this.handleICECandidateEvent.bind(this);
    this.handleAddStreamEvent = this.handleAddStreamEvent.bind(this);

  } // constructor

  clickHandler = (event, data) => {
    let {
      name,
      value
    } = event.target;

    console.log("<JoinSession> clickHandler() state=>", this.state, " props=>", this.props, " context=>", this.context);
    // <Redirect to="/"/>
  }



  render(props) {
    // console.log("JoinSession state", this.state);
    // console.log("JoinSession props", this.props);
    console.log("<JoinSession> render() state=>", this.state, " props=>", this.props, " context=>", this.context);

    const videoViews = [...this.state.videoViews];
    const localVideo = 0;
   const loginInfo = this.props.LoginProp.loginState;



    return ( 
    
      <div>

          { /* <Form> */ }
          <h4> Attend Session FORM </h4> 
          <h4 id="session-name" >  </h4> 
          <p> {"Role: "+loginInfo.role }</p>
          <p> {"User: " + loginInfo.username }</p>
          <p> {"Name: " + loginInfo.firstName + " " + loginInfo.lastName }</p>
        { /* <script src="https://cdnjs.cloudflare.com/ajax/libs/webrtc-adapter/6.1.5/adapter.js"></script> */ } 
        { /* <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.0/socket.io.js"></script> */ } 
        <div className = "col-6" > 
            {/* <h1 className = "mt-3"  id = "session-name" > </h1>  */}
            {/* <video key = {  videoViews[localVideo].key } controls muted id = "local-video" > </video>  */}
            <video  controls muted id = "local-video" > </video> 
            {/* {videoViews[localVideo].videoElement = document.getElementById('local-video')}  */}
         </div>
        <Button onClick = {this.clickHandler } > Logout </Button>

      </div>
    )
  }

  //var localAudio = document.getElementById('local-audio');

  handleICECandidateEvent = function (event) {
    console.log("handleICECandidateEvent() event.candidate=", event.candidate)
    if (event.candidate) {
      console.log("handleICECandidateEvent() socket.emit('new-ice-canidate',", {
        candidate: event.candidate
      }, ")");

      this.state.socket.emit('new-ice-canidate', {
        candidate: event.candidate
      });
    }
  }

  handleAddStreamEvent = function (event) {

    console.log('handleAddStreamEvent() Remote Stream has been received!');
    console.log("handleAddStreamEvent() event.stream=", event.stream)
    console.log("handleAddStreamEvent() this=", this)
    //console.log("handleAddStreamEvent() that=", that)


    var id = event.stream.id;

    var newRemoteVideo = document.createElement('video');
    var newRemoteAudio = document.createElement('audio');

    newRemoteVideo.setAttribute('autoplay', true);

    newRemoteVideo.setAttribute('width', 350);
    newRemoteVideo.setAttribute('height', 350);

    newRemoteVideo.id = id + "-video";
    newRemoteAudio.id = id + "-audio";

    newRemoteVideo.srcObject = event.stream;

    console.log("handleAddStreamEvent() create new audio& video element with event.stream.id=", event.stream)


    var target = document.getElementById('remote');

    target.appendChild(newRemoteVideo);


  };

  

  IGNOREcomponentDidMount = () => {

    // const uuid = this.props.uuid;

    let that = this;

    const constraints = {
      video: true,
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        volume: 0.2
      }
    };
  
    const servers = {
      "iceServers": [{
        "urls": "stun:stun.l.google.com:19302"
      }]
    };
  
    let localStream = 0;
  
    const localVideo = document.getElementById('local-video');
    

    const urlArray = this.props.location.pathname.split('/');
    const uuid = urlArray[urlArray.length - 1];

    console.log("<JoinSession> componentDidMount() state=>", this.state, " props=>", this.props, " context=>", this.context);
    console.log("<JoinSession> componentDidMount() uuid=>",uuid);
    const socket = io();
    this.setState({socket:socket })
    console.log("<JoinSession> componentDidMount() socket=>",socket);

    socket.on('no-host', function () {
      console.log('socket.on("no-host" function) , we tried to send a video offer but there was no host!');

    });


    socket.emit('room', uuid);
    console.log("socket.emit('room', uuid);", uuid)

    socket.on('host-check', function () {
      console.log('socket.on("host-check" function) {}}');

      API.session(uuid)
        .then(function (apidata) {
          console.log('socket.on("host-check" function) {"/api/session/" + uuid }} uuid=', uuid, 'data=', data);

          var data = apidata.data
          document.getElementById('session-name').innerHTML = data.name;
          //send data back to server
         // this.setState({session_name: data.name});
          data.uuid = uuid;

          socket.emit('host-answer', data);
          console.log('socket.on("host-check" function) {socket.emit("host-answer", data) }} uuid=', uuid, 'data=', data);

        });
    })

    socket.on('signal-ready', function (data) {
      navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
          console.log('I got the signal to start the webRTC! -- stream =', stream);
          localStream = stream;
          console.log('I got the signal to start the webRTC! -- localStream =', localStream);

          localVideo.srcObject = stream;
          //localAudio.srcObject = stream;
          console.log('I got the signal to start the webRTC! -- localVideo.srcObject =', localVideo.srcObject);

          var myPeerConnection = new RTCPeerConnection(servers);

          // myPeerConnection.onicecandidate = this.handleICECandidateEvent;
          myPeerConnection.onicecandidate =  function (event) {
            console.log("handleICECandidateEvent() event.candidate=", event.candidate)
            if (event.candidate) {
              console.log("handleICECandidateEvent() socket.emit('new-ice-canidate',", {
                candidate: event.candidate
              }, ")");
        
              socket.emit('new-ice-canidate', {
                candidate: event.candidate
              });
            }
          };
                    ;
          // myPeerConnection.onaddstream = this.handleAddStreamEvent;
          myPeerConnection.onaddstream = function (event) {

            console.log('handleAddStreamEvent() Remote Stream has been received!');
            console.log("handleAddStreamEvent() event.stream=", event.stream)

            var id = event.stream.id;

            var newRemoteVideo = document.createElement('video');
            var newRemoteAudio = document.createElement('audio');

            newRemoteVideo.setAttribute('autoplay', true);

            newRemoteVideo.setAttribute('width', 350);
            newRemoteVideo.setAttribute('height', 350);

            newRemoteVideo.id = id + "-video";
            newRemoteAudio.id = id + "-audio";

            newRemoteVideo.srcObject = event.stream;

            console.log("handleAddStreamEvent() create new audio& video element with event.stream.id=", event.stream)


            var target = document.getElementById('remote');

            target.appendChild(newRemoteVideo);


          };

          myPeerConnection.onremovetrack

          myPeerConnection.addStream(localStream);

          socket.on('new-ice-canidate', function (data) {
            console.log('I have got a new ice canidate');
            var canidate = new RTCIceCandidate(data.candidate);
            myPeerConnection.addIceCandidate(canidate);
          });

          myPeerConnection.createOffer()
            .then(function (offer) {
              myPeerConnection.setLocalDescription(offer);
            })
            .then(function () {

              var sdpData = {
                sdp: myPeerConnection.localDescription,
                uuid: data.uuid,
                isHost: data.isHost
              };

              console.log("I am going to send UUID: " + sdpData.uuid + " isHost: " + sdpData.isHost);

              socket.on('video-answer', function (data) {
                console.log('I have received a video answer!');
                var description = new RTCSessionDescription(data.sdp);
                myPeerConnection.setRemoteDescription(description);
              });

              socket.emit('video-offer', sdpData);
            });
          console.log('I sent the video offer!');
        })
        .catch(function (err) {
          console.error('mediaStream error : ', err);
        });
    });


    socket.on('video-offer', function (data) {
      console.log('I have received a video offer!');
      var myPeerConnection = new RTCPeerConnection(servers);

      myPeerConnection.onicecandidate = this.handleICECandidateEvent;
      myPeerConnection.onaddstream = this.handleAddStreamEvent;

      navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
          this.localStream = stream;
          this.localVideo.srcObject = stream;
          //localAudio.srcObject = stream;

          var description = new RTCSessionDescription(data.sdp);
          myPeerConnection.setRemoteDescription(description);
          myPeerConnection.addStream(this.localStream);

          socket.on('new-ice-canidate', function (data) {
            console.log('I have got a new ice canidate');
            var canidate = new RTCIceCandidate(data.candidate);
            myPeerConnection.addIceCandidate(canidate);
          });

          myPeerConnection.createAnswer()
            .then(function (answer) {
              myPeerConnection.setLocalDescription(answer);
            })
            .then(function () {
              socket.emit('video-answer', {
                sdp: myPeerConnection.localDescription,
              });
              console.log("socket.on('video-offer', function (data) socket.emit('video-answer", {
                sdp: myPeerConnection.localDescription,
              }, ' ) I have sent a video answer!');
            });
        })
        .catch(function (err) {
          console.error('mediaStream error : ', err);
        });
    });
  } // end componentDidMount

  componentDidMount = () => {
    let that = this;

    var socket = io();

    var url = document.location.href;
    var urlArray = url.split('/');
    var uuid = urlArray[urlArray.length - 1];

    var constraints = {
      video: true,
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        volume: 0.2
      }
    };

    var servers = {
      "iceServers": [{
        "urls": "stun:stun.l.google.com:19302"
      }]
    };


    var localVideo = document.getElementById('local-video');
    var localAudio = document.getElementById('local-audio');

    var localStream;

    var handleICECandidateEvent = function (event) {
      console.log("handleICECandidateEvent() event.candidate=", event.candidate)
      if (event.candidate) {
        console.log("handleICECandidateEvent() socket.emit('new-ice-canidate',", {
          candidate: event.candidate
        }, ")");

        socket.emit('new-ice-canidate', {
          candidate: event.candidate
        });
      }
    };

    var XXXhandleAddStreamEvent = function (event) {

      console.log('handleAddStreamEvent() Remote Stream has been received!');
      console.log("handleAddStreamEvent() event.stream=", event.stream)

      var id = event.stream.id;

      var newRemoteVideo = document.createElement('video');
      var newRemoteAudio = document.createElement('audio');

      newRemoteVideo.setAttribute('autoplay', true);

      newRemoteVideo.setAttribute('width', 350);
      newRemoteVideo.setAttribute('height', 350);

      newRemoteVideo.id = id + "-video";
      newRemoteAudio.id = id + "-audio";

      newRemoteVideo.srcObject = event.stream;

      console.log("handleAddStreamEvent() create new audio& video element with event.stream.id=", event.stream)


      // var target = document.getElementById('remote');

      // target.appendChild(newRemoteVideo);

    };




    socket.on('no-host', function () {
      console.log('socket.on("no-host" function) , we tried to send a video offer but there was no host!');

    });


    socket.emit('room', uuid);
    console.log("socket.emit('room', uuid);", uuid)

    socket.on('host-check', function () {
      console.log('socket.on("host-check" function) {}}');

      API.session(uuid)
        .then(function (APIdata) {
          
          var data = APIdata.data;
          console.log('socket.on("host-check" function) {"/api/session/" + uuid }} uuid=', uuid, 'data=', data);

          document.getElementById('session-name').innerHTML = data.name;
          //send data back to server
          data.uuid = uuid;
          socket.emit('host-answer', data);
          console.log('socket.on("host-check" function) {socket.emit("host-answer", data) }} uuid=', uuid, 'data=', data);

        });
    })

    socket.on('signal-ready', function (data) {
      let rsThis = this;
      console.log(that);
      navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
          console.log('I got the signal to start the webRTC!');
          localStream = stream;
          localVideo.srcObject = stream;
          //localAudio.srcObject = stream;

          var myPeerConnection = new RTCPeerConnection(servers);
          console.log(that);

          myPeerConnection.onicecandidate = handleICECandidateEvent;
          myPeerConnection.onaddstream = that.handleAddStreamEvent;
          myPeerConnection.onremovetrack

          myPeerConnection.addStream(localStream);

          socket.on('new-ice-canidate', function (data) {
            console.log('I have got a new ice canidate');
            var canidate = new RTCIceCandidate(data.candidate);
            myPeerConnection.addIceCandidate(canidate);
          });

          myPeerConnection.createOffer()
            .then(function (offer) {
              myPeerConnection.setLocalDescription(offer);
            })
            .then(function () {

              var sdpData = {
                sdp: myPeerConnection.localDescription,
                uuid: data.uuid,
                isHost: data.isHost
              };

              console.log("I am going to send UUID: " + sdpData.uuid + " isHost: " + sdpData.isHost);

              socket.on('video-answer', function (data) {
                console.log('I have received a video answer!');
                var description = new RTCSessionDescription(data.sdp);
                myPeerConnection.setRemoteDescription(description);
              });

              socket.emit('video-offer', sdpData);
            });
          console.log('I sent the video offer!');
        })
        .catch(function (err) {
          console.error('mediaStream error : ', err);
        });
    });


    socket.on('video-offer', function (data) {
      console.log('I have received a video offer!');
      var myPeerConnection = new RTCPeerConnection(servers);

      myPeerConnection.onicecandidate = handleICECandidateEvent;
      myPeerConnection.onaddstream = that.handleAddStreamEvent;

      navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
          localStream = stream;
          localVideo.srcObject = stream;
          //localAudio.srcObject = stream;

          var description = new RTCSessionDescription(data.sdp);
          myPeerConnection.setRemoteDescription(description);
          myPeerConnection.addStream(localStream);

          socket.on('new-ice-canidate', function (data) {
            console.log('I have got a new ice canidate datat=', data);
            var canidate = new RTCIceCandidate(data.candidate);
            myPeerConnection.addIceCandidate(canidate);
          });

          myPeerConnection.createAnswer()
            .then(function (answer) {
              myPeerConnection.setLocalDescription(answer);
            })
            .then(function () {
              socket.emit('video-answer', {
                sdp: myPeerConnection.localDescription,
              });
              console.log("socket.on('video-offer', function (data) socket.emit('video-answer", {
                sdp: myPeerConnection.localDescription,
              }, ' ) I have sent a video answer!');
            });
        })
        .catch(function (err) {
          console.error('mediaStream error : ', err);
        });
    });

  } //end componetDidMount()

  
}
  export default JoinSession