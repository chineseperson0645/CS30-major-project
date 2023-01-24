// CS30 Major Project
// Anjana Samarasinghe
const gravity = 0.7;

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  w: {
    pressed: false
  }
};

let playerEx; 
let runRight;
let runBack; 
let idlePos;
let jumpPos;
let jumpPosB;  
let crouch; 
let bgImage;
let bgImage2;
let state;
let lastKeys;
let defaultAttack; 
let aniState; 
let idleb;
let attackstate;
let shinso;
let followDistance;


//Michaels Code 

let ROWS = 25; //y axis (in reality)
let COLS = 35; //x axis (in reality)
let grid;
let cellWidth;
let cellHeight;
// p5.disableFriendlyErrors = true; //for performance, activate at launch

// CHANGE PLAYER X AND Y TO CHANGE WHERE PLAYER SPAWS (COULD BE USEFUL FOR TELEPORTATION AND OTHERS IN FUTURE)
let playerX = 16;
let playerY = 14;
let globalPlayerHealth;

let forestPath = false;
let ninjaVillage = false;
let insideNinjaHouse = false;
let boss = false;
let crater = false;
let forestPath2 = false;

let treeImg, zenImg, bottomtreeImg, houseTLImg, houseTMImg, houseTRImg, houseBLImg, houseBMImg, houseBRImg, path1Img, path2Img, fenceAMImg, fenceAM2Img, fenceDLImg, fenceDRImg, fenceBRImg, fenceBLImg,
fenceTLImg, fenceTRImg, floorImg, wallImg, blackImg, openDoorImg, fridgeImg, boss1Img, boss2Img, lastImg;

let forestPathJSON, ninjaVillageJSON, betaTestJSON, craterJSON, forestPath2JSON, bossJSON;

