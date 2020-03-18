var sw = document.querySelector('.middle')
var c1 = document.querySelector('.c1')
var c2 = document.querySelector('.c2')
var hover = document.querySelector('.play')
var vSection = document.querySelector('.vid')
var video = document.querySelector('.video')
var btn = document.querySelector('.upv')
var addr = document.querySelector('.address')
var URL = ''
var store = firebase.storage();
var ref = store.ref()



var selected = false
sw.addEventListener('mouseover',()=>{
    if(!selected){
    c1.style.width = '0px'
    c2.style.height = '0px'
    hover.style.color = 'black'
    sw.style.border = 'black solid 2px'
    }
})
sw.addEventListener('mouseout',()=>{
    if(!selected){
    c1.style.width = '100%'
    c2.style.height = '50%'
    hover.style.color = 'white'
    sw.style.border = 'white solid 2px'
    }
})
sw.addEventListener('click',()=>{
    selected = !selected
    if(selected){
        vSection.style.display = 'block'
        sw.style.top = '80%'
        sw.style.left = '80%'
        hover.innerHTML = 'Go Back'
    }else{
        sw.style.top = '50%'
        vSection.style.display = 'none'
        sw.style.left = '50%'
        hover.innerHTML = "Let's play"
    }
})
btn.addEventListener('click',()=>{
    let path = addr.value
    video.src = path
})
addr.addEventListener('change',(event)=>{
    console.log(event.target.files[0].name)
    for(let i=0;i <event.target.files.length;i++){
        let imgFile = event.target.files[i]
        let Ref = firebase.storage().ref("videos/"+imgFile.name)
        let task = Ref.put(imgFile)
        console.log("being uploaded..")
        task.on('state_changed',p=>{
            let progress = p.bytesTransferred / p.totalBytes * 100
            console.log(progress)
            if(progress == 100){
                firebase.storage().ref().child("videos/"+imgFile.name).getDownloadURL().then(function(downloadURL) {
                    URL = downloadURL
                    video.src = URL
        });
            }
        })
        
    }
})