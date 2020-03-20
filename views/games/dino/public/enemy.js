function Enemy(){
    this.x = width
    this.y = ground
    this.height = 20
    this.length = 20
    this.velocity = 5
    this.move = ()=>{
       this.x -= this.velocity
       if(this.x < 0){
           this.x = width
       }
    }
    this.spawn = ()=>{
        fill(255,0,0)
        rect(this.x,this.y-this.height,this.length,this.height)
    }
}