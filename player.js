/* eslint-disable */

class mainPlayer {
  constructor({postion, velocity}) {
    this.postion = postion;
    this.velocity = velocity;
    this.height = 150; 
    this.width = 50;
    this.lastKeys; 
  }

  display() {
    fill("red"); 
    rect(this.postion.x, this.postion.y, this.width, this.height); 
  }

  update() {
    
    this.postion.x += this.velocity.x; 

    this.postion.y += this.velocity.y;
    if (this.postion.y + this.height + this.velocity.y >= height) {
      this.velocity.y = 0; 
    }
    else {
      this.velocity.y += gravity; 
    }
  }
}
  