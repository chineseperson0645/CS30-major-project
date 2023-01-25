class Animations {
  constructor({position, imageSrc, framesMax = 1, animations}){ //Passes through variables
    //Sets postion 
    this.position = position;
    this.width = 128; 
    this.height = 128;
    //Makes new image
    this.image = new Image();
    //Grabs image source
    this.image.src = imageSrc; 
    //Max ammount of frames
    this.framesMax = framesMax;
    
     
  }
  //Cycles through sprites in sprite sheet
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



//Enemy class that inherites the Animation class
class Enemy extends Animations {
  constructor({velocity, position, offset, imageSrc, framesMax =1 , animations}){
    //Grabs varibles from Animations
    super({position, imageSrc, framesMax, animations});

  
    this.velocity = velocity;
    this.image = imageSrc;
    this.animations = animations; 
    this.width = 128; 
    this.height = 128;
    this.lastKeys;
    this.playerWidth = 128; 
    this.playerHeight = 128;
    //Allows to cyle through sprite sheet
    this.frameX = 0; 
    this.frameY = 0;
    //How many frames are going
    this.gameFrame = 0;
    //Delays animation
    this.staggerFrames = 7;
    //Health
    this.health = enemyHealth;
    //Checks dead is true
    this.dead = false; 
    
    //Makes object for animations
    for (let animation in this.animations) {
      animations[animation].image = new Image();
      animations[animation].image.src = animations[animation].imageSrc;
    }


    //Where the other players hitbox has to be in to recive damage
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      //Follows character
      offset,
      width: 50, 
      height: 50
    };
    this.isAttacking; 
  
  }
 

  display() {

    if (this.isAttacking) {
      //attack box
      noStroke(); 
      noFill(); 
      rect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height);
    }
     
  }

  update() {
    if (this.dead === false) {
    this.animateFrames();
    }

    //Draws player
    image(this.image, this.position.x, this.position.y, this.playerWidth, this.playerHeight, this.frameX * this.playerWidth , this.frameY * this.playerHeight , this.playerWidth, this.playerHeight );
    
   //Follows player but slightly off
    this.attackBox.position.x = this.position.x - this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y - this.attackBox.offset.y; 

    //Postion and velocity connected
    this.position.x += this.velocity.x; 
    this.position.y += this.velocity.y;
    //Makes sure player does fall off screen
    if (this.position.y + this.playerHeight + this.velocity.y >= height) {
      this.velocity.y = 0; 
    }
    else {
      //Pushes player down acting like actual gravity
      this.velocity.y += gravity;
    }
  }
  //Attack function
  attack() {
    this.switchanimation('attack1'); 
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking = false; 
    }, 100);
  }
  //Take hit function
  takeHit() {
    this.health -= 10; 
    if (this.health <= 0 ) {
      this.switchanimation('death'); 
    }
    else {
      this.switchanimation('hit'); 

    }
  }
  //switches through animations
  switchanimation(animation) {

    if (this.image === this.animations.death.imageSrc) {
      if (this.frameX === this.animations.death.framesMax - 1) 
        this.dead = true; 
        return;
    }

    if (this.image === this.animations.defaultAttack1.imageSrc && this.frameX < this.animations.defaultAttack1.framesMax - 1) {
      return;
    }

    if (this.image === this.animations.hit.imageSrc && this.frameX < this.animations.hit.framesMax - 1) {
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

        case 'death':
          if (this.image !== this.animations.death.imageSrc) {
            this.image = this.animations.death.imageSrc;
            this.framesMax = this.animations.death.framesMax;
            this.frameX = 0;
          }

        case 'hit':
          if (this.image !== this.animations.hit.imageSrc) {
            this.image = this.animations.hit.imageSrc;
            this.framesMax = this.animations.hit.framesMax;
            this.frameX = 0;
           }
          
          break;
        

  }


  }
  
}









