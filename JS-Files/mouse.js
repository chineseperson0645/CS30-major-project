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
      }
      
    if (mouseButton === CENTER){
        grid[yPos][xPos] = 0;
      }
    }
