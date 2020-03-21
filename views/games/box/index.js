var xt = document.querySelector('#XT')
var yt = document.querySelector('#YT')
var xs = document.querySelector('#XS')
var ys = document.querySelector('#YS')
var R = document.querySelector('#R')
var G = document.querySelector('#G')
var B = document.querySelector("#B")
let color = 0
var i = 'back.png'
let init = 0
var preload = () =>{
    i = createImg('back.png',()=>{
       image(i,width, height)
       i.hide()
    })
}
var setup = (w,h)=>{
    w = window.innerWidth / 1.4
    h = window.innerHeight / 1.4
    xt.max = w
    yt.max = h
    xs.max = w
    ys.max = h
    var pos = createCanvas(w,h)
    createImage(width, height)
}
var draw = ()=>{
    background(0)
    image(i, 0, 0, width, height)
    fill(R.value,G.value,B.value)
    rect(xt.value, yt.value, xs.value, ys.value) 
}
window.addEventListener('resize',()=>{
    let a = window.innerWidth / 1.4 
    let b = window.innerHeight / 1.4
    color = 23
    setup(a,b)
})