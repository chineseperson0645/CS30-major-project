






let runAnimation;

function setup() {
    createCanvas(windowWidth, windowHeight);

	runAnimation = loadAnimation('Assets/Run.png', { frameSize: [96, 96], frames: 6 });
    runAnimation.frameDelay = 7; 
}

function draw() {
    
	clear();
	animation(runAnimation, 96, 96); 

}