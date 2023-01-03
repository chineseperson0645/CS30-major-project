function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  //Does not go in order nessisarily. 
  //Just if this block is this (i.e 3), then if I mousePress this block will now be 4.
  //Thus, this doesn't mean it iterates through the entire time
  //Rather starts from the block you changed (mousePressed at 3 --> 4, itll start iterating with every mousePress from 4).

    if (mouseButton === LEFT){
        if (grid[yPos][xPos] === 0) {
          grid[yPos][xPos] = 1;
        }
        else if (grid[yPos][xPos] === 1) {
          grid[yPos][xPos] = 2;
        }
        else if (grid[yPos][xPos] === 2) {
          grid[yPos][xPos] = 3;
        }
        else if (grid[yPos][xPos] === 3) {
          grid[yPos][xPos] = 4;
        }
        else if (grid[yPos][xPos] === 4) {
          grid[yPos][xPos] = 93;
          console.log("border");
        }
        else if (grid[yPos][xPos] === 93) {
          grid[yPos][xPos] = 94;
          console.log("teleblock");
        }
        else if (grid[yPos][xPos] === 94) {
          grid[yPos][xPos] = 95;
          console.log("teleblock");
        }
        else if (grid[yPos][xPos] === 95) {
          grid[yPos][xPos] = 0;
        }
      }
      
    if (mouseButton === CENTER){
        grid[yPos][xPos] = 93; //Interchangable to create borders or teleport blocks, just place approriate #
      }
    }
