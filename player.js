class mainPlayer {
  constructor(playerImage, x, y, playerSpeed, playerHp) {
    this.x = x; 
    this.y = y; 
    this.img = playerImage; 
    this.speed = playerSpeed; 
    this.hp = playerHp; 
  } 

  display () {
    animationStates.forEach((state, index) => {
      let frames = {
        loc: [],
      };
      for ( let j = 0; j < state.frames; j++) {
        let postionX = j * playerWidth;
        let postionY = index * playerHeight;
        frames.loc.push({x: postionX, y: postionY}); 
      }
      playerAnimations[state.name] = frames; 
  
    });

    let postion = Math.floor(gameFrame / staggerFrames) % playerAnimations["run"].loc.length;
    frameX = playerWidth * postion; 
    image(this.img, this.x, this.y, playerWidth, playerHeight, frameX, this.y , playerWidth, playerHeight ); 
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
    }
    if (keyIsDown(65)) { //a
      this.x -= this.speed;
    }
  }
}
