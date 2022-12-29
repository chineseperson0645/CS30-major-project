class Player {
  constructor({velocity, postion}, idolePos){
    this.velocity = velocity;
    this.postion = postion;
    this.width = 50; 
    this.height = 150;
    this.image = idolePos;
    this.lastKeys;
    this.attackBox = {
      postion: this.postion,
      width: 100, 
      height: 50
    }
  
  }

  display() {
    image(this.image, this.postion.x, this.postion.y, playerWidth, playerHeight, frameX * playerWidth , frameY * playerHeight , playerWidth, playerHeight );
    rect(this.attackBox.postion.x, this.attackBox.postion.y, this.attackBox.width, this.attackBox.height); 
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
    if (keys.a.pressed === true && this.lastKeys === "a") {
      this.velocity.x = -5; 
    }
    else if (keys.d.pressed === true && this.lastKeys === "d"){
      this.velocity.x = 5; 
    }
  
    window.addEventListener('keydown', (event) => {
      switch (event.key) {
      case 'd':
        keys.d.pressed = true;
        
        this.lastKeys = "d"; 
        break;
        
      case 'a':
        keys.a.pressed = true;
        
        this.lastKeys = "a"; 
        break;
        
      case 'w':
      this.velocity.y = -20; 
        break;
      }
    })
    
    window.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'd':
          this.velocity.x = 0; 
          keys.d.pressed = false; 
          break 
          
        case 'a':
          keys.a.pressed = false;
          this.velocity.x = 0; 
          break
        
        case 'w':
          keys.w.pressed = false; 
          break
      }
    })
  }
}
