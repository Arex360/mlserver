var nav = document.querySelector('nav').style
var sc = document.querySelector('#Scale').style
var rc = document.querySelector('#Resize').style
var rgb = document.querySelector('#RGB').style
var test = document.querySelector('#XT')
var adjust = ()=>{
    nav.position = 'absolute'
    scale.position = 'relative'
    nav.width = window.innerWidth / 8
    nav.height = window.innerHeight
    sc.width = '100%'
    sc.height = '20%'
    sc.marginLeft = '5%'
    sc.top = "2%"
    rc.width = '100%'
    rc.height = '20%'
    rc.marginLeft = '5%'
    rc.top = "2%"
    rgb.width = '100%'
    rgb.height = '20%'
    rgb.marginLeft = '5%'
    rgb.top = "2%"
}
test.addEventListener('change',(e)=>{
    console.log(test.value)
})
window.addEventListener('load',adjust)
window.addEventListener('resize',adjust)