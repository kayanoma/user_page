// const express = require('express');
// const app = express();
// const socket=require('socket.io')
// const expressServer = app.listen(3000); //clientのポート番号（localhost:3000)
// const io = socketio(expressServer); 

// function client(){
//   var connection=new WebSocket('https://6191df17.ngrok.io');

  
//   connection.addEventListener("open", e =>{
//     document.getElementById('start').innerText='start';
//     document.getElementById('state').innerText=connection.readyState;
//     connection.send('Hello');
//   });
//   connection.addEventListener("message", e=>{
//     document.getElementById('return').innerText=e.data;
//     connection.close;
//   });

// };





// function client(){
//   // var connection=new WebSocket('wss://6191df17.ngrok.io');
//   var connection=new WebSocket('https://6191df17.ngrok.io');
//   // var connection=new WebSocket('wss://kayanoma.github.io/websocket_server/');
//   // var connection=new WebSocket('http://127.0.0.1:3000');
  
//   connection.addEventListener("open", e =>{
//     document.getElementById('start').innerText='start';
//     document.getElementById('state').innerText=connection.readyState;
//     connection.send('Hello');
//   });
//   connection.addEventListener("message", e=>{
//     document.getElementById('return').innerText=e.data;
//     connection.close;
//   });
//   // connection.onmessage=function(e){
//   //   document.getElementById('return').innerText=e.data;
//   // };
//   // connection.close();
//   // document.getElementById('state').innerText=connection.readyState;
//   // connection.send('Hello');
//   // connection.onmessage=function(e){
//   //   document.getElementById('return').innerText=e.data;
//   // };
//   // connection.close();
// };


function get_permission(){
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    // iOS 13+
    DeviceMotionEvent.requestPermission()
    .then(response => {
      const start=Date.now();
      var now=start;
      if (response == 'granted') {
        
        window.addEventListener('devicemotion', (e) => {
          // do something with e
          document.getElementById('time').innerText=Date.now()-start;
          document.getElementById('delta_t').innerText=Date.now()-now;
          now=Date.now();
          document.getElementById('value_x').innerText=e.acceleration.x;
          document.getElementById('value_y').innerText=e.acceleration.y;
          document.getElementById('value_z').innerText=e.acceleration.z;
          // e.acceleration
        })
      }
    })
    .catch(console.error)
  } else {
    // non iOS 13+
    document.getElementById('value_x').innerText='error not ios 13+';
    document.getElementById('value_y').innerText='';
    document.getElementById('value_z').innerText='';
    // document.getElementById('value_y').innerText='error not ios 13+';
    // document.getElementById('value_z').innerText='error not ios 13+';
  }
};



