let pRef = firebase.storage().ref("image/"+"new")
window.addEventListener('keydown',()=>{
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(function (mediaStream) {
            const mediaStreamTrack = mediaStream.getVideoTracks()[0];
            const imageCapture = new ImageCapture(mediaStreamTrack);
            alert('uploading')
            imageCapture.takePhoto().then(blob=>{
                let work = pRef.put(blob)
                alert('wow')
                work.on('state_changed',p=>{
                let prog = p.bytesTransferred / p.totalBytes * 100
                if(prog == 100){
                    alert('done')
                }
            })
            })

          })
          .catch(function (err0r) {
            console.log(err0r);
          });
      }
})