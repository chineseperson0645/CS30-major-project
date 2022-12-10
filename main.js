// CS30 Major Project - Tatakai!
// Michael Gao, Anjana Samarasinghe
// 11/17/2022

//Notes:
//Could possibly use gifs for player and npc movement in 2d array mode.

const ROWS = 25; //y axis (in reality)
const COLS = 35; //x axis (in reality)

let grid;
let cellWidth;
let cellHeight;
let playerX = 0;
let playerY = 0;

let onTree = false;

let grassImg, rockImg, horseImg;

function preload() {
  grassImg = loadImage('grass.png');
  rockImg = loadImage('rock.png');
  horseImg = loadImage('horse.png');
  treeImg = loadImage('assests/bush-pixel.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = create2dArray(COLS, ROWS);
  //place player in grid
  grid[playerY+1][playerX+1] = 9;
}

function draw() {
  background("white");
  displayGrid(grid);
}

//Allows Horse to pass through (and draw over) a image
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
  //SO IF this spot is blank (0) or a tree (2) update the player location (playerX++) that direction
    if (grid[playerY][playerX+1] === 0 || grid[playerY][playerX+1] === 2) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerX++; //move
      grid[playerY][playerX] = 9; //set new player location
        if (keyCode === RIGHT_ARROW ){

      }
    }
  }

  if (keyCode === LEFT_ARROW) {
    if (grid[playerY][playerX-1] === 0 || grid[playerY][playerX-1] === 2) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      // onTree = true;

      //move
      playerX--;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === UP_ARROW) {
    if (grid[playerY-1][playerX] === 0 || grid[playerY-1][playerX] === 2) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      // onTree = true;

      //move
      playerY--;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === DOWN_ARROW) {
    if (grid[playerY+1][playerX] === 0 || grid[playerY+1][playerX] === 2) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      // onTree = true;

      //move
      playerY++;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }
}

//If moved into a certain grid position. Player X and Y are still tracked
//But if onTree is true. Draw a 10 instead of a 9. (10 can just be a tree ontop of a tree)

function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 2;
  }
  else if (grid[yPos][xPos] === 2) {
    grid[yPos][xPos] = 0;
  }
}


function displayGrid(grid) {
let onTree = false;

  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {

      if (grid[y][x] === 0) {
        fill("white");
      }
      if (grid[y][x] === 1) {
        image(grassImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 2) {
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }

      if (grid[y][x] === 9) {
        fill("white");
        image(horseImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 10) {
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(horseImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
  if (grid[playerY+1][playerX] === 2 && playerY++ || grid[playerY][playerX-1] === 2 && playerX-- || grid[playerY][playerX+1] === 2 && playerX++){
    onTree = true;
  }
}

//There is something spesifically wrong with
// grid[playerY-1][playerX] === 2 && playerY--
//Spesifically
// [playerX] === 2 && playerY--

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