class Enemy {
  constructor({position, velocity, offset}) {
    this.position = position; 
    this.velocity = velocity;
    this.height = 96;
    this.width = 96; 
    this.offset = offset; 
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      
      offset,
      width: 50, 
      height: 50
    };
    this.isAttacking; 
  
  }
  
  


  update() {

    this.attackBox.position.x = this.position.x - this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y - this.attackBox.offset.y; 

    this.position.x += this.velocity.x; 
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y >= height) {
      this.velocity.y = 0; 
    }
    else {
      this.velocity.y += gravity;
    }
  }


  display() {
    if (this.isAttacking) {
      noStroke(); 
      noFill(); 
      rect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height);
    }

    fill("red"); 
    rect(this.position.x, this.position.y, this.width, this.height);
  } 
}