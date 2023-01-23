class Enemy {
  constructor({position, velocity, offset}) {
    this.position = position; 
    this.velocity = velocity;
    this.playerHeight = 96;
    this.offset = offset; 
  
  
  }


  update() {

    this.position.x += this.velocity.x; 
    this.position.y += this.velocity.y;

    if (this.position.y + this.playerHeight + this.velocity.y >= height) {
      this.velocity.y = 0; 
    }
    else {
      this.velocity.y += gravity;
    }
  }


  display() {
    fill("red"); 
    rect(this.position.x, this.position.y, 96, 96);
  } 
}