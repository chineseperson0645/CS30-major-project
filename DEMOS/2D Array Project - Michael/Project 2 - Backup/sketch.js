// X's and O's
// Michael Gao
// 11/3/22

//Extra for Experts//
//"It's proficiency is in it's simplicity" - Michael Gao
//Set a font
//Experimented/Attempted with "classes" (Before the 11/14/2022 OOP Demos, didn't implemenet though).

/////////////////////////////////////////////////////////////////////

//Global Variables/ Draw Loop/ Setup

/////////////////////////////////////////////////////////////////////

//Grids GV//
let gridArray = [];
const ROLLS = 3;
const COLM = 3;
let grids;
let widthofCell;
let heightofCell;

//Functionality GV//
let oTurn = false;
let xWins = false;
let oWins = false;
let tied = false;
let hit = false;
let state = "start";

//X and O Images//
let OImg;
let XImg;

//Image Preloader//
function preload() {
  OImg = loadImage('O.png');
  XImg = loadImage('X.png');
}

function setup() {
  createCanvas(800, 700);
  widthofCell = width/COLM; //Overall Width divided by COLM value (# of COLM)
  heightofCell = height/ROLLS; //Overall Height divided by ROLLS vlaue (# of ROLLS)
  grids = different2DArray(COLM, ROLLS);
}

function draw() {
  background(220);
  displaygrids(grids);
  screens();
  winDetect();
}

/////////////////////////////////////////////////////////////////////

//Screens

/////////////////////////////////////////////////////////////////////

function screens(){
  //Switches between states (screens)
  if (state === "start"){
    formatText();
    text("Start!", width/2, height/2);
    hitBox();
  }
  if (state === "tied"){
    formatText();
    text("Tied! Again?", width/2, height/2);
  }

  if (state === "oWin"){
    formatText();
    text("O Wins! Again?", width/2, height/2);
  }

  if (state === "xWin"){
    formatText();
    text("X Wins! Again?", width/2, height/2);
  }
  if (state === "xWin" || state === "oWin" || state === "tied"){
    resetter();
    hitBox();
  }
}

function resetter(){
  //fills all blocks with blank space (0) and puts X turn first.
  for (let y=0; y<ROLLS; y++) {
    for (let x=0; x<COLM; x++) {
      gridArray[y][x] = 0;
      oTurn = false;
    }
  }
}

function hitBox(){
let a = 60;

  if (mouseIsPressed){
    hit = collidePointRect(mouseX, mouseY, width/2 - a, height/2 - a, a*2, a);
  }

  if (hit) {
    //Acts as screen switcher and additional reseter
    state = "main";
    oWins = false;
    xWins = false;
    tied = false;
  }
}

function formatText(){
  rect(0, 0, width, height);
  fill("blue");
  textAlign(CENTER);
  textSize(50);
  textFont("impact"); 
}

/////////////////////////////////////////////////////////////////////

//Main Functions

/////////////////////////////////////////////////////////////////////

function mousePressed() {
if (state === "main"){
  let xPos = Math.floor(mouseX/widthofCell);
  let yPos = Math.floor(mouseY/heightofCell);

  //X (X = 1)
  if (grids[yPos][xPos] === 0 && oTurn === false) { //Swtiches turns
    grids[yPos][xPos] = 1;
    oTurn = true;
  }

  //O (O = 2)
  if (grids[yPos][xPos] === 0 && oTurn === true) { //Swtiches turns
    grids[yPos][xPos] = 2;
    oTurn = false;
    }
  }
}

function displaygrids(grids) {
  for (let y=0; y<ROLLS; y++) {
    for (let x=0; x<COLM; x++) {

      //Blank
      if (grids[y][x] === 0) {
        fill("white");
        rect(x*widthofCell, y*heightofCell, widthofCell, heightofCell);
      }

      //X
      else if (grids[y][x] === 1) {
        //Eason helped me here.
        fill("white");
        rect(x*widthofCell, y*heightofCell, widthofCell, heightofCell); 
        image(XImg, x*widthofCell, y*heightofCell, widthofCell, heightofCell); 
      }

      //O
      else if (grids[y][x] === 2){
        //Eason helped me here.
        fill("white");
        rect(x*widthofCell, y*heightofCell, widthofCell, heightofCell);
        image(OImg, x*widthofCell, y*heightofCell, widthofCell, heightofCell);
      }
    }
  }
}

