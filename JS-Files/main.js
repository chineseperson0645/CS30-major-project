// CS30 Major Project - Tatakai!
// Michael Gao, Anjana Samarasinghe
// 11/17/2022

//Notes:
//Could possibly use gifs for player and npc movement in 2d array mode.
//If near border or teleport blocks don't call not normal. Make teleport blocks just path images.

//For some odd reason (undetermined). Dead spots keep appearing occationally when player is around path
//(usually one block gap between path and player, with a tree being in that one block gap being a dead spot ---> 3 - 0 - 90).
//Dead spots are blocks where you cannot move into them via any direction (WASD)


const ROWS = 25; //y axis (in reality)
const COLS = 35; //x axis (in reality)

let grid;
let cellWidth;
let cellHeight;
let playerX = 0;
let playerY = 0;

let grassImg, rockImg, horseImg, treeImg, zenImg, bottomtreeImg, houseTLImg, houseTMImg, houseTRImg, houseBLImg, houseBMImg, houseBRImg, path1, path2;
let forestPathJSON;

function preload() {
  grassImg = loadImage('grass.png');
  rockImg = loadImage('rock.png');
  horseImg = loadImage('horse.png');
  treeImg = loadImage('assests/bush.png');
  zenImg = loadImage('assests/zen.gif');
  bottomtreeImg = loadImage('assests/bottomtree.png');
  houseTLImg = loadImage('assests/houseTL.png');
  houseTMImg = loadImage('assests/houseTM.png');
  houseTRImg = loadImage('assests/houseTR.png');
  houseBLImg = loadImage('assests/houseBL.png');
  houseBMImg = loadImage('assests/houseBM.png');
  houseBRImg = loadImage('assests/houseBR.png');
  path1Img = loadImage('assests/path1.png');
  path2Img = loadImage('assests/path2.png');

  forestPathJSON = loadJSON('JSON-Maps/random.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = create2dArray(COLS, ROWS);
  // grid = forestPathJSON;

  //place player in grid
  grid[playerY][playerX] = 90;
}

function draw() {
  background("white");
  displayGrid(grid);
  surroundingCheck();
}

// function whateverMoveableIsHere(){
  
// }

let nearPathLeft;
let nearPathDown;
let nearPathRight;
let nearPathForward;


//not normal keeps being called, even though conditions seem to not be met (check synatx).
//"Dead spots" keep appearing after you draw over images with player
//W still is broken


function surroundingCheck(){
  if (grid[playerY][playerX+1] === 3 || grid[playerY][playerX+1] === 4){ // D
    nearPathRight = true;
  }
  if (grid[playerY+1][playerX] === 3 || grid[playerY+1][playerX] === 4){ // S  
    nearPathDown = true;
  }
  if (grid[playerY][playerX-1] === 3 || grid[playerY][playerX-1] === 4){ // A 
    nearPathLeft = true;
  }
  // if (grid[playerY-1][playerX] === 3 || grid[playerY-1][playerX] === 4){ // W
  //   nearPathForward = true;
  // }
}


//Check if the front of me still exists (Sanity check, example aviable on GOL ex.).
function keyPressed() {
  if (key === "d") {
  //SO IF this spot is blank (0) update the player location (playerX++) draw in that direction with a horse
    if (grid[playerY][playerX+1] === 0) { //Allows walk over trees
      grid[playerY][playerX] = 0; //reset old location to white
      playerX++; //move
      grid[playerY][playerX] = 90; //set new player location (current)
    }

    else if (grid[playerY][playerX+1] === 3 && nearPathRight === true || grid[playerY][playerX+1] === 4 && nearPathRight === true) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerX++; //move
      grid[playerY][playerX] = 91; //set new player location (current)
      console.log("Right");
      nearPathRight = false;
      }  
    }    

  if (key === "a") {
    if (grid[playerY][playerX-1] === 0) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerX--; //move
      grid[playerY][playerX] = 90; //set new player location
    }

    else if (grid[playerY][playerX-1] === 3 && nearPathLeft === true || grid[playerY][playerX-1] === 4 && nearPathLeft === true) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerX--; //move
      grid[playerY][playerX] = 91; //set new player location
      console.log("Left");
      nearPathLeft = false;
    }  
  }

  if (key === "w") { //UP
    if (grid[playerY-1][playerX] === 0) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerY--; //move
      grid[playerY][playerX] = 90; //set new player location
    }

    else if (grid[playerY-1][playerX] === 3 && nearPathForward === true || grid[playerY-1][playerX] === 4 && nearPathForward === true) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerY--; //move
      grid[playerY][playerX] = 91; //set new player location
      console.log("Forward");
      nearPathForward = false;
    }  
  }

  if (key === "s" ) { //DOWN
    if (grid[playerY+1][playerX] === 0) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerY++; //move
      grid[playerY][playerX] = 90; //set new player location
    }
    else if (grid[playerY+1][playerX] === 3 && nearPathDown === true) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerY++; //move
      grid[playerY][playerX] = 91; //set new player location
      console.log("Down");
      nearPathDown = false;
    }
    else if (grid[playerY+1][playerX] === 4 && nearPathDown === true){
      grid[playerY][playerX] = 0; 
      playerY++; 
      grid[playerY][playerX] = 92; 
      console.log("Down");
      nearPathDown = false;
    }

  // check if s key is hit and if player was just on 91

    else if (grid[playerY][playerX] === 91 && justOnPathBehindUs === true){ //When we hit the S key. Checks for if we have an image under us. If so, the following executes...
      grid[playerY][playerX] = 3; 
      playerY++; 
      grid[playerY][playerX] = 90; //Current player location will change back to normal. Can add tree image under us in the future if wanted to (follow same logic as path images)
      console.log("Down");
      nearPathDown = false;
    }
    else if (grid[playerY][playerX] === 92 && justOnPathBehindUs === true){
      grid[playerY][playerX] = 4;
      playerY++; 
      grid[playerY][playerX] = 90; 
      console.log("Down");
      nearPathDown = false;
    }
  }
}

