class Sprite {
  constructor({position, imageSrc, framesMax = 1, sprites}){
    this.position = position;
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
  constructor({velocity, position, offset, imageSrc, framesMax =1 , sprites}){
    
    super({position, imageSrc, framesMax, sprites});

  
    this.velocity = velocity;
    this.image = imageSrc;
    this.sprites = sprites; 
    this.width = 96; 
    this.height = 96;
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
 

  display() {

    if (this.isAttacking) {
      noStroke(); 
      noFill(); 
      rect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height);
    }
     
  }

  update() {
    this.animateFrames(); 


    image(this.image, this.position.x, this.position.y, this.playerWidth, this.playerHeight, this.frameX * this.playerWidth , this.frameY * this.playerHeight , this.playerWidth, this.playerHeight );
    
   
    this.attackBox.position.x = this.position.x - this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y - this.attackBox.offset.y; 


    this.position.x += this.velocity.x; 
    this.position.y += this.velocity.y;

    if (this.position.y + this.playerHeight + this.velocity.y >= height) {
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

    if (this.image === this.sprites.hit.imageSrc && this.frameX < this.sprites.hit.framesMax - 1) {
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

        case 'hit':
          if (this.image !== this.sprites.hit.imageSrc) {
            this.image = this.sprites.hit.imageSrc;
            this.framesMax = this.sprites.hit.framesMax;
            this.frameX = 0;
          break;
        }

  }


  }
  
}









