// CS30 Major Project
// Anjana Samarasinghe



class mainPlayer {
  constructor(x , y) {
    this.x = 50; 
    this.y = 50;
    this.dx = 5; 
    this.dy = 5;
    this.playerSpeed = 5;
    this.playerRadius = 100;
    this.playerHp = 100; 
  }
  display() {
  fill("red");
  noStroke();
  circle(this.x , this.y, this.playerRadius*2);
  }
  move() {
    if (keyIsDown(87)) { //w
      this.y -= this.playerSpeed;
    }
    if (keyIsDown(83)) { //s
      this.y += this.playerSpeed;
    }
    if (keyIsDown(68)) { //d
      this.x += this.playerSpeed;
    }
    if (keyIsDown(65)) { //a
      this.x -= this.playerSpeed;
    }
  }
}

let state; 



function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "fight"
  player1 =  new mainPlayer(100, 100); 
}

function draw() {
  background(220);
  if (state === "fight"){
  player1.move(); 
  player1.display();
  }
}

