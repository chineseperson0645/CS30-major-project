// CS30 Major Project - Tatakai!
// Michael Gao, Anjana Samarasinghe
// 11/17/2022


//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME

//Notes:
//Could possibly use gifs for player and npc movement in 2d array mode.
//If near border or teleport blocks don't call not normal. Make teleport blocks just path images.

//For some odd reason (undetermined). Dead spots keep appearing occationally when player is around path
//(usually one block gap between path and player, with a tree being in that one block gap being a dead spot ---> 3 - 0 - "player").
//Dead spots are blocks where you cannot move into them via any direction (WASD)

//Spacebar keycode is 32

// Keep the beta.JSON and build all other maps as modified copies. (because theres a border)

const ROWS = 25; //y axis (in reality)
const COLS = 35; //x axis (in reality)

// CHANGE PLAYER X AND Y TO CHANGE WHERE PLAYER SPAWS (COULD BE USEFUL FOR TELEPORTATION AND OTHERS IN FUTURE)
let grid;
let cellWidth;
let cellHeight;
let playerX = 1;
let playerY = 1;

let treeImg, zenImg, bottomtreeImg, houseTLImg, houseTMImg, houseTRImg, houseBLImg, houseBMImg, houseBRImg, path1, path2;
let forestPathJSON, betaTestJSON;