function winDetect(){
  //Karar helped me figure out logic for this section.
  if (state === "main") {

//Checks for X win by searching for input 1 in all win combos
    if (grids[0][0] === 1 && grids[1][0] === 1 && grids[2][0] === 1 || //Down (Left)
        grids[0][0] === 1 && grids[0][1] === 1 && grids[0][2] === 1 || //Across (Top)
        grids[0][2] === 1 && grids[1][2] === 1 && grids[2][2] === 1 || //Down (Right)
        grids[2][2] === 1 && grids[2][1] === 1 && grids[2][0] === 1 || //Across (Bottom)
        grids[1][0] === 1 && grids[1][1] === 1 && grids[1][2] === 1 || //Across (Middle)
        grids[0][1] === 1 && grids[1][1] === 1 && grids[2][1] === 1 || //Down (Middle)
        grids[0][0] === 1 && grids[1][1] === 1 && grids[2][2] === 1 || //Top Left --> Bottom Right
        grids[0][2] === 1 && grids[1][1] === 1 && grids[2][0] === 1 ){ //Top Right --> Bottom Left
      
      xWins = true;
      state = "xWin";
      console.log("X Wins");
  }

//Checks for O win by searching for input 2 in all win combos
    if (grids[0][0] === 2 && grids[1][0] === 2 && grids[2][0] === 2 || //Down (Left)
        grids[0][0] === 2 && grids[0][1] === 2 && grids[0][2] === 2 || //Across (Top)
        grids[0][2] === 2 && grids[1][2] === 2 && grids[2][2] === 2 || //Down (Right)
        grids[2][2] === 2 && grids[2][1] === 2 && grids[2][0] === 2 || //Across (Bottom)
        grids[1][0] === 2 && grids[1][1] === 2 && grids[1][2] === 2 || //Across (Middle)
        grids[0][1] === 2 && grids[1][1] === 2 && grids[2][1] === 2 || //Down (Middle)
        grids[0][0] === 2 && grids[1][1] === 2 && grids[2][2] === 2 || //Top Left --> Bottom Right
        grids[0][2] === 2 && grids[1][1] === 2 && grids[2][0] === 2 ){ //Top Right --> Bottom Left
      
      oWins = true;
      state = "oWin";
      console.log("O Wins"); //helps debug
  }

//Checks for tie by checking if box is not filled with a blank space (0).
    if (grids[0][0] !== 0  && grids[0][1] !== 0 && grids[0][2] !== 0 && //Across (Top)
        grids[2][2] !== 0  && grids[2][1] !== 0 && grids[2][0] !== 0 && //Across (Bottom)
        grids[1][0] !== 0  && grids[1][1] !== 0 && grids[1][2] !== 0 ){  //Across (Middle)

      tied = true;

      if (xWins === false && oWins === false && tied === true){ //To ensure win is called first
        state = "tied";
        console.log("tie."); //helps debug
      }
    }
  }
}

//Please see bottom notes/doodles for comments on different2DArray
function different2DArray(COLM, ROLLS) {
  for (let y = 0; y < ROLLS; y++) {
    gridArray.push(Array());
    for (let x = 0; x < COLM; x++) {
      gridArray[y].push(0);
    }
  }
  return gridArray;
}

//////////////////////////////////////////////////////////////////////

//Notes/Doodles/Credits

/////////////////////////////////////////////////////////////////////


//Eason helped me get transparent BG on my img working properly.
//Karar helped me figure out logic for winDetect.

// class cell1 {
//   constructor (xOccupied, yOccupied);
  
//   cell1XOccupied: "no",
//   cell1OOccupied: "no",
//   cell2XOccupied: "no",
//   cell2OOccupied: "no",
//   cell3XOccupied: "no",
//   cell3OOccupied: "no",
//   cell4XOccupied: "no",
//   cell4OOccupied: "no",
//   cell5XOccupied: "no",
//   cell5OOccupied: "no",
//   cell6XOccupied: "no",
//   cell6OOccupied: "no",
//   cell7XOccupied: "no",
//   cell7OOccupied: "no",
//   cell8XOccupied: "no",
//   cell8OOccupied: "no",
//   cell9XOccupied: "no",
//   cell9OOccupied: "no"
// }

// const cell1 = {
//   XOccupied: "no",
//   OOccupied: "no",
// }
// const cell2 = {
//   cell2XOccupied: "no",
//   cell2OOccupied: "no"
// }
// const cell3 = {
//   cell3XOccupied: "no",
//   cell3OOccupied: "no"
// }
// const cell4 = {
//   cell4XOccupied: "no",
//   cell4OOccupied: "no"
// }
// const cell5 = {
//   cell5XOccupied: "no",
//   cell5OOccupied: "no"
// }
// const cell6 = {
//   cell6XOccupied: "no",
//   cell6OOccupied: "no"
// }
// const cell7 = {
//   cell7XOccupied: "no",
//   cell7OOccupied: "no"
// }

