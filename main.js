// CS30 Major Project - Tatakai!
// Michael Gao, Anjana Samarasinghe
// 11/17/2022

//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME

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

const ROWS = 25; //y axis (in reality)
const COLS = 35; //x axis (in reality)
let grid;
let cellWidth;
let cellHeight;
// p5.disableFriendlyErrors = true; //for performance, activate at launch

// CHANGE PLAYER X AND Y TO CHANGE WHERE PLAYER SPAWS (COULD BE USEFUL FOR TELEPORTATION AND OTHERS IN FUTURE)
let playerX = 2;
let playerY = 8;
let globalPlayerHealth;

let forestPath = true;
let ninjaVillage = false;
let insideNinjaHouse = false;

let treeImg, zenImg, bottomtreeImg, houseTLImg, houseTMImg, houseTRImg, houseBLImg, houseBMImg, houseBRImg, path1Img, path2Img, fenceAMImg, fenceAM2Img, fenceDLImg, fenceDRImg, fenceBRImg, fenceBLImg,
fenceTLImg, fenceTRImg, floorImg, wallImg, blackImg, openDoorImg;
let forestPathJSON, ninjaVillageJSON, betaTestJSON;
let startVideo, transitionImg, startVideo2;

function preload() {
  treeImg = loadImage('assets(world)/bush.png');
  bottomtreeImg = loadImage('assets(world)/bottomtree.png');

  zenImg = loadImage('assets(world)/zen.gif');
  ninjaImg = loadImage('assets(world)/ninja.gif');
  potionImg = loadImage('assets(world)/potion.gif');

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

  betaTestJSON = loadJSON('JSON-Maps(world)/beta.json');
  forestPathJSON = loadJSON('JSON-Maps(world)/forestpath.json');
  ninjaVillageJSON = loadJSON('JSON-Maps(world)/ninja.json');
  houseJSON = loadJSON('JSON-Maps(world)/house.json');

  transitionImg = loadImage('assets(world)/SET(IMG).png');
}

let state = "image";
let hit;

function imgHolder(){ //put back into startScreen once done later
  // startVideo.remove();
  image(transitionImg, 0, 0, width, height);
  console.log("asdaasdasd");
}

function startScreen(){
  function startVideoLoad() {
    startVideo.size(1920, 1080);
    startVideo.noLoop();
    startVideo.volume();
    startVideo.duration();
    startVideo.autoplay(false);
    console.log(startVideo.duration());
  }


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

  if (state === "start1"){ //Loads the starting sequence. keyPressed calls it.
    startVideo = createVideo(['assets(world)/SET.mp4'], startVideoLoad); 
    startVideo.onended(imgHolder); //onended calls a callback function at the end of the duration of the media.
  }
}

function setup() {
  createCanvas(1920, 1080);
  startScreen();
  if (state === "image"){
    imgHolder();
  }
  if (state === "grid"){
    createCanvas(1920, 1076); //Optimized for 1920x1080 screens.
    globalPlayerHealth = random(59, 92);
    cellWidth = width/COLS;
    cellHeight = height/ROWS;
    grid = create2dArray(COLS, ROWS);
    grid = forestPathJSON;
    grid[playerY][playerX] = "player"; 
    //Do not do [playerY+#][playerX+#] or whatever #. It messes up movement keys.
  }
}

function draw() {

  // rectMode(CENTER);
  // fill(255, 255, 0);
  // rect(200, 200, 100, 150);
  // hit = collidePointRect(mouseX, mouseY, 200, 200, 100, 150);
  // if (hit){
  //   console.log("hit");
  // }
  if (state === "grid"){
    displayGrid(grid);
  }
}

//add additional lines seperated with a comma to add sound, i.e ['assets(world)/SET.mp4, assets(world)/startmusic.wav']

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 1) {
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 2) {
        image(bottomtreeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 3) {
        image(path1Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 4) {
        image(path2Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 5){
        image(houseTLImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 6){
        image(houseTMImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 7){
        image(houseTRImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 8){
        image(houseBLImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 9){ //Ninja Village DOOR
        image(houseBMImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 10){
        image(houseBRImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 11){
        image(fenceTLImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 12){
        image(fenceAMImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 13){
        image(fenceAM2Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 14){
        image(fenceTRImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 15){
        image(fenceDRImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 16){
        image(fenceBRImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 17){
        image(fenceAMImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 18){
        image(fenceAM2Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 19){
        image(fenceBLImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 20){
        image(fenceDLImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 21){
        image(fenceDLImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 22){
        image(blackImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 23){
        image(floorImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 24){
        image(wallImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 25){
        image(openDoorImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }



      
      if (grid[y][x] === "player") {
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === "playerpath1") {
        image(path1Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === "playerpath2") {
        image(path2Img, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === "playerfloor") {
        image(floorImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        image(zenImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 93) { //BORDER!
        image(treeImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 95) { //Teleport!
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
    }
  }
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(22);
    }
  }
  return emptyArray;
}

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