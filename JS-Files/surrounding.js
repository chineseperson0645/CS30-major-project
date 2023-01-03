// Surrounding.JS

//Border blocks are broken again lol. Player can eat them.

let nearPathLeft, nearPathDown, nearPathRight, nearPathForward;
function surroundingCheck(){
  if (grid[playerY][playerX+1] === 3 || grid[playerY][playerX+1] === 4){ // D (Opposite is A)
    nearPathRight = true;
  }
  else if (grid[playerY][playerX+1] ==! 3 || grid[playerY][playerX+1] ==! 4){ // D (Opposite is A)
    nearPathRight = false;
  }

  if (grid[playerY+1][playerX] === 3 || grid[playerY+1][playerX] === 4){ // S (Behind is W)
    nearPathDown = true;
  }
  else if (grid[playerY+1][playerX] ==! 3 || grid[playerY+1][playerX] ==! 4){ // S (Behind is W)
    nearPathDown = false;
  }

  if (grid[playerY][playerX-1] === 3 || grid[playerY][playerX-1] === 4){ // A (Opposite is D)
    nearPathLeft = true;
  }
  else if (grid[playerY][playerX-1] ==! 3 || grid[playerY][playerX-1] ==! 4){ // A (Opposite is D)
    nearPathLeft = false;
  }

  if (grid[playerY-1][playerX] === 3 || grid[playerY-1][playerX] === 4){ // W (Behind is S)
    nearPathForward = true;
  }
  else if (grid[playerY-1][playerX] ==! 3 || grid[playerY-1][playerX] ==! 4){ // W (Behind is S)
    nearPathForward = false;
  }
}

// 87 === W
// 65 === A
// 83 === S
// 68 === D
// Spacebar === 32

