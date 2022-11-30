class mainPlayer {
  constructor(runRight, idlePostion, jumpPos, x, y, playerSpeed, playerHp) {
    this.x = x; 
    this.y = y; 
    this.runR = runRight;
    this.idleP = idlePostion;
    this.jumpP = jumpPos;
    this.speed = playerSpeed; 
    this.hp = playerHp; 
  } 

  runRight () {
    image(this.runR, this.x, this.y, playerWidth, playerHeight, frameX * playerWidth , frameY * playerHeight , playerWidth, playerHeight );
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
    image(this.idleP, this.x, this.y, playerWidth, playerHeight, frameX * playerWidth , frameY * playerHeight , playerWidth, playerHeight );
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

  jumpPostion() {
    image(this.jumpP, this.x, this.y, playerWidth, playerHeight, frameX * playerWidth , frameY * playerHeight , playerWidth, playerHeight );
    if (gameFrame % staggerFrames2 ==0) {
      if (frameX < 7) {
        frameX++; 
      }
      else {
        frameX = 0; 
      }
    }
   
    gameFrame++; 

  }

  move() {
    // if (keyIsDown(87) && keyIsDown(68)) {
    //   this.y -= this.speed;
    //   this.x += this.speed;
    //   this.jumpPostion(); 
    // }
    
    if (keyIsDown(87)) { //w
      this.y -= this.speed;
      this.jumpPostion(); 
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
    
    if (keyIsDown(68) != true && keyIsDown(83) != true && keyIsDown(87) != true &&keyIsDown(65) != true ) {
      this.idlePostion();
    }

  }
}

