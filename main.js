// CS30 Major Project - Tatakai!
// Michael Gao, Anjana Samarasinghe
// 11/17/2022

//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME

//Notes:
// If near border or teleport blocks don't call not normal. Make teleport blocks just path images.
// Keep the beta.JSON and build all other maps as modified copies. (because theres a border)
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

//Doodles/Notes

//control + b to bring up sidebar

//Could possibly use gifs for player and npc movement in 2d array mode.

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
//       grid[playerY][playerX] = "player"; //set new player location (current)
//     }

//     else if (grid[playerY][playerX+1] === 3 && nearPathRight === true || grid[playerY][playerX+1] === 4 && nearPathRight === true) {
//       grid[playerY][playerX] = 0; //reset old location to white
//       playerX++; //move
//       grid[playerY][playerX] = "playerpath1"; //set new player location (current)
//       console.log("Right");
//       nearPathRight = false;
//       }  
//     } 

// if (keyPressed(83)){ //Calls once, so essientially if we move a tile off. 
//   justOnPathBehindUs = true;
//   console.log("Just on path Behind of us");
// }
// else {
//   justOnPathBehindUs = false;
// }

//^ These functions above, check if a key is pressed.

// function justOnPathRightUs(){
//   if (grid[playerY][playerX] === "playerpath1" && nearPathRight){
//     if (keyPressed(68)){
//       grid[playerY][playerX] = "playerpath1";
//       playerX++;
//       grid[playerY][playerX] = "playerpath1" //do if statement of if on tree, or playerpath1.
//       console.log("Right2");
//       nearPathRight = false;
//     }
//   }
//   if (grid[playerY][playerX] === "playerpath2" && nearPathRight){
//     if (keyPressed(68)){
//       grid[playerY][playerX] = "playerpath2";
//       playerX++;
//       grid[playerY][playerX] = "playerpath2" //do if statement of if on tree, or playerpath1, change it instead into tree or playerpath1.
//       console.log("Right2");
//       nearPathRight = false;
//     }
//   }
// }

  // function justOnPathLeftUs(){

  // }

//If in like a right state, give charcter all the movable charcteristics of movement in regards to going right.
//Could prolly build into moving itself...
//Build into first SurroundCheck Segmeent. 

  // if (grid[playerY][playerX+1] === 3 || grid[playerY][playerX+1] === 4){ // A 
  //   justOnPathLeftUs = true;
  // }

  // if (grid[playerY+1][playerX] === 3 || grid[playerY+1][playerX] === 4){ // W
  //   justOnPathFrontUs = true;
  // }

//For some odd reason (undetermined). Dead spots keep appearing occationally when player is around path
//(usually one block gap between path and player, with a tree being in that one block gap being a dead spot ---> 3 - 0 - "player").
//Dead spots are blocks where you cannot move into them via any direction (WASD)