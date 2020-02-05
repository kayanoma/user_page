
var URL
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                // alert(allText);
                URL = allText
            }
        }
    }
    rawFile.send(null);
}
// readTextFile("./url.txt")

function getURL(){
  URL=document.getElementById('URL').value;
  // websocket connect
  console.log(URL);
  // window.open(URL);
  // document.getElementById('check').innerText=URL;
}

function send_data(id){
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    // iOS 13+
      DeviceMotionEvent.requestPermission()
      .then(response => {
    
        const start=Date.now();
        var now=start;
        var data;
        var times;
        var accel;
        if (response == 'granted') {
          var ws;
          document.getElementById('console').innerText=ws.readyState;
          ws=new WebSocket(URL);
          document.getElementById('console').innerText=ws.readyState;
            window.addEventListener('devicemotion', (e) => {
              // do something with e
              times={
                "abs_time":Date.now(),
                "time":Date.now()-start,
                "delta_t":Date.now()-now
              }
              document.getElementById('abs_time').innerText=times.abs_time;
              document.getElementById('time').innerText=times.time;
              document.getElementById('delta_t').innerText=times.delta_t;
              // document.getElementById('time').i.innerText=Date.now()-start;
              // document.getElementById('delta_t').innerText=Date.now()-now;
              now=Date.now();
              accel={
                "x":e.acceleration.x,
                "y" :e.acceleration.y,
                "z" :e.acceleration.z
              }
              // data={
              //   "times":times,
              //   "accel":accel
              // }
              data=[id, times.abs_time, times.time, times.delta_t, accel.x, accel.y, accel.z];
              
              document.getElementById('value_x').innerText=accel.x;
              document.getElementById('value_y').innerText=accel.y;
              document.getElementById('value_z').innerText=accel.z;
              // document.getElementById('value_x').innerText=e.acceleration.x;
              // document.getElementById('value_y').innerText=e.acceleration.y;
              // document.getElementById('value_z').innerText=e.acceleration.z;
              
              ws.send(data);
              // setTimeout(send, 100)
              // document.getElementById('state').innerText=send;
            });
          // 受け取ったデータからグラフ作成
          
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

// function send_data(id){
//   if (typeof DeviceMotionEvent.requestPermission === 'function') {
//     // iOS 13+
//       DeviceMotionEvent.requestPermission()
//       .then(response => {
    
//         const start=Date.now();
//         var now=start;
//         var data;
//         var times;
//         var accel;
//         if (response == 'granted') {
//           var ws;
//           ws=new WebSocket(URL, ['echo-protocol','soap', 'xmpp']);
//           ws.onopen=function(){
//             window.addEventListener('devicemotion', (e) => {
//               // do something with e
//               times={
//                 "abs_time":Date.now(),
//                 "time":Date.now()-start,
//                 "delta_t":Date.now()-now
//               }
//               document.getElementById('abs_time').innerText=times.abs_time;
//               document.getElementById('time').innerText=times.time;
//               document.getElementById('delta_t').innerText=times.delta_t;
//               // document.getElementById('time').i.innerText=Date.now()-start;
//               // document.getElementById('delta_t').innerText=Date.now()-now;
//               now=Date.now();
//               accel={
//                 "x":e.acceleration.x,
//                 "y" :e.acceleration.y,
//                 "z" :e.acceleration.z
//               }
//               // data={
//               //   "times":times,
//               //   "accel":accel
//               // }
//               data=[id, times.abs_time, times.time, times.delta_t, accel.x, accel.y, accel.z];
              
//               document.getElementById('value_x').innerText=accel.x;
//               document.getElementById('value_y').innerText=accel.y;
//               document.getElementById('value_z').innerText=accel.z;
//               // document.getElementById('value_x').innerText=e.acceleration.x;
//               // document.getElementById('value_y').innerText=e.acceleration.y;
//               // document.getElementById('value_z').innerText=e.acceleration.z;
              
//               ws.send(data);
//               setTimeout(send, 100)
//               document.getElementById('state').innerText=send;
//             });
//           }
//           // 受け取ったデータからグラフ作成
          
//         }
//       })
//       .catch(console.error)
//   } else {
//     // non iOS 13+
//     document.getElementById('value_x').innerText='error not ios 13+';
//     document.getElementById('value_y').innerText='';
//     document.getElementById('value_z').innerText='';
//   }
// };