function keyPressed() {
  if (key === "d") { //D
  //SO IF this spot is blank (0) update the player location (playerX++) draw in that direction with a horse
  //last grid[px][py] is to make sure we can't eat a tree (or something) because this if statement is too general 
  //(only conditions that needed to be met before were just if your ontop a path and if the right, or whatever direction, block is moveable.)

  //So theortically, it's now, if your on a path block, if you can move onto the near path block... X
  //NVM stratch that. The surroundCheck function should already do that for us...

    if (grid[playerY][playerX] === "playerpath1" && nearPathRight === true){ 
      grid[playerY][playerX] = 3; 
      playerX++; 
      grid[playerY][playerX] = "player"; 
      console.log("Right23");
      nearPathRight = false;
    }
    if (grid[playerY][playerX] === "playerpath2" && nearPathRight === true){ 
      grid[playerY][playerX] = 4;
      playerX++; 
      grid[playerY][playerX] = "player"; 
      console.log("Right24");
      nearPathRight = false;
    }
    else if (grid[playerY][playerX+1] === 3 && nearPathRight === true){
      grid[playerY][playerX] = 3; 
      playerX++; 
      grid[playerY][playerX] = "playerpath1";
      console.log("Right3");
      nearPathRight = false;
    }
    else if (grid[playerY][playerX+1] === 4 && nearPathRight === true){
      grid[playerY][playerX] = 4; 
      playerX++; //move
      grid[playerY][playerX] = "playerpath2"; 
      console.log("Right4");
      nearPathRight = false;
    }
    if (grid[playerY][playerX+1] === 95 && forestPath){ //Teleport Detection
      console.log("teleport");
      grid = newJSON;
      playerX = 2;
      playerY = 5;
    }
  }
  //To save game data. We can run saveJSON(grid, "temp forest path")
  //And if gameOver, gameDeath, or exit. Delete "temp forest path".

//This should detect if I'm ontop of a playerpath and if I'm beside a Right path. If so, it'll ask if I hit my D key and also which block I'm
//moving onto.

//Possibly use debug tool to see what's happening one step at a time.

//Next step after fixing "getting off a block detection" is most likely changing it so instead of turning the object you get off onto into just our charcter ("player"). But also turning it 
//into a block with an image under it (i.e "playerpath1")


  if (key === "a") { //A
    if (grid[playerY][playerX] === "playerpath1" && nearPathLeft === true){
      grid[playerY][playerX] = 3; 
      playerX--; 
      grid[playerY][playerX] = "player";
      console.log("Left2");
      nearPathLeft = false;
    }
    if (grid[playerY][playerX] === "playerpath2" && nearPathLeft === true){
      grid[playerY][playerX] = 4; 
      playerX--; 
      grid[playerY][playerX] = "player";
      console.log("Left2");
      nearPathLeft = false;
    }
    else if (grid[playerY][playerX-1] === 3 && nearPathLeft === true){
      grid[playerY][playerX] = 3; //reset old location to white
      playerX--; //move
      grid[playerY][playerX] = "playerpath1"; //set new player location
      console.log("Left");
      nearPathLeft = false;
    } 
    else if (grid[playerY][playerX-1] === 4 && nearPathLeft === true){
      grid[playerY][playerX] = 4; //reset old location to white
      playerX--; //move
      grid[playerY][playerX] = "playerpath2"; //set new player location
      console.log("Left");
      nearPathLeft = false;
    }   
    if (grid[playerY][playerX-1] === 95){ //Teleport Detection
      console.log("teleport");
    }
  }

  if (key === "w") { //W
    if (grid[playerY][playerX] === "playerpath1" && nearPathForward){ 
      grid[playerY][playerX] = 3; 
      playerY--;; 
      grid[playerY][playerX] = "player";
      console.log("Forward2");
      nearPathForward = false;
    }
    if (grid[playerY][playerX] === "playerpath2" && nearPathForward){
      grid[playerY][playerX] = 4;
      playerY--;; 
      grid[playerY][playerX] = "player"; 
      console.log("Forward2");
      nearPathForward = false;
    }
    else if (grid[playerY-1][playerX] === 3 && nearPathForward === true){
      grid[playerY][playerX] = 3; //reset old location to white
      playerY--; //move
      grid[playerY][playerX] = "playerpath1"; //set new player location
      console.log("Forward");
      nearPathForward = false;
    }
    else if (grid[playerY-1][playerX] === 4 && nearPathForward === true){
      grid[playerY][playerX] = 4; 
      playerY--;; 
      grid[playerY][playerX] = "playerpath2"; 
      console.log("Forward");
      nearPathForward = false;
    }
    if (grid[playerY-1][playerX] === 95){ //Teleport Detection
      console.log("teleport");
    }
  }

  if (key === "s") { //S
    if (grid[playerY][playerX] === "playerpath1" && nearPathDown === true){ //When we hit the key. Checks for if we have an image under us. If so, the following executes...
      grid[playerY][playerX] = 3; 
      playerY++; 
      grid[playerY][playerX] = "player"; //Current player location will change back to normal. Can add tree image under us in the future if wanted to (follow same logic as path images)
      console.log("Down2");
      nearPathDown = false;
    }
    if (grid[playerY][playerX] === "playerpath2" && nearPathDown === true){
      grid[playerY][playerX] = 4;
      playerY++; 
      grid[playerY][playerX] = "player"; 
      console.log("Down2");
      nearPathDown = false;
    }
    else if (grid[playerY+1][playerX] === 3 && nearPathDown === true){
      grid[playerY][playerX] = 3; //reset old location to white
      playerY++; //move
      grid[playerY][playerX] = "playerpath1"; //set new player location
      console.log("Down");
      nearPathDown = false;
      // standingOnDown = true;
    }
    else if (grid[playerY+1][playerX] === 4 && nearPathDown === true){
      grid[playerY][playerX] = 4; 
      playerY++; 
      grid[playerY][playerX] = "playerpath2"; 
      console.log("Down");
      nearPathDown = false;
    }
    if (grid[playerY+1][playerX] === 95){ //Teleport Detection
      console.log("teleport");
    }
  }
}

// else if (grid[playerY][playerX+1] === 0) { //Allows walk over trees
//   grid[playerY][playerX] = 0; //reset old location to white
//   playerX++; //move
//   grid[playerY][playerX] = "player"; //set new player location (current)
// }

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

// function whateverMoveableIsHere(){
  //Essientially, if it's movable, allow player to move here.
// }

// check if s key is hit and if player was just on "playerpath1"
// function advanceDetection() {
//   for (let y=0; y<ROWS; y++) {
//     for (let x=0; x<COLS; x++) {
//       if (gird[y][x] === 1){
//         walkableW = true;
//       }
//     }
//   }
// }

//IMPLEMENT GRID DETECTION INTO DISPLAYGRID FUNCTION BECAUSE X AND Y ARE ALREADY PRE DEFIEINED.
//OR MAKE a seperate function following it's format (i.e y<ROWS)

//We'll also need to make a else if statement to check if we're beside other paths I think and draw other paths instead of just us ("player").
//So when we hit the s key. I want to it to check simotaneously if we're going ontop of a path block or getting off one.
//We may have to create another function to detect if we're off of the path block. I.e if we were just on grid[playerY+1][playerX] === "playerpath2". We need to make justOnPathBehindUs (or something) true.
//Create another else if function where it sets the path image your on back into a normal path image (3 or 4)

//Current problem is that it detects it nearTree (or near one) and adds the playerX or Y twice because it's also moving from whitespace.
//If moved into a certain grid position. Player X and Y are still tracked.
//But if nearTree is true. Draw a 10 instead of a 9. (10 can just be a tree ontop of a tree)