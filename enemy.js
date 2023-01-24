class Animations {
  constructor({position, imageSrc, framesMax = 1, animations}){
    this.position = position;
    this.width = 128; 
    this.height = 128;
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




class Enemy extends Animations {
  constructor({velocity, position, offset, imageSrc, framesMax =1 , animations}){
    
    super({position, imageSrc, framesMax, animations});

  
    this.velocity = velocity;
    this.image = imageSrc;
    this.animations = animations; 
    this.width = 128; 
    this.height = 128;
    this.lastKeys;
    this.playerWidth = 128; 
    this.playerHeight = 128; 
    this.frameX = 0; 
    this.frameY = 0;
    this.gameFrame = 0;
    this.staggerFrames = 7;
    
    
    for (let animation in this.animations) {
      animations[animation].image = new Image();
      animations[animation].image.src = animations[animation].imageSrc;
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
    this.switchanimation('attack1'); 
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking = false; 
    }, 100);
  }
  
  switchanimation(animation) {
    if (this.image === this.animations.defaultAttack1.imageSrc && this.frameX < this.animations.defaultAttack1.framesMax - 1) {
      return; 
    }
    switch (animation) {
      case 'idle':
        if (this.image !== this.animations.idle.imageSrc) {
          this.image = this.animations.idle.imageSrc;
          this.framesMax = this.animations.idle.framesMax;
          this.frameX = 0; 

        }
        break;
    
      case 'run':
        if (this.image !== this.animations.run.imageSrc) {
          this.image = this.animations.run.imageSrc;
          this.framesMax = this.animations.run.framesMax;

        }

        break;

      case 'Up':
        if (this.image !== this.animations.jumpUp.imageSrc) {
        this.image = this.animations.jumpUp.imageSrc;
        this.framesMax = this.animations.jumpUp.framesMax;
        this.frameX = 0;
        }
        break;
      
        case 'runback':
        if (this.image !== this.animations.runback.imageSrc) {
          this.image = this.animations.runback.imageSrc;
          this.framesMax = this.animations.runback.framesMax;
          this.frameX = 0; 
        }
        break;
      
        case 'Down':
          if (this.image !== this.animations.fallDown.imageSrc) {
        this.image = this.animations.fallDown.imageSrc;
        this.framesMax = this.animations.fallDown.framesMax;
        this.frameX = 0;
          }
        
        break;

        case 'attack1':
          if (this.image !== this.animations.defaultAttack1.imageSrc) {
            this.image = this.animations.defaultAttack1.imageSrc;
            this.framesMax = this.animations.defaultAttack1.framesMax;
            this.frameX = 0;
          break;
        }

  }


  }
  
}









