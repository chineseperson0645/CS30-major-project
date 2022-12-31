// CS30 Major Project - Tatakai!
// Michael Gao, Anjana Samarasinghe
// 11/17/2022

//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME

//Notes:
// If near border or teleport blocks don't call not normal. Make teleport blocks just path images.
// Keep the beta.JSON and build all other maps as modified copies. (because theres a border)
// control + b to bring up sidebar

// To Incorperate fight scenes. We could do, if the player is about to move onto a fight scene and keyPressed w or whatever
// Play a transition video, and then go into the fight.

const ROWS = 25; //y axis (in reality)
const COLS = 35; //x axis (in reality)

let grid;
let cellWidth;
let cellHeight;
let playerX = 1;
let playerY = 1;
// CHANGE PLAYER X AND Y TO CHANGE WHERE PLAYER SPAWS (COULD BE USEFUL FOR TELEPORTATION AND OTHERS IN FUTURE)

let treeImg, zenImg, bottomtreeImg, houseTLImg, houseTMImg, houseTRImg, houseBLImg, houseBMImg, houseBRImg, path1, path2;
let forestPathJSON, betaTestJSON;

function preload() {
  treeImg = loadImage('assets/bush.png');
  zenImg = loadImage('assets/zen.gif');
  bottomtreeImg = loadImage('assets/bottomtree.png');
  houseTLImg = loadImage('assets/houseTL.png');
  houseTMImg = loadImage('assets/houseTM.png');
  houseTRImg = loadImage('assets/houseTR.png');
  houseBLImg = loadImage('assets/houseBL.png');
  houseBMImg = loadImage('assets/houseBM.png');
  houseBRImg = loadImage('assets/houseBR.png');
  path1Img = loadImage('assets/path1.png');
  path2Img = loadImage('assets/path2.png');

  betaTestJSON = loadJSON('JSON-Maps/beta.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = create2dArray(COLS, ROWS);
  grid = betaTestJSON;

  grid[playerY][playerX] = "player";
}

function draw() {
  background("white");
  displayGrid(grid);
  surroundingCheck();
}

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


      
      if (grid[y][x] === "player") {
        fill("white");
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === "playerpath1") {
        image(path1Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === "playerpath2") {
        image(path2Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 93) { //BORDER!
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
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