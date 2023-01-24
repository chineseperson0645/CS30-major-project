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

//By adding brackets to the end of your function. You cause it to be called at the same time as other functions (it seems)
// if (state === "start1"){
//   startVideo = createVideo(['assets(world)/SET.mp4'], startVideoLoad); 
//   startVideo.showControls();
//   startVideo.addCue(13.5, loopedStartVideo()) //adds an event scheuler at the end of the length of the video. Duration figured out by the duration function.
// }

//This one without brackets at loopedStartVideo will call at 13.5 seconds into your video (aka the end).
// if (state === "start1"){
//   startVideo = createVideo(['assets(world)/SET.mp4'], startVideoLoad); 
//   startVideo.showControls();
//   startVideo.addCue(13.5, loopedStartVideo) //adds an event scheuler at the end of the length of the video. Duration figured out by the duration function.
// }

// startVideo.showControls(); //Shows play button, sound, timeline, etc. Litterally shows video controls.

  // function startVideoLoad2() {
  //   startVideo2.size(1920, 1080);
  //   startVideo2.loop();
  //   startVideo2.autoplay();
  // }
  // function loopedStartVideo(){
  //   startVideo.remove();
  //   startVideo2 = createVideo(["assets(world)/SET(LOOP).mp4"], startVideoLoad2); //maybe put createVideo in setup. and call as a seperate thing like startingVideo;
  //   state = "none";
  // }

//"dFirst" was implemented so that our first if statement would be called first.

// function createRandom2dArray(COLS, ROWS) {
//   let emptyArray = [];
//   for (let y=0; y<ROWS; y++) {
//     emptyArray.push([]);
//     for (let x=0; x<COLS; x++) {
//       if (random(100) < 50) {
//         emptyArray[y].push(1);
//       }
//       else {
//         emptyArray[y].push(3);
//       }
//     }
//   }
//   return emptyArray;
// }

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

  //SO IF this spot is blank (0) update the player location (playerX++) draw in that direction with a horse
  //last grid[px][py] is to make sure we can't eat a tree (or something) because this if statement is too general 
  //(only conditions that needed to be met before were just if your ontop a path and if the right, or whatever direction, block is moveable.)

  //So theortically, it's now, if your on a path block, if you can move onto the near path block... X
  //NVM stratch that. The surroundCheck function should already do that for us...

  //To save game data. We can run saveJSON(grid, "temp forest path")
  //And if gameOver, gameDeath, or exit. Delete "temp forest path".
  //Possibly use debug tool to see what's happening one step at a time.


//Future Goal is to make all player related blocks just that block and the player (not player alone). i.e playerpath1 or 2. (starting charcter and drawn charcter)

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

//Does not go in order nessisarily. 
//Just if this block is this (i.e 3), then if I mousePress this block will now be 4.
//Thus, this doesn't mean it iterates through the entire time
//Rather starts from the block you changed (mousePressed at 3 --> 4, itll start iterating with every mousePress from 4).

//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME

//Ask why there is just a white line at the bottom?
//Ask why there is just a white line at the bottom?
//Ask why there is just a white line at the bottom?
//Ask why there is just a white line at the bottom?
//Ask why there is just a white line at the bottom?
//Ask why there is just a white line at the bottom?
//Ask why there is just a white line at the bottom?
//(VIDEO)


//GOALS FOR TONITE:

//GET MOST SOUNDS AND MUSIC!
//FINISH BOSS ROOM and BOSS DETECTION and BOSS ANIMATED ENGAGEMENT SCREEN.
//GET ALL TO RUN PROPERLY (BE ABLE TO RUN THROUGH ALL SEQUENCES)!

//PUT IN DIRT AND DETAIL AT THE START
//POSSIBLY ADD MORE DETAIL TO MAP

//Highlight everything and hit tab to move over
//Highlight everything and hold shift then hit tab to move things in

//Something to consider for viewers, we used fewer functions in our grid to improve performance and instead built them directly into the control functions (WASD)
//So that they are only called once everytime a key is pressed instead of constantly being checked for in the draw loop. Hopefully saving performance.

//Notes:
// If near border or teleport blocks don't call not normal. Make teleport blocks just path images.
// Keep the beta.JSON and build all other maps as modified copies. (because theres a border)
// control + b to bring up sidebar
//May need to make a sanity check: Check if the front of me still exists (Sanity check, example aviable on GOL ex.).

// To Incorperate fight scenes. We could do, if the player is about to move onto a fight scene and keyPressed w or whatever
// Play a transition video, and then go into the fight.

//To implement interactables. We're going to have to do
//Something like if one block away from potion or whatever
//And if mousePressed. Consume potion (or health mushroom).
//Well also have to be able to track player health globally
//If we want to do health potions or mushrooms.
//(Both in grid and in fight scene)

// 87 === W
// 65 === A
// 83 === S
// 68 === D
// Spacebar === 32

// let nearPathLeft, nearPathDown, nearPathRight, nearPathForward;

// function surroundingCheck(){
//   if (grid[playerY][playerX+1] === 3 || grid[playerY][playerX+1] === 4){ // D 
//     nearPathRight = true;
//   }
//   else if (grid[playerY][playerX+1] ==! 3 || grid[playerY][playerX+1] ==! 4){ // D 
//     nearPathRight = false;
//   }

//   if (grid[playerY+1][playerX] === 3 || grid[playerY+1][playerX] === 4){ // S 
//     nearPathDown = true;
//   }
//   else if (grid[playerY+1][playerX] ==! 3 || grid[playerY+1][playerX] ==! 4){ // S 
//     nearPathDown = false;
//   }

