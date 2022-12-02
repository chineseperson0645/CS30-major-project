// CS30 Major Project - Tatakai!
// Michael Gao, Anjana Samarasinghe
// 11/17/2022

//Notes:
//Could possibly use gifs for player and npc movement in 2d array mode.

const ROWS = 25; //y axis (in reality)
const COLS = 35; //x axis (in reality)

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

let grid;
let cellWidth;
let cellHeight;
let playerX = 0;
let playerY = 0;

let grassImg, rockImg, horseImg;

function preload() {
  grassImg = loadImage('grass.png');
  rockImg = loadImage('rock.png');
  horseImg = loadImage('horse.png');
  treeImg = loadImage('assests/poketree.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = create2dArray(COLS, ROWS);
  //place player in grid
  grid[playerY][playerX] = 9;
}

function draw() {
  background(220);
  displayGrid(grid);
  // passableChecker();
}

//Allows Horse to pass through (and draw over) a image
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (grid[playerY][playerX+1] === 0 || grid[playerY][playerX+1] === 2) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
      //move
      playerX++;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === LEFT_ARROW) {
    if (grid[playerY][playerX-1] === 0 || grid[playerY][playerX-1] === 2) {
      //reset old location to white
      grid[playerY][playerX] = 0;
      
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
      
      //move
      playerY++;

      //set new player location
      grid[playerY][playerX] = 9;
    }
  }
}

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
    grid[yPos][xPos] = 3;
  }
  else if (grid[yPos][xPos] === 3) {
    grid[yPos][xPos] = 4;
  }
  else if (grid[yPos][xPos] === 4) {
    grid[yPos][xPos] = 5;
  }
  else if (grid[yPos][xPos] === 5) {
    grid[yPos][xPos] = 0;
  }
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        image(rockImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 1) {
        image(grassImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 2) {
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 3) {
        image(grassImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 4) {
        image(grassImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 5) {
        image(grassImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 9) {
        image(rockImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(horseImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 9) {
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(horseImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function passableChecker(){
  if (grid[y][x] === 2)
    onPassable = true;
}

function teleportCheck(){
  if (gird[x][y] === 1 && grid[playerY][playerX] === 1){

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

//78^10 (10 represents base 10)

// 0   1  0  0 1 1 1 0 (78 represented in binary)

//128 64 32 16 8 4 2 1
//--- -- -- -- - - - - 