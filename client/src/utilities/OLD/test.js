// var localVideo = document.getElementById('local-video');

// var handleAddStreamEvent = function (event) {

//   console.log('handleAddStreamEvent() Remote Stream has been received!');
//   console.log("handleAddStreamEvent() event.stream=", event.stream)

//   var id = event.stream.id;

//   var newRemoteVideo = document.createElement('video');
//   var newRemoteAudio = document.createElement('audio');

//   newRemoteVideo.setAttribute('autoplay', true);

//   newRemoteVideo.setAttribute('width', 350);
//   newRemoteVideo.setAttribute('height', 350);

//   newRemoteVideo.id = id + "-video";
//   newRemoteAudio.id = id + "-audio";

//   newRemoteVideo.srcObject = event.stream;

//   console.log("handleAddStreamEvent() create new audio& video element with event.stream.id=", event.stream)

//   var target = document.getElementById('remote');

//   target.appendChild(newRemoteVideo);

// };


// I know that I would add `event.stream` to an array in the state.  Somthing like: 
// [ {videoElement:somevalue, //such as `= document.createElement('video')`
//    audioElement: somevalue, //such as ` = document.createElement('audio')`
//    stream: event.stream, 
//    key: event.stream.id }]

// Then i know need to be able to create new video & element(component) for each new `event.stream` added to the state.
// I also know that `event.stream` has an id that is unique that can used for key={event.stream.id} 

// I just dont 1) what type of componet `newRemoteVideo` and `newRemoteAudio` to create 
// 2) how to get the return value of document.createElement('video') in JSX
// 3) how to set the `newRemoteVideo.`srcObject`` = event.stream  in JSX;

// Do i look for a react video compenent such as 