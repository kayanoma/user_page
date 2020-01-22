var client = function(){

};

const requestDeviceMotionPermission = () => {
  if (
    DeviceMotionEvent &&
    typeof DeviceMotionEvent.requestPermission === 'function'
  ) {
    // iOS 13+ の Safari
    // 許可を取得
    DeviceMotionEvent.requestPermission()
    .then(permissionState => {
      if (permissionState === 'granted') {
        // 許可を得られた場合、devicemotionをイベントリスナーに追加
        window.addEventListener('devicemotion', e => {
          // devicemotionのイベント処理
            e.acceleration.x
        })
      } else {
        // 許可を得られなかった場合の処理
        window.location.href='https://www.google.com/search?q=%E8%A8%B1%E5%8F%AF&rlz=1C1GCEU_jaJP858JP859&oq=%E8%A8%B1%E5%8F%AF&aqs=chrome..69i57j0l6j69i61.1720j1j7&sourceid=chrome&ie=UTF-8';
      }
    })
    .catch(console.error) // https通信でない場合などで許可を取得できなかった場合
  } else {
    window.location.href='https://www.google.com/search?q=%E8%A8%B1%E5%8F%AF&rlz=1C1GCEU_jaJP858JP859&oq=%E8%A8%B1%E5%8F%AF&aqs=chrome..69i57j0l6j69i61.1720j1j7&sourceid=chrome&ie=UTF-8';
    // 上記以外のブラウザ
  }
}

// ボタンクリックでrequestDeviceMotionPermission実行
const startButton = document.getElementById("start-button")
startButton.addEventListener('click', requestDeviceMotionPermission, false)