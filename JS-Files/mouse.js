function mousePressed() {
  if (state === "img"){
    rectMode(CENTER);
    hit = collidePointRect(mouseX, mouseY, 580, 460, 760, 240);
    if (hit){
      console.log("hit");
      hit = false;
    }
  }

//collidePointRect(pointX, pointY, x, y, width, height)

  if (state === "grid"){
    let xPos = Math.floor(mouseX/cellWidth);
    let yPos = Math.floor(mouseY/cellHeight);
  
    //Does not go in order nessisarily. 
    //Just if this block is this (i.e 3), then if I mousePress this block will now be 4.
    //Thus, this doesn't mean it iterates through the entire time
    //Rather starts from the block you changed (mousePressed at 3 --> 4, itll start iterating with every mousePress from 4).
  
      if (mouseButton === LEFT){
        if (grid[yPos][xPos] === 0) {
          grid[yPos][xPos] = 2;
        }
        // else if (grid[yPos][xPos] === 1) {
        //   grid[yPos][xPos] = 2;
        // }
        else if (grid[yPos][xPos] === 2) {
          grid[yPos][xPos] = 3;
        }
        else if (grid[yPos][xPos] === 3) {
          grid[yPos][xPos] = 4;
        }
        else if (grid[yPos][xPos] === 4) {
          grid[yPos][xPos] = 5;
        }
        else if (grid[yPos][xPos] === 5) {
          grid[yPos][xPos] = 6;
        }
        else if (grid[yPos][xPos] === 6) {
          grid[yPos][xPos] = 7;
        }
        else if (grid[yPos][xPos] === 7) {
          grid[yPos][xPos] = 8;
        }
        else if (grid[yPos][xPos] === 8) {
          grid[yPos][xPos] = 9;
        }
        else if (grid[yPos][xPos] === 9) {
          grid[yPos][xPos] = 10;
        }
        else if (grid[yPos][xPos] === 10) {
          grid[yPos][xPos] = 11;
        }
        else if (grid[yPos][xPos] === 11) {
          grid[yPos][xPos] = 12;
        }
        else if (grid[yPos][xPos] === 12) {
          grid[yPos][xPos] = 13;
        }
        else if (grid[yPos][xPos] === 13) {
          grid[yPos][xPos] = 14;
        }
        else if (grid[yPos][xPos] === 14) {
          grid[yPos][xPos] = 15;
        }
        else if (grid[yPos][xPos] === 15) {
          grid[yPos][xPos] = 16;
        }
        else if (grid[yPos][xPos] === 16) {
          grid[yPos][xPos] = 17;
        }
        else if (grid[yPos][xPos] === 17) {
          grid[yPos][xPos] = 18;
        }
        else if (grid[yPos][xPos] === 18) {
          grid[yPos][xPos] = 19;
        }
        else if (grid[yPos][xPos] === 19) {
          grid[yPos][xPos] = 20;
        }
        else if (grid[yPos][xPos] === 20) {
          grid[yPos][xPos] = 21;
        }
        else if (grid[yPos][xPos] === 21) {
          grid[yPos][xPos] = 22;
        }
        else if (grid[yPos][xPos] === 22) {
          grid[yPos][xPos] = 23;
        }
        else if (grid[yPos][xPos] === 23) {
          grid[yPos][xPos] = 24;
        }
        else if (grid[yPos][xPos] === 24) {
          grid[yPos][xPos] = 25;
        }

        else if (grid[yPos][xPos] === 25) {
          grid[yPos][xPos] = 93;
          console.log("border");
        }
        else if (grid[yPos][xPos] === 93) {
          grid[yPos][xPos] = 95;
          console.log("teleblock");
        }
        else if (grid[yPos][xPos] === 95) {
          grid[yPos][xPos] = 96;
        }
        else if (grid[yPos][xPos] === 96) {
          grid[yPos][xPos] = 97;
        }
        else if (grid[yPos][xPos] === 97) {
          grid[yPos][xPos] = 98;
        }
        else if (grid[yPos][xPos] === 98) {
          grid[yPos][xPos] = 99;
        }
        else if (grid[yPos][xPos] === 99) {
          grid[yPos][xPos] = 0;
        }
      }
        
      if (mouseButton === CENTER){
          grid[yPos][xPos] = 96; //Interchangable to create borders or teleport blocks, just place approriate #
        }
      }
  }
