// CS30 Major Project
// Anjana Samarasinghe
const gravity = 0.7;

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  w: {
    pressed: false
  }
};

let playerEx; 
let runRight;
let runBack; 
let idlePos;
let jumpPos;
let jumpPosB;  
let crouch; 
let bgImage;
let bgImage2;
let state;
let lastKeys;
let defaultAttack; 
let aniState; 
let idleb;
let attackstate;
let shinso;
let followDistance;

function preload() {
  runRight = loadImage("assets/Run.png");
  idlePos = loadImage("assets/Idle.png");
  jumpPos = loadImage("assets/Jump.png");
  runBack = loadImage("assets/runB.png");
  crouch = loadImage("assets/Disguise.png");
  jumpPosB = loadImage("assets/jumpB.png"); 
  bgImage = loadImage("assets/moutian-pixel.gif");
  bgImage2 = loadImage("assets/city-pixle.gif");
  defaultAttack = loadImage("assets/Attack_2.png");
  idleb = loadImage("assets/idle.b.png");
  jumpup = loadImage("assets/Up.png");
  jumpDown = loadImage("assets/Down.png"); 
  jumpupb = loadImage("assets/Upb.png"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "fight"; 
 
  
  playerEx = new Player({
    velocity: {
      x: 0,
      y: 0
    },
    postion: {
      x: 0, 
      y: 0
    },

    offset: {
      x:-50,
      y:30
    },
    imageSrc: idlePos,
    framesMax: 5,
    
    sprites: {
      idle :{
        imageSrc: idlePos,
        framesMax: 5
      },
      
      run:{
        imageSrc: runRight,
        framesMax: 6
      },
      runback: {
        imageSrc: runBack, 
        framesMax: 6
      },

      
      defaultAttack1: {
        imageSrc: defaultAttack, 
        framesMax: 3
      },
      
      jumpUp: {
        imageSrc: jumpup, 
        framesMax: 1
      },
      
      fallDown: {
        imageSrc: jumpDown,
        framesMax: 1
      },

     
      

    }
  });

  shinso = new Enemy({
    position: {
      x: 500,
      y: 0
    }, 
    
    velocity: {
      x:0, 
      y:0
    }, 

    offset: {
      x: 150,
      y: 150
    }
  })

}

function draw() {
  if (state === "fight") {
    background(220);
    image(bgImage, 0, 0, width, height);
    //Class Class
    playerEx.update(); 
    playerEx.display();
    shinso.update(); 
    shinso.display();
    
  

    if (keys.a.pressed === true && lastKeys === "a") {
      playerEx.velocity.x = -5;
      playerEx.switchSprite('runback'); 
    
    }
    else if (keys.d.pressed === true && lastKeys === "d"){
      playerEx.velocity.x = 5;
      playerEx.switchSprite('run'); 
    }
    else {
      
        playerEx.switchSprite('idle'); 

      
    }
    


    //Jump animation trigger
    if (playerEx.velocity.y < 0) {
      playerEx.switchSprite('Up'); 
    }

    else if (playerEx.velocity.y > 0) {
      playerEx.switchSprite('Down'); 
    }


  }
}
  
//Movement
  
window.addEventListener('keydown', (event) => {

  switch (event.key) {
  case 'd':
    keys.d.pressed = true;
    lastKeys = "d";
    break;
    
  case 'a':
    keys.a.pressed = true;
    lastKeys = "a"; 
    break;
    
  case 'w':
    playerEx.velocity.y = -20; 
    break;

  case "e":
    playerEx.attack();
    break;
  }
});

window.addEventListener('keyup', (event) => {
  
  switch (event.key) {
  case 'd':
    playerEx.velocity.x = 0; 
    keys.d.pressed = false;
    break ;
      
  case 'a':
    keys.a.pressed = false;
    playerEx.velocity.x = 0; 
    break;
    
  case 'w':
    keys.w.pressed = false; 
    break;
  }
});

function getDistance(x1,y1,x2,y2) {
   xdiff = x1-x2;
   ydiff = y1-y2; 

   return Math.sqrt(xdiff * xdiff + ydiff * ydiff); 
}



