class Sprite {
  constructor({position, imageSrc, framesMax = 1, sprites}){ //passes through everthing in the constructor to be used as variables later
    //Where the player is located 
    this.position = position;
    this.width = 96; 
    this.height = 96;
    //Creates new image
    this.image = new Image();
    //Contains the image source
    this.image.src = imageSrc;
    //Max ammount of frames
    this.framesMax = framesMax;
    
    
  }
  //Animates all of the frames for each sprite
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



//Player class inherites the sprite class 
class Player extends Sprite {
  constructor({velocity, position, offset, imageSrc, framesMax =1 , sprites}){
    //Takes varibales from sprite
    super({position, imageSrc, framesMax, sprites});

  
    this.velocity = velocity;
    this.image = imageSrc;
    this.sprites = sprites; 
    this.width = 96; 
    this.height = 96;
    //Checks what key was last pressed
    this.lastKeys;
    this.playerWidth = 96; 
    this.playerHeight = 96;
    //Frames that will times the png to create an animation 
    this.frameX = 0; 
    this.frameY = 0;
    //Increases as time goes on 
    this.gameFrame = 0;
    //Delays the animation
    this.staggerFrames = 7;
    //Player health
    this.health = globalPlayerHealth;
    //Part of character ending 
    this.dead = false; 

    //Makes object for sprites to be displayed
    for (let sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }


    //If another entity is in attack box will be damaged
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      //How far away from enemy
      offset,
      width: 50, 
      height: 50
    };
    //Starts attack
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
        //Checks and see if player is dead
    if (this.dead === false) {
      this.animateFrames();
      }

      //Displays idle image
    image(this.image, this.position.x, this.position.y, this.playerWidth, this.playerHeight, this.frameX * this.playerWidth , this.frameY * this.playerHeight , this.playerWidth, this.playerHeight );
    
    //Makes sure to follow player
    this.attackBox.position.x = this.position.x - this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y - this.attackBox.offset.y; 

    //Position and velocity are connected
    this.position.x += this.velocity.x; 
    this.position.y += this.velocity.y;
    
    //Boundries
    if (this.position.y + this.playerHeight + this.velocity.y >= height) {
      this.velocity.y = 0; 
    }
    else {
      this.velocity.y += gravity;
    }
  }
  //Launches attack
  attack() {
    this.switchSprite('attack1'); 
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking = false; 
    }, 100);
  }

  //Does damage
  takeHit() {
    this.health -= 10; 
    if (this.health <= 0 ) {
      this.switchSprite('death'); 
    }
    else {
      this.switchSprite('hit'); 

    }
  }
  
  //Swithces between sprites
  switchSprite(sprite) {

    if (this.image === this.sprites.death.imageSrc) {
      if (this.frameX === this.sprites.death.framesMax - 1) 
        this.dead = true; 
        return;
    }


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
          }
          break;
          
          case 'death':
            if (this.image !== this.sprites.death.imageSrc) {
              this.image = this.sprites.death.imageSrc;
              this.framesMax = this.sprites.death.framesMax;
              this.frameX = 0;
            }
            break;
        

  }


  }
  
}









