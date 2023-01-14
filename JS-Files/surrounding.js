// Surrounding.JS

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

  //SO IF this spot is blank (0) update the player location (playerX++) draw in that direction with a horse
  //last grid[px][py] is to make sure we can't eat a tree (or something) because this if statement is too general 
  //(only conditions that needed to be met before were just if your ontop a path and if the right, or whatever direction, block is moveable.)

  //So theortically, it's now, if your on a path block, if you can move onto the near path block... X
  //NVM stratch that. The surroundCheck function should already do that for us...

  //To save game data. We can run saveJSON(grid, "temp forest path")
  //And if gameOver, gameDeath, or exit. Delete "temp forest path".
  //Possibly use debug tool to see what's happening one step at a time.


//Future Goal is to make all player related blocks just that block and the player (not player alone). i.e playerpath1 or 2. (starting charcter and drawn charcter)

function hopOffDXPP3(){ //D
  grid[playerY][playerX] = 3; 
  playerX++; 
  grid[playerY][playerX] = "player"; 
}
function hopOffDXPP4(){
  grid[playerY][playerX] = 4; 
  playerX++; 
  grid[playerY][playerX] = "player"; 
}

function hopOffAXNN3(){ //A
  grid[playerY][playerX] = 3; 
  playerX--; 
  grid[playerY][playerX] = "player";
}
function hopOffAXNN4(){
  grid[playerY][playerX] = 4; 
  playerX--; 
  grid[playerY][playerX] = "player";
}

function hopOffWYNN3(){ //W
  grid[playerY][playerX] = 3; 
  playerY--;; 
  grid[playerY][playerX] = "player";
}
function hopOffWYNN4(){
  grid[playerY][playerX] = 4;
  playerY--;; 
  grid[playerY][playerX] = "player"; 
}

function hopOffSYNN3(){ // S
  grid[playerY][playerX] = 3; 
  playerY++; 
  grid[playerY][playerX] = "player"; 
}
function hopOffSYNN4(){
  grid[playerY][playerX] = 4;
  playerY++; 
  grid[playerY][playerX] = "player"; 
}

//"dFirst" was implemented so that our first if statement would be called first.

// Orginal Design
// else if (grid[playerY][playerX+1] === 23){
//   grid[playerY][playerX] = 23; 
//   playerX++; 
//   grid[playerY][playerX] = "playerfloor"; 
//   console.log("floor D");
// }
// else if (grid[playerY+1][playerX] === 97){
//   grid[playerY][playerX] = 23; 
//   playerY++; 
//   grid[playerY][playerX] = "playerfloor"; 
//   console.log("nom");
// }

