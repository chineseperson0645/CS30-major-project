/* eslint-disable */

class mainPlayer {
  constructor(runRight, idlePostion, jumpPos, runBack, crouch, jumpPosB, x, y, playerSpeed, playerHp) {
    this.x = x; 
    this.y = y; 
    this.runR = runRight;
    this.idleP = idlePostion;
    this.jumpP = jumpPos;
    this.runB = runBack;
    this.crouch = crouch;
    this.jumpPB = jumpPosB;   
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
    if (gameFrame % staggerFrames2 == 0) {
      if (frameX < 7) {
        frameX++; 
      }
      else {
        frameX = 0; 
      }
    }
   
    gameFrame++; 

  }


  runBackwards() {
    image(this.runB, this.x, this.y, playerWidth, playerHeight, frameX * playerWidth , frameY * playerHeight , playerWidth, playerHeight );
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

  crouchDown() {
    image(this.crouch, this.x, this.y, playerWidth, playerHeight, frameX * playerWidth , frameY * playerHeight , playerWidth, playerHeight );
    if (gameFrame % staggerFrames ==0) {
      if (frameX < 8) {
        frameX++; 
      }
      else {
        frameX = 0; 
      }
    }
   
    gameFrame++; 

  }

  jumpPostionB() {
    image(this.jumpPB, this.x, this.y, playerWidth, playerHeight, frameX * playerWidth , frameY * playerHeight , playerWidth, playerHeight );
    if (gameFrame % staggerFrames2 == 0) {
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
    //Player Movement Checks 
    if (keyIsDown(87) === true && keyIsDown(68) === true) { 
      this.y -= this.speed;
      this.x += this.speed;
      this.jumpPostion(); 
    }
    
    else if (keyIsDown(87) === true && keyIsDown(65)) { 
      this.y -= this.speed;
      this.x -= this.speed;
      this.jumpPostionB(); 
    }



    else if (keyIsDown(87)) { //w
      this.y -= this.speed;
      this.jumpPostion(); 
    }
    else if (keyIsDown(83)) { //s
      this.y += this.speed;
      this.crouchDown(); 
    }
    else if (keyIsDown(68)) { //d
      this.x += this.speed;
      this.runRight(); 
       
    }
    else if (keyIsDown(65)) { //a
      this.x -= this.speed;
      this.runBackwards(); 
    }
    
    else if (keyIsDown(68) != true && keyIsDown(83) != true && keyIsDown(87) != true &&keyIsDown(65) != true ) {
      this.idlePostion();
    }
  }
}