function preload() {
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

  betaTestJSON = loadJSON('JSON-Maps/beta.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = create2dArray(COLS, ROWS);
  grid = betaTestJSON;

  //place player in grid
  grid[playerY][playerX] = "player";
}

function draw() {
  background("white");
  displayGrid(grid);
  surroundingCheck();
  wPressedCheck();
  aPressedCheck();
  sPressedCheck();
  dPressedCheck();
}

// function whateverMoveableIsHere(){
  //Essientially, if it's movable, allow player to move here.
// }

let nearPathLeft, nearPathDown, nearPathRight, nearPathForward;
// let justOnPathLeftUs, justOnPathBehindUs, justOnPathRightUs, justOnPathFrontUs;


//"Dead spots" keep appearing after you draw over images with player
//W still is broken


function surroundingCheck(){
  if (grid[playerY][playerX+1] === 3 || grid[playerY][playerX+1] === 4){ // D (Opposite is A)
    nearPathRight = true;
    // if (keyPressed(65)){ //Calls once, so essientially if we move a tile off. 
    //   justOnPathLeftUs = true;
    //   console.log("Just on path Left of us");
    // }
    // else {
    //   justOnPathLeftUs = false;
    // }
  }

  if (grid[playerY+1][playerX] === 3 || grid[playerY+1][playerX] === 4){ // S (Behind is W)
    nearPathDown = true;
    // if (keyPressed(87)){ //Calls once, so essientially if we move a tile off. 
    //   justOnPathFrontUs = true;
    //   console.log("Just on path Front of us");
    // }
    // else {
    //   justOnPathFrontUs = false;
    // }
  }

  if (grid[playerY][playerX-1] === 3 || grid[playerY][playerX-1] === 4){ // A (Opposite is D)
    nearPathLeft = true;
    // if (keyPressed(68)){ //Calls once, so essientially if we move a tile off. 
    //   justOnPathRightUs = true;
    //   console.log("Just on path Right of us");
    // }
    // else {
    //   justOnPathRightUs = false;
    // }
  }

  if (grid[playerY-1][playerX] === 3 || grid[playerY-1][playerX] === 4){ // W (Behind is S)
    nearPathForward = true;
    // if (keyPressed(83)){ //Calls once, so essientially if we move a tile off. 
    //   justOnPathBehindUs = true;
    //   console.log("Just on path Behind of us");
    // }
    // else {
    //   justOnPathBehindUs = false;
    // }
  }

//If in like a right state, give charcter all the movable charcteristics of movement in regards to going right.
//Could prolly build into moving itself...
//Build into first SurroundCheck Segmeent. 

  // if (grid[playerY][playerX+1] === 3 || grid[playerY][playerX+1] === 4){ // A 
  //   justOnPathLeftUs = true;
  // }

  // if (grid[playerY+1][playerX] === 3 || grid[playerY+1][playerX] === 4){ // W
  //   justOnPathFrontUs = true;
  // }

}

//It seems from this experiment that if keyPressed is called in the draw loop. It causes it to be called infinitely (not once)

let wPressed = false;
let wThreshold = 0;
let wCount = 0;
let aPressed = false;
let aThreshold = 0;
let aCount = 0;
let sPressed = false;
let sThreshold = 0;
let sCount = 0;
let dPressed = false;
let dThreshold = 0;
let dCount = 0;

function PressCheck(){

}

function wPressedCheck(){
  if (key === "w"){
    wThreshold += 1;
    if (wThreshold === 1){
      wPressed = true;
    }
    if (wPressed === true){
      wThreshold -= 1;
      console.log("w");
    }
    if (wThreshold === 0){
      wPressed = false;
    }
  }
}

function aPressedCheck(){
  if (key === "a"){
    aThreshold += 1;
    if (aThreshold === 1){
      aPressed = true;
    }
    if (aPressed === true){
      aThreshold -= 1;
      console.log("a");
    }
    if (aThreshold === 0){
      aPressed = false;
    }
  }
}

function sPressedCheck(){
  if (key === "s"){
    sThreshold += 1;
    if (sThreshold === 1){
      sPressed = true;
    }
    if (sPressed === true){
      sThreshold -= 1;
      console.log("s");
    }
    if (sThreshold === 0){
      sPressed = false;
    }
  }
}

function dPressedCheck(){
  if (key === "d"){
    dThreshold += 1;
    if (dThreshold === 1){
      dPressed = true;
    }
    if (dPressed === true){
      dThreshold -= 1;
      console.log("d");
    }
    if (dThreshold === 0){
      dPressed = false;
    }
  }
}

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


// 87 === W
// 65 === A
// 83 === S
// 68 === D

//Check if the front of me still exists (Sanity check, example aviable on GOL ex.).
function keyPressed() {
  if (key === "d") { //D
  //SO IF this spot is blank (0) update the player location (playerX++) draw in that direction with a horse
    if (grid[playerY][playerX+1] === 0) { //Allows walk over trees
      grid[playerY][playerX] = 0; //reset old location to white
      playerX++; //move
      grid[playerY][playerX] = "player"; //set new player location (current)
    }
    else if (grid[playerY][playerX+1] === 3 && nearPathRight === true){
      grid[playerY][playerX] = 0; //reset old location to white
      playerX++; //move
      grid[playerY][playerX] = "playerpath1"; //set new player location (current)
      console.log("Right");
      nearPathRight = false;
    }
    else if (grid[playerY][playerX+1] === 4 && nearPathRight === true){
      grid[playerY][playerX] = 0; //reset old location to white
      playerX++; //move
      grid[playerY][playerX] = "playerpath1"; //set new player location (current)
      console.log("Right");
      nearPathRight = false;
    }
    else if (grid[playerY][playerX] === "playerpath1" && justOnPathRightUs === true){ //When we hit the key. Checks for if we have an image under us. If so, the following executes...
      grid[playerY][playerX] = 3; 
      playerX++; 
      grid[playerY][playerX] = "player"; //Current player location will change back to normal. Can add tree image under us in the future if wanted to (follow same logic as path images)
      console.log("Right2");
      nearPathRight = false;
    }
    else if (grid[playerY][playerX] === "playerpath2" && justOnPathRightUs === true){
      grid[playerY][playerX] = 4;
      playerX++; 
      grid[playerY][playerX] = "player"; 
      console.log("Right2");
      nearPathRight = false;
    }           
  }

//This should detect if I'm ontop of a playerpath and if I'm beside a Right path. If so, it'll ask if I hit my D key

//Possibly use debug tool to see what's happening one step at a time.

//Next step after fixing "getting off a block detection" is most likely changing it so instead of turning the object you get off onto into just our charcter ("player"). But also turning it 
//into a block with an image under it (i.e "playerpath1")


  if (key === "a") { //A
    if (grid[playerY][playerX-1] === 0) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerX--; //move
      grid[playerY][playerX] = "player"; //set new player location
    }
    else if (grid[playerY][playerX-1] === 3 && nearPathLeft === true){
      grid[playerY][playerX] = 0; //reset old location to white
      playerX--; //move
      grid[playerY][playerX] = "playerpath1"; //set new player location
      console.log("Left");
      nearPathLeft = false;
    } 
    else if (grid[playerY][playerX-1] === 4 && nearPathLeft === true){
      grid[playerY][playerX] = 0; //reset old location to white
      playerX--; //move
      grid[playerY][playerX] = "playerpath1"; //set new player location
      console.log("Left");
      nearPathLeft = false;
    }   
    else if (grid[playerY][playerX] === "playerpath1" && justOnPathLeftUs === true){ //When we hit the key. Checks for if we have an image under us. If so, the following executes...
      grid[playerY][playerX] = 3; 
      playerX--; 
      grid[playerY][playerX] = "player"; //Current player location will change back to normal. Can add tree image under us in the future if wanted to (follow same logic as path images)
      console.log("Left2");
      nearPathLeft = false;
    }
    else if (grid[playerY][playerX] === "playerpath2" && justOnPathLeftUs === true){
      grid[playerY][playerX] = 4;
      playerX--; 
      grid[playerY][playerX] = "player"; 
      console.log("Left2");
      nearPathLeft = false;
    }
  }




  if (key === "w") { //W
    if (grid[playerY-1][playerX] === 0) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerY--; //move
      grid[playerY][playerX] = "player"; //set new player location
    }
    else if (grid[playerY-1][playerX] === 3 && nearPathForward === true){
      grid[playerY][playerX] = 0; //reset old location to white
      playerY--; //move
      grid[playerY][playerX] = "playerpath1"; //set new player location
      console.log("Forward");
      nearPathForward = false;
    }
    else if (grid[playerY-1][playerX] === 4 && nearPathForward === true){
      grid[playerY][playerX] = 0; 
      playerY--;; 
      grid[playerY][playerX] = "playerpath2"; 
      console.log("Forward");
      nearPathForward = false;
    }
    else if (grid[playerY][playerX] === "playerpath1" && justOnPathFrontUs === true){ //When we hit the key. Checks for if we have an image under us. If so, the following executes...
      grid[playerY][playerX] = 3; 
      playerY--;; 
      grid[playerY][playerX] = "player"; //Current player location will change back to normal. Can add tree image under us in the future if wanted to (follow same logic as path images)
      console.log("Forward2");
      nearPathForward = false;
    }
    else if (grid[playerY][playerX] === "playerpath2" && justOnPathFrontUs === true){
      grid[playerY][playerX] = 4;
      playerY--;; 
      grid[playerY][playerX] = "player"; 
      console.log("Forward2");
      nearPathForward = false;
    }
  }

  if (key === "s") { //S
    if (grid[playerY+1][playerX] === 0) {
      grid[playerY][playerX] = 0; //reset old location to white
      playerY++; //move
      grid[playerY][playerX] = "player"; //set new player location
    }
    else if (grid[playerY+1][playerX] === 3 && nearPathDown === true){
      grid[playerY][playerX] = 0; //reset old location to white
      playerY++; //move
      grid[playerY][playerX] = "playerpath1"; //set new player location
      console.log("Down");
      nearPathDown = false;
      // standingOnDown = true;
    }
    else if (grid[playerY+1][playerX] === 4 && nearPathDown === true){
      grid[playerY][playerX] = 0; 
      playerY++; 
      grid[playerY][playerX] = "playerpath2"; 
      console.log("Down");
      nearPathDown = false;
    }
    else if (grid[playerY][playerX] === "playerpath1" && justOnPathBehindUs === true){ //When we hit the key. Checks for if we have an image under us. If so, the following executes...
      grid[playerY][playerX] = 3; 
      playerY++; 
      grid[playerY][playerX] = "player"; //Current player location will change back to normal. Can add tree image under us in the future if wanted to (follow same logic as path images)
      console.log("Down2");
      nearPathDown = false;
    }
    else if (grid[playerY][playerX] === "playerpath2" && justOnPathBehindUs === true){
      grid[playerY][playerX] = 4;
      playerY++; 
      grid[playerY][playerX] = "player"; 
      console.log("Down2");
      nearPathDown = false;
    }
  }
}

