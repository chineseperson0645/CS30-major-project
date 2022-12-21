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

  movement(){
    if (keys.a.pressed === true && player1.lastKeys === "a") {
      player1.velocity.x = -5; 
    }
    else if (keys.d.pressed === true && player1.lastKeys === "d"){
      player1.velocity.x = 5; 
    }
  
    window.addEventListener('keydown', (event) => {
      switch (event.key) {
      case 'd':
        keys.d.pressed = true;
        player1.lastKeys = "d"; 
        break;
        
      case 'a':
        keys.a.pressed = true;
        player1.lastKeys = "a"; 
        break;
        
      case 'w':
        player1.velocity.y = -20; 
        break;  
      }
    });

  }
}
