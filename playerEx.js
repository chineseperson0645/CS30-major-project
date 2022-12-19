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

    this.postion.x += this.velocity.x; 
    this.postion.y += this.velocity.y;

    if (this.postion.y + this.height + this.velocity.y >= height) {
      this.velocity.y = 0; 
    }
    else {
      this.velocity.y += gravity;
    }
  }

  // movement(){
  //   window.addEventListener('keyup', (event) => {
  //     switch (event.key) {
  //       case 'ArrowRight':
  //     keys.ArrowRight.pressed = false;
  //     break
    
  //   case 'ArrowLeft':
  //     keys.ArrowLeft.pressed = false;
  //     break
    
  //   case 'ArrowUp':
  //     keys.ArrowUp.pressed = false;
  //     break
  //     }
  // }
}