// standingOn (swithch between values of walkable blocks everytime you move onto or off a block)
// So if on block, standingOn === 1 (player ontop for ex.), if move off of block, standingOn === 2 (orginal block value)
// Constantly changing 

function switcherPath1To2(){
  if (grid[playerX][playerY] === 1){
    if (dPressed === true){
      //That means playerX + 1
    }
  }
}
 
  // check if s key is hit and if player was just on "playerpath1"

  //   else if (grid[playerY][playerX] === "playerpath1" && justOnPathBehindUs === true){ //When we hit the S key. Checks for if we have an image under us. If so, the following executes...
  //     grid[playerY][playerX] = 3; 
  //     playerY++; 
  //     grid[playerY][playerX] = "player"; //Current player location will change back to normal. Can add tree image under us in the future if wanted to (follow same logic as path images)
  //     console.log("Down2");
  //     nearPathDown = false;
  //   }
  //   else if (grid[playerY][playerX] === "playerpath2" && justOnPathBehindUs === true){
  //     grid[playerY][playerX] = 4;
  //     playerY++; 
  //     grid[playerY][playerX] = "player"; 
  //     console.log("Down2");
  //     nearPathDown = false;
  //   }
  // }

// function advanceDetection() {
//   for (let y=0; y<ROWS; y++) {
//     for (let x=0; x<COLS; x++) {
//       if (gird[y][x] === 1){
//         walkableW = true;
//       }
//     }
//   }
// }


//We'll also need to make a else if statement to check if we're beside other paths I think and draw other paths instead of just us ("player").
//So when we hit the s key. I want to it to check simotaneously if we're going ontop of a path block or getting off one.
//We may have to create another function to detect if we're off of the path block. I.e if we were just on grid[playerY+1][playerX] === "playerpath2". We need to make justOnPathBehindUs (or something) true.
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
//IMPLEMENT GRID DETECTION INTO DISPLAYGRID FUNCTION BECAUSE X AND Y ARE ALREADY PRE DEFIEINED.
//OR MAKE a seperate function following it's format (i.e y<ROWS)

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