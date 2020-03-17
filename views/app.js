var ai;
var img;
function preload(){
    img = loadImage('pen.png')
}
function setup(){
    createCanvas(600,600)
    image(img,0,0,width,height)
    ai = ml5.imageClassifier('MobileNet',()=>{
        console.log('model ready')
        ai.predict(img,(err,res)=>{
            console.log(res)
        })
    })
}