// const cell8 = {
//   cell8XOccupied: "no",
//   cell8OOccupied: "no"
// }
// const cell9 = {
//   cell9XOccupied: "no",
//   cell9OOccupied: "no"
// }


// if (grids[yPos][xPos] === 1){
//   cell1XOccupied = "yes";
//     if (cell1XOccupied === "yes"){
//       console.log("X.");

//     }
//   }
//   if (grids[yPos][xPos] === 1 && grids[yPos][xPos+1] === 1 && grids[yPos][xPos+2] === 1){
//     console.log("X Wins!");
//   }
// }

// if (grids[yPos][xPos] === 2){
//   cell1OOccupied = "yes";
//     if (cell1OOccupied === "yes"){
//       console.log("O.");

//     }
//   }
// if (grids[yPos][xPos] === 2 && grids[yPos][xPos+1] === 2 && grids[yPos][xPos+2] === 2){
//   console.log("O Wins!");
// }
// }

// function cellsChecker() {
//   let cells = {
//     cell1XOccupied: "no",
//     cell1OOccupied: "no",

//     cell2XOccupied: "no",
//     cell2OOccupied: "no",

//     cell3XOccupied: "no",
//     cell3OOccupied: "no",

//     cell4XOccupied: "no",
//     cell4OOccupied: "no",

//     cell5XOccupied: "no",
//     cell5OOccupied: "no",

//     cell6XOccupied: "no",
//     cell6OOccupied: "no",

//     cell7XOccupied: "no",
//     cell7OOccupied: "no",

//     cell8XOccupied: "no",
//     cell8OOccupied: "no",

//     cell9XOccupied: "no",
//     cell9OOccupied: "no"
//   };
//   grids.push(cells);
// }

// if (grids[0][0] === 1 && grids[0][1] === 1 && grids[0][2] === 1){
//   xWins = true;
//   if (xWins === true){
//     console.log("X Wins");
//   }
// }
// if (grids[0][0] === 2 && grids[0][1] === 2 && grids[0][2] === 2){
//   oWins = true;
//     if (oWins === true){
//       console.log("O Wins");
//     }
// }

// function whoWon() {
//   for (let y=0; y<ROLLS; y++) {
//     for (let x=0; x<COLM; x++) {
//       if (grids[y][x] === 1){
//         console.log("X won!")
//       }
//         if (grids[y][x] === 2){
//         console.log("O won!")
//       }
//     }
//   }
// }

// grids[0][0] === 1 && grids[0][1] === 1 && grids[0][2] === 1 && //Across (Top)
// grids[2][2] === 1 && grids[2][1] === 1 && grids[2][0] === 1 && //Across (Bottom)
// grids[1][0] === 1 && grids[1][1] === 1 && grids[1][2] === 1 ){ //Across (Middle)

// function different2DArray(COLM, ROLLS) {
//   for (let y = 0; y < ROLLS; y++) {
//     gridArray.push(Array());
//     //Creates another array within the Array
//     //(by filling it with empty space)

//     for (let x = 0; x < COLM; x++) {
//       gridArray[y].push(0);
//     //Within the empty array (within an array)
//     //it pushes 0 values, mousePressed and displaygrids
//     //Function off of these zero values by checking and 
//     //Adding off of them according to their instructions
//     }
//   }
//   return gridArray;
//   //Pushes gridArray as the grids, check above within setup function
//   //for "grids = different2DArray(COLM, ROLLS);"
// }

  // function startScreen(){
  //   if (state === "start"){
  //     rect(0, 0, width, height);
  //     fill("blue");
  //     textSize(50);
  //     text("Start!", width/2-35, height/2);
  //     hitBox();
  //     }
  //   }
  
  // function xWinScreen(){
  //   if (state === "xWin"){
  //     rect(0, 0, width, height);
  //     fill("blue");
  //     textSize(50);
  //     text("X Wins! Again?", width/2-35, height/2);
  //     hitBox();
  //     resetter();
  //     }
  //   }
  
  // function oWinScreen(){
  //   if (state === "oWin"){
  //     rect(0, 0, width, height);
  //     fill("blue");
  //     textSize(50);
  //     text("O Wins! Again?", width/2-35, height/2);
  //     hitBox();
  //     resetter();
  //     }
  //   }
  
  // function tieScreen(){
  //   if (state === "tied"){
  //     rect(0, 0, width, height);
  //     fill("blue");
  //     textSize(50);
  //     text("Tied! Again?", width/2-35, height/2);
  //     hitBox();
  //     resetter();
  //   }
  // }