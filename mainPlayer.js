// CS30 Major Project
// Anjana Samarasinghe


class mainPlayer {
  constructor(x , y, Hp, pRadius, playerImg) {
    this.x = x; 
    this.y = y; 
    this.PlayerHp = Hp;
    this.radius = pRadius;
    this.img = playerImg; 
  }
  display() {
   image(this.img, this.x, this.y); 
  }
}

  




