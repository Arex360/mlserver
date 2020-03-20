function Player(){
    this.x = sPos
    this.y = ground
    this.g = ground
    this.show = function(){
        fill(255)
        rect(this.x,this.y-playerY,20,20)
    }
    this.platform = function(){
        fill(0)
        rect(0,this.g,x,200)
    }
}