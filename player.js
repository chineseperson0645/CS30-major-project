/* eslint-disable */

class mainPlayer {
  constructor({postion, velocity, color = "red", offset}) {
    this.postion = postion;
    this.velocity = velocity;
    this.height = 150; 
    this.width = 50;
    this.lastKeys;
    this.attackBox = {
      postion: {
        x: this.postion.x,
        y: this.postion.y
      },
      offset, 
      width: 100 , 
      height: 50
    }
    this.color = color;
    this.isAttacking;
  }

  display() {
    fill(this.color); 
    rect(this.postion.x, this.postion.y, this.width, this.height);

    // attack box drawn
    if (this.isAttacking){
    fill("green");
    rect(this.attackBox.postion.x, this.attackBox.postion.y, this.attackBox.width, this.attackBox.height); 
    }
  }

  update() {
    
    this.attackBox.postion.x = this.postion.x + this.attackBox.offset.x;
    this.attackBox.postion.y = this.postion.y; 

    this.postion.x += this.velocity.x; 
    this.postion.y += this.velocity.y;

    if (this.postion.y + this.height + this.velocity.y >= height) {
      this.velocity.y = 0; 
    }
    else {
      this.velocity.y += gravity; 
    }
  }

  attack() {
    this.isAttacking = true; 
    setTimeout(() => {
      this.isAttacking = false 
    }, 100);

  }
}
  