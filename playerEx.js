class Sprite {
  constructor({postion, imageSrc, framesMax = 1, sprites}){
    this.postion = postion;
    this.width = 96; 
    this.height = 96;
    this.image = new Image();
    this.image.src = imageSrc; 
    this.framesMax = framesMax;
    
    
  }
  animateFrames () {
    if (this.gameFrame % this.staggerFrames === 0) {
      if (this.frameX < this.framesMax - 1) {
        this.frameX++; 
      }
      else {
        this.frameX = 0;
      }
    }
    this.gameFrame++; 
  }

}




class Player extends Sprite {
  constructor({velocity, postion, offset, imageSrc, framesMax =1 , sprites}){
    
    super({postion, imageSrc, framesMax, sprites});

  
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
      // rect(this.attackBox.postion.x, this.attackBox.postion.y, this.attackBox.width, this.attackBox.height);
    }
     
  }

  update() {
    this.animateFrames(); 


    image(this.image, this.postion.x, this.postion.y, this.playerWidth, this.playerHeight, this.frameX * this.playerWidth , this.frameY * this.playerHeight , this.playerWidth, this.playerHeight );
    
   
    this.attackBox.postion.x = this.postion.x - this.attackBox.offset.x;
    this.attackBox.postion.y = this.postion.y - this.attackBox.offset.y; 


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
    this.switchSprite('attack1'); 
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking = false; 
    }, 100);
  }
  
  switchSprite(sprite) {
    if (this.image === this.sprites.defaultAttack1.imageSrc && this.frameX < this.sprites.defaultAttack1.framesMax - 1) {
      return; 
    }
    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites.idle.imageSrc) {
          this.image = this.sprites.idle.imageSrc;
          this.framesMax = this.sprites.idle.framesMax;
          this.frameX = 0; 

        }
        break;
    
      case 'run':
        if (this.image !== this.sprites.run.imageSrc) {
          this.image = this.sprites.run.imageSrc;
          this.framesMax = this.sprites.run.framesMax;

        }

        break;

      case 'Up':
        if (this.image !== this.sprites.jumpUp.imageSrc) {
        this.image = this.sprites.jumpUp.imageSrc;
        this.framesMax = this.sprites.jumpUp.framesMax;
        this.frameX = 0;
        }
        break;
      
        case 'runback':
        if (this.image !== this.sprites.runback.imageSrc) {
          this.image = this.sprites.runback.imageSrc;
          this.framesMax = this.sprites.runback.framesMax;
          this.frameX = 0; 
        }
        break;
      
        case 'Down':
          if (this.image !== this.sprites.fallDown.imageSrc) {
        this.image = this.sprites.fallDown.imageSrc;
        this.framesMax = this.sprites.fallDown.framesMax;
        this.frameX = 0;
          }
        
        break;

        case 'attack1':
          if (this.image !== this.sprites.defaultAttack1.imageSrc) {
            this.image = this.sprites.defaultAttack1.imageSrc;
            this.framesMax = this.sprites.defaultAttack1.framesMax;
            this.frameX = 0;
          break;
        }

  }


  }
  
}









