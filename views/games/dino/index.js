var x; 
let player;
let playerX = 20
let playerY = 20
let sPos = 50
var ground = 350
let enemy;
let gravity = 2
let grounded = true
let gameover = false
var setup = ()=>{
    canvas = createCanvas(x,400)
    canvas.position(40,40)
    player = new Player()
    enemy = new Enemy()
}
var keyPressed= K =>{
    K = key
    if(K == 'w' && grounded){
        if(player.y > 22){
           player.y += -90
           grounded = false
        }
    }
}
var isGameOver = ()=>{
    let X = (enemy.x - player.x) * (enemy.x - player.x)
    let Y = (enemy.y - player.y) * (enemy.y - player.y) 
    let distance = Math.sqrt(X + Y)
    let offset = distance > 0 && distance < 3
    if(offset && grounded){
        gameover = true
    }
}
var draw = ()=>{
    if(!gameover){
        if(player.y != 350){
            player.y += gravity
            if(player.y == 350){
                grounded = true
            }
        }
        background(201, 209, 203)
        player.show()
        player.platform()
        enemy.spawn()
        enemy.move()
        isGameOver()
    }else{
        gameover = true
    }
}
window.addEventListener('load',()=>{
    x = (window.innerWidth/100) * 80
    setup()
})
