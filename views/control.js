var anchor = document.querySelectorAll('.a')
var line = document.querySelectorAll('.line')
var bar = document.querySelector('.pbar')
var menu = document.querySelector('.menu')
var link = document.querySelector('.Link')
var mlink = document.querySelector('.mlink')
var add = document.querySelector('.t1')
window.addEventListener('resize',()=>{
    if(window.innerWidth > 1400 ){
        add.classList.add('mlink')
    }
})
window.addEventListener('scroll',()=>{
    if(window.scrollY > 300){
        anchor.forEach(e=>{
            e.classList.add('link')
        })
        line.forEach(e=>{
            e.classList.add('new')
        })
        bar.classList.add('mbar')
     }else{
        anchor.forEach(e=>{
            e.classList.remove('link')
        })
        line.forEach(e=>{
            e.classList.remove('new')
        })
        bar.classList.remove('mbar')
     }
})
