//Doodles/Notes

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