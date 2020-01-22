function client(){
  // var connection=new WebSocket('wss://6191df17.ngrok.io');
  var connection=new WebSocket('ws://6191df17.ngrok.io');
  connection.send('Hello');
  connection.onmessage=function(e){
    document.getElementById('return').innerText=e.data;
  };
  connection.close();
};



function get_permission(){
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    // iOS 13+
    DeviceMotionEvent.requestPermission()
    .then(response => {
      if (response == 'granted') {
        window.addEventListener('devicemotion', (e) => {
          // do something with e
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



