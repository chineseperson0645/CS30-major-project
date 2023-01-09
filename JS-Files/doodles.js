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



// MARK IV
// if (key === "s") { //S
//   sPressed = true;
//   if (sPressed === true){
//     console.log("s");
//     sPressed = false;
//   }
//SO IF this spot is blank (0) update the player location (playerX++) draw in that direction with a player
//   if (grid[playerY+1][playerX] === 0) {
//     grid[playerY][playerX] = 0; //reset old location to white
//     playerY++; //move
//     grid[playerY][playerX] = "player"; //set new player location
//   }
//   else if (grid[playerY+1][playerX] === 3 && nearPathDown === true){
//     grid[playerY][playerX] = 0; //reset old location to white
//     playerY++; //move
//     grid[playerY][playerX] = "playerpath1"; //set new player location
//     console.log("Down");
//     nearPathDown = false;
//     // standingOnDown = true;
//   }
//   else if (grid[playerY+1][playerX] === 4 && nearPathDown === true){
//     grid[playerY][playerX] = 0; 
//     playerY++; 
//     grid[playerY][playerX] = "playerpath2"; 
//     console.log("Down");
//     nearPathDown = false;
//   }
//   else if (grid[playerY][playerX] === "playerpath1" && justOnPathBehindUs === true){ //When we hit the key. Checks for if we have an image under us. If so, the following executes...
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



// MARK V
// if (key === "d") { //D
//   dPressed = true;
// //SO IF this spot is blank (0) update the player location (playerX++) draw in that direction with a horse
//   if (grid[playerY][playerX] === "playerpath1" && nearPathRight === true){ 
//     if (dPressed === true){
//       pathFirst = true;
//       grid[playerY][playerX] = 3; 
//       playerX++; 
//       grid[playerY][playerX] = "player"; 
//       console.log("Right2");
//       nearPathRight = false;
//       pathFirst = false;
//     }
//   }
//   if (grid[playerY][playerX] === "playerpath2" && nearPathRight === true){
//     if (dPressed === true){
//       pathFirst = true;
//       grid[playerY][playerX] = 4;
//       playerX++; 
//       grid[playerY][playerX] = "player"; 
//       console.log("Right2");
//       nearPathRight = false;
//       pathFirst = false;
//     }
//   }
//   else if (grid[playerY][playerX+1] === 3 && nearPathRight === true && pathFirst === false){
//     grid[playerY][playerX] = 3; 
//     playerX++; 
//     grid[playerY][playerX] = "playerpath1";
//     console.log("Right");
//     nearPathRight = false;
//   }
//   else if (grid[playerY][playerX+1] === 4 && nearPathRight === true && pathFirst === false){
//     grid[playerY][playerX] = 4; 
//     playerX++; //move
//     grid[playerY][playerX] = "playerpath1"; 
//     console.log("Right");
//     nearPathRight = false;
//   }
//   dPressed = false;
// }

// MARK VI
// if (key === "a") { //A
//   if (grid[playerY][playerX] === "playerpath1" && nearPathLeft === true){
//     grid[playerY][playerX] = 3; 
//     playerX--; 
//     grid[playerY][playerX] = "playerpath1";
//     console.log("Left2");
//     nearPathLeft = false;
//   }
//   if (grid[playerY][playerX] === "playerpath2" && nearPathLeft === true){
//     grid[playerY][playerX] = 4; 
//     playerX--; 
//     grid[playerY][playerX] = "playerpath2";
//     console.log("Left2");
//     nearPathLeft = false;
//   }
//   else if (grid[playerY][playerX-1] === 3 && nearPathLeft === true){
//     grid[playerY][playerX] = 3; //reset old location to white
//     playerX--; //move
//     grid[playerY][playerX] = "playerpath1"; //set new player location
//     console.log("Left");
//     nearPathLeft = false;
//   } 
//   else if (grid[playerY][playerX-1] === 4 && nearPathLeft === true){
//     grid[playerY][playerX] = 4; //reset old location to white
//     playerX--; //move
//     grid[playerY][playerX] = "playerpath2"; //set new player location
//     console.log("Left");
//     nearPathLeft = false;
//   }  
//   else if (grid[playerY][playerX-1] === 95 && ninjaVillage === true){
//     console.log("teleport complete");
//     grid[playerY][playerX] = 3;
//     grid = forestPathJSON;
//     playerX = 33;
//     playerY = 20;
//     grid[playerY][playerX] = "player";
//   }
// }

// MARK VII (problems, skips blocks)
  // if (key === "d") { //D
  //   if (grid[playerY][playerX] === "playerpath1" && grid[playerY][playerX+1] === 3){ 
  //     hopOffDXPP3();
  //     console.log("Right23");
  //   }
  //   if (grid[playerY][playerX] === "playerpath2" && grid[playerY][playerX+1] === 4){ 
  //     hopOffDXPP4();
  //     console.log("Right24");
  //   }
  //   else if (grid[playerY][playerX+1] === 3 && nearPathRight){
  //     hopOffDXPP3();
  //     console.log("Right3");
  //   }
  //   else if (grid[playerY][playerX+1] === 4 && nearPathRight){
  //     hopOffDXPP4();
  //     console.log("Right4");
  //   }
  //   else if (grid[playerY][playerX+1] === 95 && forestPath === true){
  //     console.log("teleport D");
  //     grid[playerY][playerX] = 3;
  //     grid = ninjaVillageJSON;
  //     playerX = 1;
  //     playerY = 21;
  //     grid[playerY][playerX] = "playerpath1";
  //   }
  // }

// MARK VIII
  // if (key === "s") { //S
  //   if (grid[playerY][playerX] === "playerpath1" && nearPathDown === true){ //When we hit the key. Checks for if we have an image under us. If so, the following executes...
  //     hopOffSYNN3();
  //     console.log("Down2");
  //   }
  //   if (grid[playerY][playerX] === "playerpath2" && nearPathDown === true){
  //     hopOffSYNN4();
  //     console.log("Down2");
  //   }
  //   else if (grid[playerY+1][playerX] === 3 && nearPathDown === true){
  //     hopOffSYNN3();
  //     console.log("Down");
  //   }
  //   else if (grid[playerY+1][playerX] === 4 && nearPathDown === true){
  //     hopOffSYNN4();
  //     console.log("Down");
  //   }
  //   if (grid[playerY+1][playerX] === 95){ //Teleport Detection
  //     console.log("teleport S");
  //   }
  // }

  // SAMPLE //
  //if (grid[playerY][playerX] === "playerpath1" && nearPathLeft === true){ //When we hit the key. Checks for if we have an image under us. If so, the following executes...

// let wPressed = false;
// let aPressed = false;
// let sPressed = false;
// let dPressed = false;
// let pathFirst = false;

// Karar is suggesting to use math to detect distance (in pixels) between enemey and player. (utilize distance formula)
// (I suggest that the movements start off random for the enemy then move to detection)

// i.e
// if (enemyLocationFromPlayer > 200 pixels){
//   enemyCantAttackYet = true;
//   move enemeyX++ (or enemyX-- towards player respectivly.)
// }

// Then another if statement that detects if player is close enough 
// For enemy to enter into attack state, so...
// i.e 
// if (enemyLocationFromPlayer <= 100 pixels){
//   enemyCantAttackYet = false;
//   dartShot; (or whatever attack).
// }