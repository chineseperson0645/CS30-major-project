class Sprite {
  constructor({postion, imageSrc, framesMax = 1}){
    this.postion = postion;
    this.width = 96; 
    this.height = 96;
    this.image = new Image();
    this.image.src = imageSrc; 
    this.framesMax = framesMax;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 1;
    
  }


  update() {
    this.framesElapsed ++;
    if (this.framesElapsed % this.framesHold === 0 ) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++; 
      }
      else {
        this.framesCurrent = 0; 
      }
    }       
  }
}




class Player extends Sprite {
  constructor({velocity, postion, offset, imageSrc, framesMax = 1, sprites}){
    
    super({postion, imageSrc, framesMax, sprites});

    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 1; 
    this.velocity = velocity;
    this.image = imageSrc;
    this.sprites = sprites; 
    this.width = 50; 
    this.height = 150;
    this.lastKeys;
    this.playerWidth = 96; 
    this.playerHeight = 96; 
    this.frameX = 0; 
    this.frameY = 0;
    this.gameFrame = 0;
    this.staggerFrames = 7;
    
    
    for (let sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
    console.log(this.sprites);


    this.attackBox = {
      postion: {
        x: this.postion.x,
        y: this.postion.y
      },
      
      offset,
      width: 50, 
      height: 50
    };
    this.isAttacking; 
  
  }

  display() {

    if (this.isAttacking) {
      fill("green"); 
      rect(this.attackBox.postion.x, this.attackBox.postion.y, this.attackBox.width, this.attackBox.height);
    }
     
  }

  update() {

    image(this.image, this.postion.x, this.postion.y, this.playerWidth, this.playerHeight, this.frameX * this.playerWidth , this.frameY * this.playerHeight , this.playerWidth, this.playerHeight );
    
    if (this.gameFrame % this.staggerFrames === 0) {
      if (this.frameX < this.sprites.idle.framesMax) {
        this.frameX++; 
      }
      else {
        this.frameX = 0; 
      }
    }
    this.gameFrame++; 

    
    // if (this.framesElapsed % this.framesHold === 0 ) {
    //   if (this.framesCurrent < this.framesMax - 1) {
    //     this.framesCurrent++;  
    //   }
    //   else {
    //     this.framesCurrent = 0; 
    //   }
    // }
     
    this.attackBox.postion.x = this.postion.x - this.attackBox.offset.x;
    this.attackBox.postion.y = this.postion.y- - this.attackBox.offset.y; 


    this.postion.x += this.velocity.x; 
    this.postion.y += this.velocity.y;

    if (this.postion.y + this.playerHeight + this.velocity.y >= height) {
      this.velocity.y = 0; 
    }
    else {
      this.velocity.y += gravity;
    }
  }
  attack() {
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking = false; 
    }, 100);
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

      case "e":
        this.attack(); 
      }
    });
    
    window.addEventListener('keyup', (event) => {
      switch (event.key) {
      case 'd':
        this.velocity.x = 0; 
        keys.d.pressed = false; 
        break ;
          
      case 'a':
        keys.a.pressed = false;
        this.velocity.x = 0; 
        break;
        
      case 'w':
        keys.w.pressed = false; 
        break;
      }
    });
  }
}