function keyPressed() {
  if (state === "start1"){
    startVideo.play();
    state = "start2";
  }
  if (state === "grid"){
    surroundingCheck();
      if (key === "d") { //D
        if (grid[playerY][playerX+1] === 3 && nearPathRight == true){
          hopOffDXPP3();
          console.log("Right3");
        }
        else if (grid[playerY][playerX+1] === 4 && nearPathRight == true){
          hopOffDXPP4();
          console.log("Right4");
        }
        else if (grid[playerY][playerX+1] === 23){ //Inside ninja house
          grid[playerY][playerX] = 23; 
          playerX++; 
          grid[playerY][playerX] = "playerfloor"; 
          console.log("floor D");
        }
        else if (grid[playerY][playerX+1] === 97){ //When eats a potion
          grid[playerY][playerX] = 23; 
          playerX++; 
          grid[playerY][playerX] = "playerfloor"; 
          globalPlayerHealth += 20;
          console.log("added");
          if (globalPlayerHealth > 100){
            globalPlayerHealth = 100;
            console.log("cap");
          }
        }
        else if (grid[playerY][playerX+1] === 95 && forestPath === true){ //Teleport from forest path to ninja village
          forestPath = false;
          ninjaVillage = true;
          console.log("Ninja Village (D)");
          grid[playerY][playerX] = 3;
          grid = ninjaVillageJSON;
          playerX = 1;
          playerY = 21;
          grid[playerY][playerX] = "player";
        }
      }
    
      //There is a tp block in front of us.
      //This should detect if I'm ontop of a playerpath and if I'm beside a Right path. If so, it'll ask if I hit my D key and also which block I'm
      //moving onto.
    
      if (key === "a") { //A
        if (grid[playerY][playerX-1] === 3 && nearPathLeft === true){
          hopOffAXNN3();
          console.log("Left");
        } 
        else if (grid[playerY][playerX-1] === 4 && nearPathLeft === true){
          hopOffAXNN4();
          console.log("Left");
        } 
        else if (grid[playerY][playerX-1] === 23){
          grid[playerY][playerX] = 23; 
          playerX--; 
          grid[playerY][playerX] = "playerfloor"; 
          console.log("floor A");
        }
        else if (grid[playerY][playerX-1] === 97){
          grid[playerY][playerX] = 23; 
          playerX--; 
          grid[playerY][playerX] = "playerfloor"; 
          globalPlayerHealth += 20;
          console.log("added");
          if (globalPlayerHealth > 100){
            globalPlayerHealth = 100;
            console.log("cap");
          }
        }
        else if (grid[playerY][playerX-1] === 95 && ninjaVillage === true){
          ninjaVillage = false;
          forestPath = true;
          console.log("Forest Path (A)");
          grid[playerY][playerX] = 3;
          grid = forestPathJSON;
          playerX = 33;
          playerY = 20;
          grid[playerY][playerX] = "player";
        }
      }
    
      if (key === "w") { //W
        if (grid[playerY-1][playerX] === 3 && nearPathForward === true){
          hopOffWYNN3();
          console.log("Forward");
        }
        else if (grid[playerY-1][playerX] === 4 && nearPathForward === true){
          hopOffWYNN4();
          console.log("Forward");
        }
        else if (grid[playerY-1][playerX] === 23){
          grid[playerY][playerX] = 23; 
          playerY--; 
          grid[playerY][playerX] = "playerfloor"; 
          console.log("floor D");
        }
        else if (grid[playerY-1][playerX] === 97){
          grid[playerY][playerX] = 23; 
          playerY--; 
          grid[playerY][playerX] = "playerfloor"; 
          globalPlayerHealth += 20;
          console.log("added");
          if (globalPlayerHealth > 100){
            globalPlayerHealth = 100;
            console.log("cap");
          }
        }
        else if (grid[playerY-1][playerX] === 9 && ninjaVillage === true){ //Door Detection
          ninjaVillage = false;
          insideNinjaHouse = true;
          grid[playerY][playerX] = 3;
          grid = houseJSON;
          playerX = 17;
          playerY = 16;
          grid[playerY][playerX] = "player";
        }
        else if (grid[playerY-1][playerX] === 9 && ninjaVillage === true){ //Change ninjaVillage to like bossRoom
          ninjaVillage = false;
          insideNinjaHouse = true;
          grid[playerY][playerX] = 3;
          grid = houseJSON;
          playerX = 17;
          playerY = 16;
          grid[playerY][playerX] = "player";
        }
      }
    
      if (key === "s") { //S
        if (grid[playerY+1][playerX] === 3 && nearPathDown === true){
          hopOffSYNN3();
          console.log("Down");
        }
        else if (grid[playerY+1][playerX] === 4 && nearPathDown === true){
          hopOffSYNN4();
          console.log("Down");
        }
        else if (grid[playerY+1][playerX] === 23){
          grid[playerY][playerX] = 23; 
          playerY++;
          grid[playerY][playerX] = "playerfloor"; 
          console.log("floor D");
        }
        else if (grid[playerY+1][playerX] === 97){ 
          grid[playerY][playerX] = 23; 
          playerY++; 
          grid[playerY][playerX] = "playerfloor"; 
          globalPlayerHealth += 20;
          console.log("added");
          if (globalPlayerHealth > 100){
            globalPlayerHealth = 100;
            console.log("cap");
          }
        }
        if (grid[playerY+1][playerX] === 25 && insideNinjaHouse === true){ //Teleport Detection
          insideNinjaHouse = false;
          ninjaVillage = true;
          grid[playerY][playerX] = 23;
          grid = ninjaVillageJSON; //REMEBER TO PUT JSON AT THE END!
          playerX = 14; 
          playerY = 6;
          grid[playerY][playerX] = "player"; 
          console.log("Outside Ninja House (S)");
        }
      }
    }
  }

// SAMPLE //
//if (grid[playerY][playerX] === "playerpath1" && nearPathDown === true){ //When we hit the key. Checks for if we have an image under us. If so, the following executes...

// else if (grid[playerY][playerX+1] === 0) { //Allows walk over trees
//   grid[playerY][playerX] = 0; //reset old location to white
//   playerX++; //move
//   grid[playerY][playerX] = "player"; //set new player location (current)
// }

// standingOn (swithch between values of walkable blocks everytime you move onto or off a block)
// So if on block, standingOn === 1 (player ontop for ex.), if move off of block, standingOn === 2 (orginal block value)
// Constantly changing 

// function switcherPath1To2(){
//   if (grid[playerX][playerY] === 1){
//     if (dPressed === true){
//       //That means playerX + 1
//     }
//   }
// }

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