for (let i = 0; i < ROWS; i++){
  if (gird[playerX][playerY] === ){

  }
}


//We'll also need to make a else if statement to check if we're beside other paths I think and draw other paths instead of just us (90).
//So when we hit the s key. I want to it to check simotaneously if we're going ontop of a path block or getting off one.
//We may have to create another function to detect if we're off of the path block. I.e if we were just on grid[playerY+1][playerX] === 92. We need to make justOnPathBehindUs (or something) true.
//Create another else if function where it sets the path image your on back into a normal path image (3 or 4)



//Current problem is that it detects it nearTree (or near one) and adds the playerX or Y twice because it's also moving from whitespace.
//If moved into a certain grid position. Player X and Y are still tracked.
//But if nearTree is true. Draw a 10 instead of a 9. (10 can just be a tree ontop of a tree)

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {

      if (grid[y][x] === 0) {
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 1) {
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 2) {
        image(bottomtreeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 3) {
        image(path1Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 4) {
        image(path2Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }



      // if (grid[y][x] === ){
      //   image(houseTLImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      // }
      // if (grid[y][x] === ){
      //   image(houseTMImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      // }
      // if (grid[y][x] === ){
      //   image(houseTRImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      // }
      // if (grid[y][x] === ){
      //   image(houseBLImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      // }
      // if (grid[y][x] === ){
      //   image(houseBMImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      // }
      // if (grid[y][x] === ){
      //   image(houseBRImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      // }



      if (grid[y][x] === 90) {
        fill("white");
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 91) {
        image(path1Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 92) {
        image(path2Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}


//There is something spesifically wrong with
// grid[playerY-1][playerX] === 2 && playerY--

//Spesifically
// [playerX] === 2 && playerY--



function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

    if (mouseButton === LEFT){
        if (grid[yPos][xPos] === 0) {
          grid[yPos][xPos] = 1;
        }
        else if (grid[yPos][xPos] === 1) {
          grid[yPos][xPos] = 2;
        }
        else if (grid[yPos][xPos] === 2) {
          grid[yPos][xPos] = 3;
        }
        else if (grid[yPos][xPos] === 3) {
          grid[yPos][xPos] = 4;
        }
        else if (grid[yPos][xPos] === 4) {
          grid[yPos][xPos] = 5;
        }
        else if (grid[yPos][xPos] === 5) {
          grid[yPos][xPos] = 6;
        }
        else if (grid[yPos][xPos] === 6) {
          grid[yPos][xPos] = 7;
        }
        else if (grid[yPos][xPos] === 7) {
          grid[yPos][xPos] = 8;
        }
        else if (grid[yPos][xPos] === 8) {
          grid[yPos][xPos] = 9;
        }
        else if (grid[yPos][xPos] === 9) {
          grid[yPos][xPos] = 10;
        }
        else if (grid[yPos][xPos] === 10) {
          grid[yPos][xPos] = 11;
        }
        else if (grid[yPos][xPos] === 11) {
          grid[yPos][xPos] = 12;
        }
      }
      
    if (mouseButton === CENTER){
        grid[yPos][xPos] = 0;
      }
    }


function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

//Doodles/Notes

//control + b to bring up sidebar

//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

//if pressing w, walking gif, if not pressing w, idle gif (for mike)
//For voice lines. Final boss should have voice lines timed every like 10-15 seconds.
//Everytime it's a random voice line chosen from an array.
//An array of sfx for swords clinging and chooses random number from that array. So that
//If you swing and hit something. It plays a random sfx from that array

// function passableChecker(){
//   if (grid[y][x] === 2)
//     onPassable = true;
// }

// function teleportCheck(){
//   if (gird[x][y] === 1 && grid[playerY][playerX] === 1){
//     console.log("send em!");
//   }
// }

// let drawJustTree = false;

// function keepDrawing(){
//   if (grid[y][x] === 2){
//     drawJustTree = true;
//   }
//   if (drawJustTree === true){
//     image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
//   }

//   else if (grid[y][x] === 9){
//     drawJustTree = false;

//     if (drawJustTree = false && grid[y][x] === 9){
//       alsoDrawHorse = true;
//     }
//     if (alsoDrawHorse === true && grid[y][x] === 9){
//       image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
//       image(horseImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
//     }
//     if (grid[y][x] === 2){
//       alsoDrawHorse = false;
//       drawJustTree = true;
//     }
//   }

// }


// not normal check (just do let normalExecution = false and add normalExecution as a needed requirment before entering onto a block)

// let normalExecution = false;

  // if (grid[playerY][playerX+1] !== 0 || grid[playerY][playerX+1] !== 1){ //No longer going to just be trees around you.
  //   normalExecution = false;
  //   console.log("not normal!");
  // }
  // else if (grid[playerY][playerX+1] === 0 || grid[playerY][playerX+1] === 1){ //No longer going to just be trees around you.
  //   normalExecution = true;
  // }

  // if (grid[playerY][playerX-1] !== 0 || grid[playerY][playerX-1] !== 1){
  //   normalExecution = false;
  //   console.log("not normal!");
  // }
  // else if (grid[playerY][playerX-1] === 0 || grid[playerY][playerX-1] === 1){
  //   normalExecution = true;
  // }

  // if (grid[playerY-1][playerX] !== 0 || grid[playerY-1][playerX] !== 1){
  //   normalExecution = false;
  //   console.log("not normal!");
  // }
  // else if (grid[playerY-1][playerX] === 0 || grid[playerY-1][playerX] === 1){
  //   normalExecution = true;
  // }

  // if (grid[playerY+1][playerX] !== 0 || grid[playerY+1][playerX] !== 1){
  //   normalExecution = false;
  //   console.log("not normal!");
  // }
  // else if (grid[playerY+1][playerX] === 0 || grid[playerY+1][playerX] === 1){
  //   normalExecution = true;
  // }

// function createRandom2dArray(COLS, ROWS) {
//   let emptyArray = [];
//   for (let y=0; y<ROWS; y++) {
//     emptyArray.push([]);
//     for (let x=0; x<COLS; x++) {
//       if (random(100) < 50) {
//         emptyArray[y].push(0);
//       }
//       else {
//         emptyArray[y].push(1);
//       }
//     }
//   }
//   return emptyArray;
// }

//OG design with normalExecution detection
// if (key === "d") {
//   //SO IF this spot is blank (0) update the player location (playerX++) draw in that direction with a horse
//     if (grid[playerY][playerX+1] === 0) { //Allows walk over trees
//       normalExecution = true;
//       grid[playerY][playerX] = 0; //reset old location to white
//       playerX++; //move
//       grid[playerY][playerX] = 90; //set new player location (current)
//     }

//     else if (grid[playerY][playerX+1] === 3 && nearPathRight === true || grid[playerY][playerX+1] === 4 && nearPathRight === true) {
//       grid[playerY][playerX] = 0; //reset old location to white
//       playerX++; //move
//       grid[playerY][playerX] = 91; //set new player location (current)
//       console.log("Right");
//       nearPathRight = false;
//       }  
//     }  