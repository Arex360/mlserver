var testVideo = document.querySelector('.video')
var stats = document.querySelector('.st')
var ai;
var video1;
var Decison;
var setup = ()=>{
    video1 = createCapture(VIDEO)
    ai = ml5.imageClassifier('model.json',video1,()=>{
        console.log('model is ready')
        ai.predict(Predict)
    })
    video1.hide()
}
var Predict = (err,Result)=>{
    console.log(Result[0].label)
    Decison = Result[0].label
    if(Decison == 'play'){
        console.log('playing')
        testVideo.play()
    }else if(Decison == 'stop'){
        console.log('Stopping')
        testVideo.pause()
    }else if(Decison == 'reverse'){
        console.log('revinding')
    }else if(Decison == 'forward'){
        console.log('forwarding')
    }
    ai.predict(Predict)
}