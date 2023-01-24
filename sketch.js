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
  //Player Sprite Sheets
  runRight = loadImage("assets/Run.png");
  idlePos = loadImage("assets/Idle.png");
  jumpPos = loadImage("assets/Jump.png");
  runBack = loadImage("assets/runB.png");
  crouch = loadImage("assets/Disguise.png");
  jumpPosB = loadImage("assets/jumpB.png"); 
  defaultAttack = loadImage("assets/Attack_2.png");
  idleb = loadImage("assets/idle.b.png");
  jumpup = loadImage("assets/Up.png");
  jumpDown = loadImage("assets/Down.png"); 
  jumpupb = loadImage("assets/Upb.png");

  //Enemy Sprite Sheets 
  enemeyIdle = loadImage("assetsE/Idle.png");
  enemyRun = loadImage("assetsE/Run.png"); 
  enemyJump = loadImage("assetsE/Jumpup.png");
  enemyAttack1 = loadImage("assetsE/Attack_2.png");
  enemyFall = loadImage("assetsE/Fall.png");
  enemyRunback = loadImage("assetsE/Runback.png")
  
  //Background Gifs 
  bgImage = loadImage("assets/moutian-pixel.gif");
  bgImage2 = loadImage("assets/city-pixle.gif");




}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // state = "fight"; 
 
  
  playerEx = new Player({
    velocity: {
      x: 0,
      y: 0
    },
    position: {
      x: 0, 
      y: 0
    },

    offset: {
      x: -50,
      y: -30
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
    velocity: {
      x: 0,
      y: 0
    },
    position: {
      x: width - 128, 
      y: 0
    },

    offset: {
      x:-50,
      y: -30
    },
    imageSrc: enemeyIdle,
    framesMax: 9,
    
    animations: {
      idle :{
        imageSrc: enemeyIdle,
        framesMax: 9
      },
      
      run:{
        imageSrc: enemyRunback,
        framesMax: 8
      },
      runback: {
        imageSrc: enemyRun, 
        framesMax: 8
      },

      
      defaultAttack1: {
        imageSrc: enemyAttack1, 
        framesMax: 8
      },
      
      jumpUp: {
        imageSrc: enemyJump, 
        framesMax: 1
      },
      
      fallDown: {
        imageSrc: enemyFall,
        framesMax: 1
      },
    }
  });

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
    
    // if (shinso.velocity.y < 0) {
    //   shinso.switchanimation('Up'); 
    // }
    // else if (shinso.velocity.y > 0) {
    //   shinso.switchanimation('Down'); 
    // }


    // collision detection
  if (rectCol({rectangle1: playerEx, rectangle2: shinso}) && playerEx.isAttacking) {
    playerEx.isAttacking = false; 
    console.log("detection"); 
  }

  if (rectCol({rectangle1: shinso, rectangle2: playerEx}) && shinso.isAttacking) {
    shinso.isAttacking = false;
    console.log("hazaa"); 

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

  case "f": 
    shinso.attack(); 
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


function rectCol({rectangle1,rectangle2}) {
  return (rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height); 
}

function healthBar(health, maxHealth) {
  stroke(0); 
  stokeWeight(4); 
}
