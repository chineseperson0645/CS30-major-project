function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

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
          grid[yPos][xPos] = 5;
        }
        else if (grid[yPos][xPos] === 5) {
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
