//mouse.js

let secondTime = false;
let secondAttemptStatus;
let startAfterStatus;

function gameGrid(){
state = "grid";
console.log("gameGrid, grid")
  if (state === "grid"){
    if (startAfterStatus === true){
      startAfter.remove(); //Put back if not in state = "grid" (manually)
      startAfterStatus = false;
    }
    if (secondAttemptStatus === true){
      attemp2Video.remove(); //Put back if not in state = "grid" (manually)
      secondAttemptStatus = false
    }

    createCanvas(width, height); //Optimized for 1920x1080 screens.
    cellWidth = width/COLS;
    cellHeight = height/ROWS;
    grid = create2dArray(COLS, ROWS);
    crater = true; //Change if you change JSON
    grid = craterJSON;
    grid[playerY][playerX] = "player"; 

    //Do not do [playerY+#][playerX+#] or whatever #. It messes up movement keys.
  }
}

function mousePressed() {
  // // globalPlayerHealth = 0;
  // if (globalPlayerHealth <= 0){ //For death screen. Do like if in fight state and globalPlayerHealth === 0.
  //   diedVideo.play();
  // }
  
  if (state === "img"){
    let hit = collidePointRect(mouseX, mouseY, 580, 460, 760, 240);;
    if (hit && secondTime === true){
      buttonSound.play();
      console.log("hit");
      attemp2Video = createVideo(['assets(world)/attempt2.mp4'], startAfterLoad);
      attemp2Video.play();
      attemp2Video.onended(gameGrid); //onended calls a callback function at the end of the duration of the media.
      secondAttemptStatus = true;
      hit = false;
    }
    if (hit && secondTime === false){
      buttonSound.play();
      console.log("hit");
      bossMusic.stop();
      startAfter = createVideo(['assets(world)/SET(AFTER).mp4'], startAfterLoad);
      startAfter.play();
      startAfter.onended(gameGrid); //onended calls a callback function at the end of the duration of the media.
      startAfterStatus = true;
      hit = false;
    }    
  }
  
//collidePointRect(pointX, pointY, x, y, width, height)

//If Customizing Grid, Uncomment the following. Add repeats as needed.
  // if (state === "grid"){
  //   let xPos = Math.floor(mouseX/cellWidth);
  //   let yPos = Math.floor(mouseY/cellHeight);
  //   if (mouseButton === LEFT){
  //     if (grid[yPos][xPos] === 0) {
  //       grid[yPos][xPos] = 1;
  //     }
  //     else if (grid[yPos][xPos] === 1) {
  //       grid[yPos][xPos] = 0;
  //     }
  //   }
  //   if (mouseButton === CENTER){
  //       grid[yPos][xPos] = 70; //Interchangable to create borders or teleport blocks, just place approriate #
  //     }
  //   }
  }

    