function preload() {
  //Player Sprite Sheets
  runRight = loadImage("assets/Run.png");
  idlePos = loadImage("assets/Idle.png");
  jumpPos = loadImage("assets/Jump.png");
  runBack = loadImage("assets/runB.png");
  crouch = loadImage("assets/Disguise.png");
  jumpPosB = loadImage("assets/jumpB.png"); 
  defaultAttack = loadImage("assets/Attack_2.png");
  idleb = loadImage("assets/idle.b.png");
  jumpup = loadImage("assets/Up.png");
  jumpDown = loadImage("assets/Down.png"); 
  jumpupb = loadImage("assets/Upb.png");

  //Enemy Sprite Sheets 
  enemeyIdle = loadImage("assetsE/Idle.png");
  enemyRun = loadImage("assetsE/Run.png"); 
  enemyJump = loadImage("assetsE/Jumpup.png");
  enemyAttack1 = loadImage("assetsE/Attack_2.png");
  enemyFall = loadImage("assetsE/Fall.png");
  enemyRunback = loadImage("assetsE/Runback.png")
  
  //Background Gifs 
  bgImage = loadImage("assets/moutian-pixel.gif");
  bgImage2 = loadImage("assets/city-pixle.gif");
 
  //Images for Grid
  treeImg = loadImage('assets(world)/bush.png');
  bottomtreeImg = loadImage('assets(world)/bottomtree.png');

  zenImg = loadImage('assets(world)/zen.gif');
  ninjaImg = loadImage('assets(world)/ninja.gif');
  potionImg = loadImage('assets(world)/potion.gif');
  teacherImg = loadImage('assets(world)/Sensei.gif');
  whiteImg = loadImage('assets(world)/white.png');

  boss1Img = loadImage('assets(world)/boss1.png');
  boss2Img = loadImage('assets(world)/boss2.png');

  houseTLImg = loadImage('assets(world)/houseTL.png');
  houseTMImg = loadImage('assets(world)/houseTM.png');
  houseTRImg = loadImage('assets(world)/houseTR2.png');
  houseBLImg = loadImage('assets(world)/houseBL.png');
  houseBMImg = loadImage('assets(world)/houseBM.png');
  houseBRImg = loadImage('assets(world)/houseBR2.png'); 

  path1Img = loadImage('assets(world)/path1.png');
  path2Img = loadImage('assets(world)/path2.png');

  fenceAMImg = loadImage('assets(world)/fenceAM.png');
  fenceAM2Img = loadImage('assets(world)/fenceAM2.png');
  fenceDLImg = loadImage('assets(world)/fenceDL.png');
  fenceDRImg = loadImage('assets(world)/fenceDR.png');
  fenceBRImg = loadImage('assets(world)/fenceBL.png');
  fenceBLImg = loadImage('assets(world)/fenceBR.png');
  fenceTLImg = loadImage('assets(world)/fenceTL.png');
  fenceTRImg = loadImage('assets(world)/fenceTR.png');

  floorImg = loadImage('assets(world)/floor.png');
  wallImg = loadImage('assets(world)/wall.png');
  blackImg = loadImage('assets(world)/black.png');
  openDoorImg = loadImage('assets(world)/opendoor.png');
  fireImg = loadImage('assets(world)/fire.gif');

  fridgeImg = loadImage('assets(world)/fridge.png');
  transitionImg = loadImage('assets(world)/SET(IMG).png');
  lastImg = loadImage("assets(world)/ajface.png")


  //JSON's for Grid
  betaTestJSON = loadJSON('JSON-Maps(world)/beta.json');
  forestPathJSON = loadJSON('JSON-Maps(world)/forestpath.json');
  forestPath2JSON = loadJSON('JSON-Maps(world)/forestpath2.json');
  ninjaVillageJSON = loadJSON('JSON-Maps(world)/ninja.json');
  houseJSON = loadJSON('JSON-Maps(world)/house.json');
  bossJSON = loadJSON('JSON-Maps(world)/boss.json');
  craterJSON = loadJSON('JSON-Maps(world)/crater.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "grid"; 

  if (state === "grid"){
    gameGrid();
  } 

  globalPlayerHealth = random(59, 92);
  createCanvas(1920, 1076);
  if (state === "start1"){
    startScreen();
  }
 
  playerEx = new Player({
    velocity: {
      x: 0,
      y: 0
    },
    position: {
      x: 0, 
      y: 0
    },

    offset: {
      x: -50,
      y: -30
    },
    imageSrc: idlePos,
    framesMax: 5,
    
    sprites: {
      idle :{
        imageSrc: idlePos,
        framesMax: 5
      },
      
      run:{
        imageSrc: runRight,
        framesMax: 6
      },
      runback: {
        imageSrc: runBack, 
        framesMax: 6
      },

      
      defaultAttack1: {
        imageSrc: defaultAttack, 
        framesMax: 3
      },
      
      jumpUp: {
        imageSrc: jumpup, 
        framesMax: 1
      },
      
      fallDown: {
        imageSrc: jumpDown,
        framesMax: 1
      },

     
      

    }
  });


  
  shinso = new Enemy({
    velocity: {
      x: 0,
      y: 0
    },
    position: {
      x: width - 128, 
      y: 0
    },

    offset: {
      x:-50,
      y: -30
    },
    imageSrc: enemeyIdle,
    framesMax: 9,
    
    animations: {
      idle :{
        imageSrc: enemeyIdle,
        framesMax: 9
      },
      
      run:{
        imageSrc: enemyRunback,
        framesMax: 8
      },
      runback: {
        imageSrc: enemyRun, 
        framesMax: 8
      },

      
      defaultAttack1: {
        imageSrc: enemyAttack1, 
        framesMax: 8
      },
      
      jumpUp: {
        imageSrc: enemyJump, 
        framesMax: 1
      },
      
      fallDown: {
        imageSrc: enemyFall,
        framesMax: 1
      },
    }
  });

}

function draw() {

  if (state === "grid"){
    displayGrid(grid);
  }

  if (state === "fight") {
    background(220);
    image(bgImage, 0, 0, width, height);
    console.log("Aj reached");
    
    
    //Class Class
    playerEx.update(); 
    playerEx.display();

    shinso.update(); 
    shinso.display();
    
  

    if (keys.a.pressed === true && lastKeys === "a") {
      playerEx.velocity.x = -5;
      playerEx.switchSprite('runback'); 
    
    }
    else if (keys.d.pressed === true && lastKeys === "d"){
      playerEx.velocity.x = 5;
      playerEx.switchSprite('run'); 
    }
    else {
      
        playerEx.switchSprite('idle'); 

      
    }
    
    //Jump animation trigger
    if (playerEx.velocity.y < 0) {
      playerEx.switchSprite('Up'); 
    }

    else if (playerEx.velocity.y > 0) {
      playerEx.switchSprite('Down'); 
    }
    
    // if (shinso.velocity.y < 0) {
    //   shinso.switchanimation('Up'); 
    // }
    // else if (shinso.velocity.y > 0) {
    //   shinso.switchanimation('Down'); 
    // }


    // collision detection
  if (rectCol({rectangle1: playerEx, rectangle2: shinso}) && playerEx.isAttacking) {
    playerEx.isAttacking = false; 
    console.log("detection"); 
  }

  if (rectCol({rectangle1: shinso, rectangle2: playerEx}) && shinso.isAttacking) {
    shinso.isAttacking = false;
    console.log("hazaa"); 

    }
  }
}
  
//Movement
  
window.addEventListener('keydown', (event) => {

  switch (event.key) {
  case 'd':
    keys.d.pressed = true;
    lastKeys = "d";
    break;
    
  case 'a':
    keys.a.pressed = true;
    lastKeys = "a"; 
    break;
    
  case 'w':
    playerEx.velocity.y = -20; 
    break;

  case "e":
    playerEx.attack();
    break;

  case "f": 
    shinso.attack(); 
    break; 
  }
});

window.addEventListener('keyup', (event) => {
  
  switch (event.key) {
  case 'd':
    playerEx.velocity.x = 0; 
    keys.d.pressed = false;
    break ;
      
  case 'a':
    keys.a.pressed = false;
    playerEx.velocity.x = 0; 
    break;
    
  case 'w':
    keys.w.pressed = false; 
    break;
  }
});

function getDistance(x1,y1,x2,y2) {
   xdiff = x1-x2;
   ydiff = y1-y2; 

   return Math.sqrt(xdiff * xdiff + ydiff * ydiff); 
}


function rectCol({rectangle1,rectangle2}) {
  return (rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height); 
}

function healthBar(health, maxHealth) {
  stroke(0); 
  stokeWeight(4); 
}


//Display's Grid
function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) { //Tree Top Image
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 1) { //Tree Top Image 
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 2) { //Tree Bottom Image
        image(bottomtreeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 3) { //First Path Type Image
        image(path1Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 4) { //Second Path Type Image
        image(path2Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 5){ //House (follow abreviation)
        image(houseTLImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 6){ //House (follow abreviation)
        image(houseTMImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 7){ //House (follow abreviation)
        image(houseTRImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 8){ //House (follow abreviation)
        image(houseBLImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 9){ //House (follow abreviation)
        image(houseBMImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 10){ //House (follow abreviation) 
        image(houseBRImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 11){ //Fence (follow abreviation)
        image(fenceTLImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 12){ //Fence (follow abreviation)
        image(fenceAMImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 13){ //Fence (follow abreviation)
        image(fenceAM2Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 14){ //Fence (follow abreviation)
        image(fenceTRImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 15){ //Fence (follow abreviation)
        image(fenceDRImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 16){ //Fence (follow abreviation)
        image(fenceBRImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 17){ //Fence (follow abreviation)
        image(fenceAMImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 18){ //Fence (follow abreviation)
        image(fenceAM2Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 19){ //Fence (follow abreviation)
        image(fenceBLImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 20){ //Fence (follow abreviation)
        image(fenceDLImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 21){ //Fence (follow abreviation)
        image(fenceDLImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 22){ //Black Image
        image(blackImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 23){ //Floor
        image(floorImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 24){ //Wall
        image(wallImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 25){ //Open Door
        image(openDoorImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 70) { //Boss 1
        image(path1Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(boss1Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 71) { //Boss 2
        image(path1Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(boss2Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === "player") { //Player
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === "playerpath1") { //Player on Path1
        image(path1Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === "playerpath2") { //Player on Path2
        image(path2Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === "playerfloor") { //Player on Floor
        image(floorImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 93) { //BORDER Block!
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 95) { //Teleport Block!
        image(path1Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 96) { //Ninja
        image(path1Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(ninjaImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 97) { //POTION
        image(floorImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(potionImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 98) { //Fire
        image(fireImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 99) { //Sensei
        image(whiteImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(teacherImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 100) { //White
        image(whiteImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 101) { //Fridge
        image(fridgeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

//Creates 2D Array - Based off Demo.
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