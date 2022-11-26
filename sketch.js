// CS30 Major Project
// Anjana Samarasinghe



class mainPlayer {
  constructor(x , y, playerSpeed, playerHP, pImg) {
    this.x = x; 
    this.y = y;
    this.dx = 5; 
    this.dy = 5;
    this.speed = playerSpeed;
    this.playerRadius = 100;
    this.playerHp = playerHP; 
  }
  display() {
    fill("red");
    noStroke();
    circle(this.x , this.y, this.playerRadius*2);
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

let state; 

let player1 =  new mainPlayer(100, 100, 5, 100); 

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "fight"; 
  
}

function draw() {
  background(220);
  if (state === "fight"){
    player1.move(); 
    player1.display();
  }
}

