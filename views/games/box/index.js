var xt = document.querySelector('#XT')
var yt = document.querySelector('#YT')
var zt = document.querySelector("#ZT")
var xs = document.querySelector('#XS')
var ys = document.querySelector('#YS')
var zs = document.querySelector("#ZS")
var xr = document.querySelector("#XR")
var yr = document.querySelector("#YR")
var zr = document.querySelector("#ZR")
var R = document.querySelector('#R')
var G = document.querySelector('#G')
var B = document.querySelector("#B")
var Axis = document.querySelectorAll('.special')
var TD = false
let color = 0
var i = 'back.png'
let init = 0
window.addEventListener('keydown',e=>{
    if(e.key = 'J'){
        TD = !TD
        setup()
    }
})
var TDMode = ()=>{
    if(TD){
        alert('3D enabled')
        Axis.forEach(axe =>{
            axe.style.display = 'block'
        })
    }else{
        alert('3D disabled')
        Axis.forEach(axe =>{
            axe.style.display = 'none'
        })
    }
}
var setup = (w,h)=>{
    w = window.innerWidth / 1.4
    h = window.innerHeight / 1.4
    if(TD){
        xt.max = w/2.4
        xt.min = -w/2.4
        yt.max = h/2
        yt.min = -h/2
        zt.max = h/1.5
        zt.min = -h/1.5
        xs.max = w
        ys.max = h
        zs.max = h
        var pos = createCanvas(w,h,WEBGL)
        TDMode()
    }else{
        w = window.innerWidth / 1.4
        h = window.innerHeight / 1.4
        xt.max = (w / 100) * 96
        yt.max = (h /100) * 96
        xs.max = (w / 100) * 96
        ys.max = (h  /100 ) * 96
        var pos = createCanvas(w,h)
        TDMode()
    }
}
var draw = ()=>{
    background(0)
    fill(R.value,G.value,B.value)
    if(TD){
        translate(xt.value, yt.value,zt.value)
        rotateX(xr.value)
        rotateY(yr.value)
        rotateZ(zr.value)
        let a = box(xs.value, ys.value,zs.value)
    }else{
        rect(xt.value, yt.value, xs.value, ys.value)
    }
}
window.addEventListener('resize',()=>{
    let a = window.innerWidth / 1.4 
    let b = window.innerHeight / 1.4
    color = 23
    setup(a,b)
})
