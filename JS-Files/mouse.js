//mouse.js

let secondTime = false;
let secondAttemptStatus;
let startAfterStatus;

function gameGrid(){
state = "grid";
console.log("gameGrid, grid")
  if (state === "grid"){
    console.log("here");
    if (startAfterStatus === true){
      startAfter.remove(); //Put back if not in state = "grid" (manually)
      startAfterStatus = false;
    }
    if (secondAttemptStatus === true){
      attemp2Video.remove(); //Put back if not in state = "grid" (manually)
      secondAttemptStatus = false
    }
    createCanvas(1920, 1076); //Optimized for 1920x1080 screens.
    // globalPlayerHealth = random(59, 92);
    cellWidth = width/COLS;
    cellHeight = height/ROWS;
    grid = create2dArray(COLS, ROWS);
    crater = true; //Change if you change JSON
    grid = craterJSON;
    grid[playerY][playerX] = "player"; 
    //Do not do [playerY+#][playerX+#] or whatever #. It messes up movement keys.
  }
}

//Once interact with Wiskers, change JSON to one without ninjas

globalPlayerHealth = 10;
function mousePressed() {
  globalPlayerHealth = 0;
  if (globalPlayerHealth === 0 && state === "death"){ //For death screen. Do like if in fight state and globalPlayerHealth === 0.
    diedVideo.play();
  }
  
let hit = collidePointRect(mouseX, mouseY, 580, 460, 760, 240);;
  if (state === "img"){
    if (hit && secondTime === true){
      console.log("hit");
      attemp2Video = createVideo(['assets(world)/attempt2.mp4'], startAfterLoad);
      attemp2Video.play();
      attemp2Video.onended(gameGrid); //onended calls a callback function at the end of the duration of the media.
      secondAttemptStatus = true;
      hit = false;
    }
    if (hit && secondTime === false){
      console.log("hit");
      startAfter = createVideo(['assets(world)/SET(AFTER).mp4'], startAfterLoad);
      startAfter.play();
      startAfter.onended(gameGrid); //onended calls a callback function at the end of the duration of the media.
      startAfterStatus = true;
      hit = false;
    }    
  }

//collidePointRect(pointX, pointY, x, y, width, height)

  if (state === "grid"){
    let xPos = Math.floor(mouseX/cellWidth);
    let yPos = Math.floor(mouseY/cellHeight);
  
      if (mouseButton === LEFT){
        if (grid[yPos][xPos] === 0) {
          grid[yPos][xPos] = 2;
        }
        else if (grid[yPos][xPos] === 2) {
          grid[yPos][xPos] = 3;
        }
        else if (grid[yPos][xPos] === 3) {
          grid[yPos][xPos] = 96;
        }
        else if (grid[yPos][xPos] === 96) {
          grid[yPos][xPos] = 100;
        }
        else if (grid[yPos][xPos] === 101) {
          grid[yPos][xPos] = 0;
        }

      }
        
      if (mouseButton === CENTER){
          grid[yPos][xPos] = 101; //Interchangable to create borders or teleport blocks, just place approriate #
        }
      }
  }

    
//Does not go in order nessisarily. 
//Just if this block is this (i.e 3), then if I mousePress this block will now be 4.
//Thus, this doesn't mean it iterates through the entire time
//Rather starts from the block you changed (mousePressed at 3 --> 4, itll start iterating with every mousePress from 4).