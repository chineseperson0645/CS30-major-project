class mainPlayer {
  constructor(playerImage, x, y, playerSpeed, playerHp) {
    this.x = x; 
    this.y = y; 
    this.img = playerImage; 
    this.speed = playerSpeed; 
    this.hp = playerHp; 
  } 

  display () {
    image(this.img, this.x, this.y); 
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
