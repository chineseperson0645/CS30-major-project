// Surrounding.JS

//Health Bar
// if (potionInteract === true){
//   globalPlayerHealth + 20;
//   displayImg(globalPlayerHealth)
// }

//General Explaination of Functions:
// if (grid[playerY][playerX+1] === 3){ 
//   grid[playerY][playerX] = 3; 
//   playerX++; 
//   grid[playerY][playerX] = "player"; 
// }

//Essientially, it's asking if the block beside me on my right is a certain block (based on number, in this case 3 for path1 block) and if it is.
//Ill be able to walk on it. It's fundemental principle is based off Mr. Schellenberg's 2D array moving demo.

let haventInteract1 = true;
let haventInteractWiskers = true;

function keyPressed() {
  if (state === "start1"){
    startVideo.play();
  }
  if (state === "grid"){
    if (key === "d") { //D
      if (grid[playerY][playerX+1] === 3){ 
        grid[playerY][playerX] = 3; 
        playerX++; 
        grid[playerY][playerX] = "player"; 
      }
      else if (grid[playerY][playerX+1] === 4){
        grid[playerY][playerX] = 4; 
        playerX++; 
        grid[playerY][playerX] = "player"; 
      }
      else if (grid[playerY][playerX+1] === 23){ //Inside ninja house
        grid[playerY][playerX] = 23; 
        playerX++; 
        grid[playerY][playerX] = "playerfloor"; 
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
        wiskerVideo.onended(removeWiskerVideo); 
        haventInteractWiskers = false;
        //Place Transparent Image of Tasks and then like if potion interact xImg.remove(); or if that doesn't work, draw over with transparent img if possible
      }
      if (grid[playerY][playerX+1] === 95){ //Placed some teleporting situations into one if statement of if near a path teleport block (95) to improve performance (possibly).
        if (forestPath === true){
          forestPath = false;
          ninjaVillage = true;
          grid[playerY][playerX] = 3;
          grid = ninjaVillageJSON;
          playerX = 1;
          playerY = 21;
          grid[playerY][playerX] = "player";
        }
        else if (crater === true){
          crater = false;
          forestPath = true;
          grid[playerY][playerX] = 3;
          grid = forestPathJSON;
          playerX = 1; //I believe I had looked at some of Khan Vin's code to figure out updating playerX and Y for JSONS (Updating location).
          playerY = 8;
          grid[playerY][playerX] = "player";
        }
      }
    }
    
    if (key === "a") { //A
      if (grid[playerY][playerX-1] === 3){
        grid[playerY][playerX] = 3; 
        playerX--; 
        grid[playerY][playerX] = "player";
      } 
      else if (grid[playerY][playerX-1] === 4){
        grid[playerY][playerX] = 4; 
        playerX--; 
        grid[playerY][playerX] = "player";
      } 
      else if (grid[playerY][playerX-1] === 23){
        grid[playerY][playerX] = 23; 
        playerX--; 
        grid[playerY][playerX] = "playerfloor"; 
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
          grid[playerY][playerX] = 3;
          grid = forestPath2JSON;
          playerX = 33;
          playerY = 20;
          grid[playerY][playerX] = "player";
        }
        else if (ninjaVillage === true){ //Leaving Ninja Village
          ninjaVillage = false;
          forestPath = true;
          grid[playerY][playerX] = 3;
          grid = forestPathJSON;
          playerX = 33;
          playerY = 20;
          grid[playerY][playerX] = "player";
        }
        else if (forestPath === true){ //Entering Starting Area (Crater)
          crater = true;
          forestPath = false;
          grid[playerY][playerX] = 3;
          grid = craterJSON;
          playerX = 33;
          playerY = 8;
          grid[playerY][playerX] = "player";
        }
      }
    }
    
      if (key === "w") { //W
        if (grid[playerY-1][playerX] === 3){
          grid[playerY][playerX] = 3; 
          playerY--;; 
          grid[playerY][playerX] = "player";
        }
        else if (grid[playerY-1][playerX] === 4){
          grid[playerY][playerX] = 4;
          playerY--;; 
          grid[playerY][playerX] = "player"; 
        }
        else if (grid[playerY-1][playerX] === 23){
          grid[playerY][playerX] = 23; 
          playerY--; 
          grid[playerY][playerX] = "playerfloor"; 
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
        if (grid[playerY+1][playerX] === 3){
          grid[playerY][playerX] = 3; 
          playerY++; 
          grid[playerY][playerX] = "player"; 
        }
        else if (grid[playerY+1][playerX] === 4){
          grid[playerY][playerX] = 4;
          playerY++; 
          grid[playerY][playerX] = "player"; 
        }
        else if (grid[playerY+1][playerX] === 23){
          grid[playerY][playerX] = 23; 
          playerY++;
          grid[playerY][playerX] = "playerfloor"; 
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
        }
        if (grid[playerY+1][playerX] === 95 && bossRoom === true){ //Teleport Detection
          bossRoom = false;
          forestPath2 = true;
          grid[playerY][playerX] = 3;
          grid = forestPath2JSON; //REMEBER TO PUT JSON AT THE END!
          playerX = 27; 
          playerY = 2;
          grid[playerY][playerX] = "player"; 
        }
      }
    }
  }