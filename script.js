
var URL
function client(){
  var connection=new WebSocket('https://6191df17.ngrok.io');
  connection.addEventListener("open", e =>{
    document.getElementById('start').innerText='start';
    document.getElementById('state').innerText=connection.readyState;
    connection.send('Hello');
  });
  connection.addEventListener("message", e=>{
    document.getElementById('return').innerText=e.data;
    connection.close;
  });
};



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
  }
};


function getURL(){
  URL=document.getElementById('URL').value;
  // websocket connect
  console.log(URL);
  // window.open(URL);
  document.getElementById('check').innerText=URL;
}

function get_permission2(){
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    // iOS 13+
    
    const io= require('./../set_up.js');
    window.open(URL)
      io.on('connection', (socket)=>{
        console.log('made socket connection', socket.id);
    
        socket.on('echo', (arg) => {
            console.log(arg);
        })
        socket.on('disconnect', () => {
            console.log('disconnect');
        });

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
              io.emit('accel', e.acceleration);
            })
          }
        })
        .catch(console.error)
        // socket.on('client', (obj)=>{
        //     obj.x;
        //     obj.y;
        //     obj.z;
        // });
    });
  } else {
    // non iOS 13+
    document.getElementById('value_x').innerText='error not ios 13+';
    document.getElementById('value_y').innerText='';
    document.getElementById('value_z').innerText='';
  }
};

function get_permission3(){
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    // iOS 13+


      DeviceMotionEvent.requestPermission()
      .then(response => {
    
        const start=Date.now();
        var now=start;
        if (response == 'granted') {
          var ws;
          ws=new WebSocket(URL);
          window.addEventListener('devicemotion', (e) => {
            // do something with e
            document.getElementById('time').innerText=Date.now()-start;
            document.getElementById('delta_t').innerText=Date.now()-now;
            now=Date.now();
            document.getElementById('value_x').innerText=e.acceleration.x;
            document.getElementById('value_y').innerText=e.acceleration.y;
            document.getElementById('value_z').innerText=e.acceleration.z;
            

            ws.onopen=function(){
              ws.send(e);
              setTimeout(send, 100)
              document.getElementById('state').innerText=send;
            }
          })
        }
      })
      .catch(console.error)
  } else {
    // non iOS 13+
    document.getElementById('value_x').innerText='error not ios 13+';
    document.getElementById('value_y').innerText='';
    document.getElementById('value_z').innerText='';
  }
};
