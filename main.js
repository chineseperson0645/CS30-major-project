// CS30 Major Project - Tatakai!
// Michael Gao, Anjana Samarasinghe
// 11/17/2022

//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME
//COMMIT DAILY WHEN THERES CLASS TIME

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
// let playerX = 1;
// let playerY = 8;
let playerX = 17;
let playerY = 16;
// CHANGE PLAYER X AND Y TO CHANGE WHERE PLAYER SPAWS (COULD BE USEFUL FOR TELEPORTATION AND OTHERS IN FUTURE)

let treeImg, zenImg, bottomtreeImg, houseTLImg, houseTMImg, houseTRImg, houseBLImg, houseBMImg, houseBRImg, path1Img, path2Img;
let forestPathJSON, ninjaVillageJSON, betaTestJSON;

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
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = create2dArray(COLS, ROWS);
  grid = forestPathJSON;
  grid[playerY][playerX] = "player"; 
  //Do not do [playerY+#][playerX+#] or whatever #. It messes up movement keys.
}

function draw() {
  background("white");
  displayGrid(grid);
  surroundingCheck();
}

let forestPath = true;
let ninjaVillage = false;
let insideNinjaHouse = false;

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

function createRandom2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      if (random(100) < 50) {
        emptyArray[y].push(1);
      }
      else {
        emptyArray[y].push(3);
      }
    }
  }
  return emptyArray;
}
