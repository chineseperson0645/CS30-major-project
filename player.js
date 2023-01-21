class Player {
    constructor({position, velocity, images}) {
        this.velocity = velocity; 
        this.position = position;
        this.images = images;
        this.aniLoad;
    }


    display() {
        fill("red");
        this.aniLaod = loadAnimation(this.images.img1, { frameSize: [96, 96], frames: 6 });
        rect(this.images.img1,this.position.x, this.position.y, 100, 100);
    }
}