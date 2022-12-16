class Player {
  constructor({velocity, postion}){
    this.velocity = velocity;
    this.postion = postion;
    this.width = 50; 
    this.height = 150;
  }

  display() {
    fill("blue"); 
    rect(this.postion.x, this.postion.y, this.width, this.height); 
  }

  update() {
      this.postion.y += 0.7;
    if (this.postion.y + this.height + this.velocity.y >= height) {
      this.velocity.y = 0; 
    }
    else {
      this.velocity.y += gravity; 
  }
}
}