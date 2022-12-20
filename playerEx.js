class Player {
  constructor({velocity, postion}, idolePos){
    this.velocity = velocity;
    this.postion = postion;
    this.width = 50; 
    this.height = 150;
    this.image = idolePos;
  }

  display() {
    // fill("blue"); 
    // rect(this.postion.x, this.postion.y, this.width, this.height);
    image(this.image, this.postion.x, this.postion.y, playerWidth, playerHeight, frameX * playerWidth , frameY * playerHeight , playerWidth, playerHeight );
  }

  update() {

    this.postion.x += this.velocity.x; 
    this.postion.y += this.velocity.y;

    if (this.postion.y + playerHeight + this.velocity.y >= height) {
      this.velocity.y = 0; 
    }
    else {
      this.velocity.y += gravity;
    }
  }

  // movement(){
   
    
  // }

}