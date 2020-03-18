var sw = document.querySelector('.middle')
var c1 = document.querySelector('.c1')
var c2 = document.querySelector('.c2')
var hover = document.querySelector('.play')
var vSection = document.querySelector('.vid')
var video = document.querySelector('.video')
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