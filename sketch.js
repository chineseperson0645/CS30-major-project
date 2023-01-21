

let player = new Player ({
	position: {
		x: 0,
		y:0
	},
	velocity: {
		x: 0, 
		y:0 
	},
	images : {
		img1: 'Assets/Run.png',
		img2: 'Assets/runB.png',
		img3: 'Assets/idle.png'
	}
}); 

let runAnimation;

function setup() {
    createCanvas(windowWidth, windowHeight);

	runAnimation = loadAnimation('Assets/Run.png', { frameSize: [96, 96], frames: 6 });
    runAnimation.frameDelay = 7; 
}

function draw() {
	clear();
	animation(runAnimation, 96, 96);
	// player.display(); 
	

}