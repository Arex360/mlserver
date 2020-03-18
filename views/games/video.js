var sw = document.querySelector('.middle')
var c1 = document.querySelector('.c1')
var c2 = document.querySelector('.c2')
var hover = document.querySelector('.play')
var vSection = document.querySelector('.vid')
var video = document.querySelector('.video')
var btn = document.querySelector('.upv')
var addr = document.querySelector('.address')
var fill = document.querySelector('.fill')
var perc = document.querySelector('.perc')
var vidId = document.querySelector('.vID')
var sid = document.querySelector('.sid')
var setId = document.querySelector('.set')
var cid = document.querySelector('.cid')

var isUploaded = false
var URL = ''
var store = firebase.storage();
var database = firebase.database();
var dRef = database.ref('id')
var id = 0
var filename = ''
var ref = store.ref()
var videoList = []
var selected = false

setId.addEventListener('click',()=>{
    if(sid.value > id){
        alert('Video Not Found')
    }else{
        filename = sid.value
        cid.innerHTML = "Current ID: " + filename
        isUploaded = true
    }
})


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
        sw.style.left = '90%'
        hover.innerHTML = 'Go Back'
    }else{
        sw.style.top = '50%'
        vSection.style.display = 'none'
        sw.style.left = '50%'
        hover.innerHTML = "Let's play"
    }
})
btn.addEventListener('click',()=>{
    if(isUploaded){
        firebase.storage().ref().child("videos/"+filename.toString()).getDownloadURL().then(function(downloadURL) {
            URL = downloadURL
            video.src = URL
    });
    }else{
        let vi = prompt('enter ID you want to play')
        firebase.storage().ref().child("videos/"+vi.toString()).getDownloadURL().then(function(downloadURL) {
            URL = downloadURL
            video.src = URL
    });
    }
})
addr.addEventListener('change',(event)=>{
    console.log(event.target.files[0].name)
    for(let i=0;i <event.target.files.length;i++){
        let imgFile = event.target.files[i]
        filename = filename + 1
        let Ref = firebase.storage().ref("videos/"+filename.toString())
        let task = Ref.put(imgFile)
        console.log("being uploaded..")
        task.on('state_changed',p=>{
            let progress = p.bytesTransferred / p.totalBytes * 100
            let status = Math.floor(progress)
            console.log(status)
            perc.innerHTML = status + '%'
            fill.style.width = status + '%'
            if(progress == 100){
                isUploaded = true
                vidId.innerHTML = 'Video ID: ' + filename.toString()
                id = id + 1
                dRef.set(id)
            }
        })
        
    }
})
window.addEventListener('load',()=>{
    dRef.on('value',snap=>{
        filename = snap.val()
        id = snap.val()
    })
})