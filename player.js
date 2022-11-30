class mainPlayer {
  constructor(runRight, idlePostion, x, y, playerSpeed, playerHp) {
    this.x = x; 
    this.y = y; 
    this.img = runRight;
    this.img2 = idlePostion; 
    this.speed = playerSpeed; 
    this.hp = playerHp; 
  } 

  runRight () {
    image(this.img, this.x, this.y, playerWidth, playerHeight, frameX * playerWidth , frameY * playerHeight , playerWidth, playerHeight );
    if (gameFrame % staggerFrames ==0) {
      if (frameX < 5) {
        frameX++; 
      }
      else {
        frameX = 0; 
      }
    }

    
   
    gameFrame++; 
  }

  idlePostion() {
    image(this.img2, this.x, this.y, playerWidth, playerHeight, frameX * playerWidth , frameY * playerHeight , playerWidth, playerHeight );
    if (gameFrame % staggerFrames ==0) {
      if (frameX < 5) {
        frameX++; 
      }
      else {
        frameX = 0; 
      }
    }
   
    gameFrame++; 

  }
  move() {
    if (keyIsDown(87)) { //w
      this.y -= this.speed;
    }
    if (keyIsDown(83)) { //s
      this.y += this.speed;
    }
    if (keyIsDown(68)) { //d
      this.x += this.speed;
      this.runRight(); 
    }
    if (keyIsDown(65)) { //a
      this.x -= this.speed;
    }
    
    else {
      this.idlePostion(); 
    }

  }
}