//   if (grid[playerY][playerX-1] === 3 || grid[playerY][playerX-1] === 4){ // A 
//     nearPathLeft = true;
//   }
//   else if (grid[playerY][playerX-1] ==! 3 || grid[playerY][playerX-1] ==! 4){ // A 
//     nearPathLeft = false;
//   }

//   if (grid[playerY-1][playerX] === 3 || grid[playerY-1][playerX] === 4){ // W 
//     nearPathForward = true;
//   }
//   else if (grid[playerY-1][playerX] ==! 3 || grid[playerY-1][playerX] ==! 4){ // W 
//     nearPathForward = false;
//   }
// }

// function hopOffDXPP3(){ //D
//   grid[playerY][playerX] = 3; 
//   playerX++; 
//   grid[playerY][playerX] = "player"; 
// }
// function hopOffDXPP4(){
//   grid[playerY][playerX] = 4; 
//   playerX++; 
//   grid[playerY][playerX] = "player"; 
// }

// function hopOffAXNN3(){ //A
//   grid[playerY][playerX] = 3; 
//   playerX--; 
//   grid[playerY][playerX] = "player";
// }
// function hopOffAXNN4(){
//   grid[playerY][playerX] = 4; 
//   playerX--; 
//   grid[playerY][playerX] = "player";
// }

// function hopOffWYNN3(){ //W
//   grid[playerY][playerX] = 3; 
//   playerY--;; 
//   grid[playerY][playerX] = "player";
// }
// function hopOffWYNN4(){
//   grid[playerY][playerX] = 4;
//   playerY--;; 
//   grid[playerY][playerX] = "player"; 
// }

//Health Bar
// if (potionInteract === true){
//   globalPlayerHealth + 20;
//   displayImg(globalPlayerHealth)
// }

// function hopOffSYNN3(){ // S
//   grid[playerY][playerX] = 3; 
//   playerY++; 
//   grid[playerY][playerX] = "player"; 
// }
// function hopOffSYNN4(){
//   grid[playerY][playerX] = 4;
//   playerY++; 
//   grid[playerY][playerX] = "player"; 
// }

  // else if (grid[yPos][xPos] === 2) {
  //   grid[yPos][xPos] = 3;
  // }
  // else if (grid[yPos][xPos] === 3) {
  //   grid[yPos][xPos] = 4;
  // }
  // else if (grid[yPos][xPos] === 4) {
  //   grid[yPos][xPos] = 5;
  // }
  // else if (grid[yPos][xPos] === 5) {
  //   grid[yPos][xPos] = 6;
  // }
  // else if (grid[yPos][xPos] === 6) {
  //   grid[yPos][xPos] = 7;
  // }
  // else if (grid[yPos][xPos] === 7) {
  //   grid[yPos][xPos] = 8;
  // }
  // else if (grid[yPos][xPos] === 8) {
  //   grid[yPos][xPos] = 9;
  // }
  // else if (grid[yPos][xPos] === 9) {
  //   grid[yPos][xPos] = 10;
  // }
  // else if (grid[yPos][xPos] === 10) {
  //   grid[yPos][xPos] = 11;
  // }
  // else if (grid[yPos][xPos] === 11) {
  //   grid[yPos][xPos] = 12;
  // }
  // else if (grid[yPos][xPos] === 12) {
  //   grid[yPos][xPos] = 13;
  // }
  // else if (grid[yPos][xPos] === 13) {
  //   grid[yPos][xPos] = 14;
  // }
  // else if (grid[yPos][xPos] === 14) {
  //   grid[yPos][xPos] = 15;
  // }
  // else if (grid[yPos][xPos] === 15) {
  //   grid[yPos][xPos] = 16;
  // }
  // else if (grid[yPos][xPos] === 16) {
  //   grid[yPos][xPos] = 17;
  // }
  // else if (grid[yPos][xPos] === 17) {
  //   grid[yPos][xPos] = 18;
  // }
  // else if (grid[yPos][xPos] === 18) {
  //   grid[yPos][xPos] = 19;
  // }
  // else if (grid[yPos][xPos] === 19) {
  //   grid[yPos][xPos] = 20;
  // }
  // else if (grid[yPos][xPos] === 20) {
  //   grid[yPos][xPos] = 21;
  // }
  // else if (grid[yPos][xPos] === 21) {
  //   grid[yPos][xPos] = 22;
  // }
  // else if (grid[yPos][xPos] === 22) {
  //   grid[yPos][xPos] = 23;
  // }
  // else if (grid[yPos][xPos] === 23) {
  //   grid[yPos][xPos] = 24;
  // }
  // else if (grid[yPos][xPos] === 24) {
  //   grid[yPos][xPos] = 25;
  // }

  // else if (grid[yPos][xPos] === 25) {
  //   grid[yPos][xPos] = 93;
  //   console.log("border");
  // }
  // else if (grid[yPos][xPos] === 93) {
  //   grid[yPos][xPos] = 95;
  //   console.log("teleblock");
  // }
  // else if (grid[yPos][xPos] === 95) {
  //   grid[yPos][xPos] = 96;
  // }
  // else if (grid[yPos][xPos] === 96) {
  //   grid[yPos][xPos] = 97;
  // }
  // else if (grid[yPos][xPos] === 97) {
  //   grid[yPos][xPos] = 98;
  // }
  // else if (grid[yPos][xPos] === 98) {
  //   grid[yPos][xPos] = 99;
  // }
  // else if (grid[yPos][xPos] === 99) {
  //   grid[yPos][xPos] = 0;
  // }

//Test if we can go back to ninja village and such after forestPath2