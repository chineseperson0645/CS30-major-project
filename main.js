// CS30 Major Project - Tatakai!
// Michael Gao, Anjana Samarasinghe
// 11/17/2022

//Notes:
//Could possibly use gifs for player and npc movement in 2d array mode.

const ROWS = 25; //y axis (in reality)
const COLS = 40; //x axis (in reality)

let grid;
let cellWidth;
let cellHeight;
let playerX = 0;
let playerY = 0;

let nearTree = false;

let grassImg, rockImg, horseImg, treeImg, zenImg, bottomtreeImg, houseTLImg, houseTMImg, houseTRImg, houseBLImg, houseBMImg, houseBRImg, path1, path2;

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
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = createRandom2dArray(COLS, ROWS);
  //place player in grid
  grid[playerY][playerX] = 90;
}

function draw() {
  background("white");
  // image(grayImg, 0, 0, width, height);
  displayGrid(grid);
  // surroundingCheck();
}

//Allows Horse to pass through (and draw over) a image
function keyPressed() {
  if (key === "d") {
  //SO IF this spot is blank (0) update the player location (playerX++) draw in that direction with a horse
    if (grid[playerY][playerX+1] === 0) {
        grid[playerY][playerX] = 0; //reset old location to white
        playerX++; //move
        grid[playerY][playerX] = 90; //set new player location
      }
    }
    else if (grid[playerY][playerX+1] === 0 && nearTree) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerX++; //move
      grid[playerY][playerX] = 100; //set new player location
      nearTree = false;
      }

  if (key === "a") {
    if (grid[playerY][playerX-1] === 0) {
        grid[playerY][playerX] = 0; //reset old location to white
        playerX--; //move
        grid[playerY][playerX] = 90; //set new player location
    }
    else if (grid[playerY][playerX-1] === 0 && nearTree) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerX--; //move
      grid[playerY][playerX] = 100; //set new player location
      nearTree = false;
    }
  }

  if (key === "w") {
    if (grid[playerY-1][playerX] === 0) {
        grid[playerY][playerX] = 0; //reset old location to white
        playerY--; //move
        grid[playerY][playerX] = 90; //set new player location
    }
    else if (grid[playerY-1][playerX] === 0 && nearTree) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerY--; //move
      grid[playerY][playerX] = 100; //set new player location
      nearTree = false;
    }
  }

  if (key === "s") {
    if (grid[playerY+1][playerX] === 0) {
        grid[playerY][playerX] = 0; //reset old location to white
        playerY++; //move
        grid[playerY][playerX] = 90; //set new player location
    } 
    else if (grid[playerY+1][playerX] === 0 && nearTree) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerY++; //move
      grid[playerY][playerX] = 100; //set new player location
      nearTree = false;
    }
  }
}

//Current problem is that it detects it nearTree (or near one) and adds the playerX or Y twice because it's also moving from whitespace.
//If moved into a certain grid position. Player X and Y are still tracked.
//But if nearTree is true. Draw a 10 instead of a 9. (10 can just be a tree ontop of a tree)

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {

      if (grid[y][x] === 0) {
        fill("white");
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 1) {
        image(bottomtreeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 2) {
        image(path1Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 3){
        image(path2Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 4){
        image(path1Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 5){
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
      if (grid[y][x] === 100) {
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function surroundingCheck(){
  //  Down Arrow                        Left Arrow                        Right Arrow
  if (grid[playerY+1][playerX] === 2 || grid[playerY][playerX-1] === 2 || grid[playerY][playerX+1] === 2){
    nearTree = true;
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

function createRandom2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
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