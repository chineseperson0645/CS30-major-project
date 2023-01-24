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



// camera.x = player.x;

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

//Health Bar
// if (potionInteract === true){
//   globalPlayerHealth + 20;
//   displayImg(globalPlayerHealth)
// }

let haventInteract1 = true;
let haventInteractWiskers = true;

function keyPressed() {
  if (state === "start1"){
    startVideo.play();
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
        else if (grid[playerY][playerX+1] === 96 && haventInteract1 === true && crater === true){ //Ninja Interact
          ninjaVideo = createVideo(['assets(world)/Ninja.mp4'], ninjaVideoLoad);
          ninjaVideo.play();
          ninjaVideo.onended(removeNinjaVideo); //onended calls a callback function at the end of the duration of the media.
          haventInteract1 = false;
        }
        else if (grid[playerY][playerX+1] === 99 && haventInteractWiskers === true){ //Wisker's Interaction Screen
          wiskerVideo = createVideo(['assets(world)/wiskers.mp4'], wiskerVideoLoad);
          wiskerVideo.play();
          wiskerVideo.onended(removeWiskerVideo); //onended calls a callback function at the end of the duration of the media.
          haventInteractWiskers = false;
          //Place Transparent Image of Tasks and then like if potion interact xImg.remove(); or if that doesn't work, draw over with transparent img if possible
        }
        if (grid[playerY][playerX+1] === 95){ //Placed some teleporting situations into one if statement of if near a path teleport block (95) to improve performance (possibly).
          if (forestPath === true){
            forestPath = false;
            ninjaVillage = true;
            console.log("Ninja Village (D)");
            grid[playerY][playerX] = 3;
            grid = ninjaVillageJSON;
            playerX = 1;
            playerY = 21;
            grid[playerY][playerX] = "player";
          }
          else if (crater === true){
            crater = false;
            forestPath = true;
            console.log("Forest Path (D)");
            grid[playerY][playerX] = 3;
            grid = forestPathJSON;
            playerX = 1; //I believe I had looked at some of Khan Vin's code to figure out updating playerX and Y for JSONS
            playerY = 8;
            grid[playerY][playerX] = "player";
          }
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
        if (grid[playerY][playerX-1] === 95){
          if (haventInteractWiskers === false && ninjaVillage === true){ //Wisker's Interaction Screen
            ninjaVillage = false;
            forestPath2 = true;
            console.log("Forest Path 2");
            grid[playerY][playerX] = 3;
            grid = forestPath2JSON;
            playerX = 33;
            playerY = 20;
            grid[playerY][playerX] = "player";
          }
          else if (ninjaVillage === true){
            ninjaVillage = false;
            forestPath = true;
            console.log("Forest Path (A)");
            grid[playerY][playerX] = 3;
            grid = forestPathJSON;
            playerX = 33;
            playerY = 20;
            grid[playerY][playerX] = "player";
          }
          else if (forestPath === true){
            crater = true;
            forestPath = false;
            console.log("Forest Path (D)");
            grid[playerY][playerX] = 3;
            grid = craterJSON;
            playerX = 33;
            playerY = 8;
            grid[playerY][playerX] = "player";
          }
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
        else if (grid[playerY-1][playerX] === 95 && forestPath2 === true){ //Change ninjaVillage to like bossRoom
          forestPath2 = false;
          bossRoom = true;
          grid[playerY][playerX] = 3;
          grid = bossJSON;
          playerX = 17;
          playerY = 23;
          grid[playerY][playerX] = "player";
        }
        else if (grid[playerY-1][playerX] === 70){ 
          state = "fight"; 
          console.log("state should be fight");
          // creditsVideo = createVideo(['assets(world)/credit.mp4'], creditsVideoLoad);
          // creditsVideo.play();
          // creditsVideo.onended(creditsVideoRemove); //onended calls a callback function at the end of the duration of the media.
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
        if (grid[playerY+1][playerX] === 95 && bossRoom === true){ //Teleport Detection
          bossRoom = false;
          forestPath2 = true;
          grid[playerY][playerX] = 3;
          grid = forestPath2JSON; //REMEBER TO PUT JSON AT THE END!
          playerX = 27; 
          playerY = 2;
          grid[playerY][playerX] = "player"; 
          console.log("Outside Ninja House (S)");
        }
      }
    }
  }

//Test if we can go back to ninja village and such after forestPath2

