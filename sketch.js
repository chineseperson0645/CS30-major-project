// CS30 Major Project
// Anjana Samarasinghe


let state; 

let player1 =  new mainPlayer(100, 100, 5, 20, "assets/Run.png"); 


function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "fight";   
  }
  
function draw() {
  background(220);
  if (state === "fight"){
    player1.display();
  }
}
   
  
function drawCircle() {
  fill("green");
  circle(100,100, 50);
}

