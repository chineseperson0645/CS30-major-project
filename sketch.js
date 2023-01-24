// CS30 Major Project
// Anjana Samarasinghe & Micheal Gao

//Gravity Affect the y velocity of all entities
const gravity = 0.7;

//Becomes true when key is the specified key is pressed
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

//Variales
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
let globalPlayerHealth;
let maxHp;
let enemyHealth; 
let attackInterval = 1000; 
let lastAttackTime = 0;

//Loads images before game starts
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
  playerHit = loadImage("assets/Hurt.png");
  playerDeath = loadImage("assets/Dead.png");

  //Enemy Sprite Sheets 
  enemeyIdle = loadImage("assetsE/Idle.png");
  enemyRun = loadImage("assetsE/Run.png"); 
  enemyJump = loadImage("assetsE/Jumpup.png");
  enemyAttack1 = loadImage("assetsE/Attack_2.png");
  enemyFall = loadImage("assetsE/Fall.png");
  enemyRunback = loadImage("assetsE/Runback.png"); 
  enemyDeath = loadImage("assetsE/Dead.png");
  enemeyHit =  loadImage("assetsE/Hurt.png");
  
  //Background Gifs 
  bgImage = loadImage("assets/moutian-pixel.gif");
  bgImage2 = loadImage("assets/city-pixle.gif");




}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //controls what point we are in the game and activates all main code
  state = "fight"; 
  
  //Player Health
  globalPlayerHealth = 100; 
  
  //Max ammount the player health can go to
  maxHP = 100;
  
  //Max ammount the enemy health can go to
  enemyHealth = 200; 
  
  //Making the an player using a class
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

      hit: {
        imageSrc: playerHit, 
        framesMax: 2
      },

      death: {
        imageSrc: playerDeath, 
        framesMax: 4
      },
      

    }
  });


  //Making the an enemy using a class
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

      death: {
        imageSrc: enemyDeath, 
        framesMax: 5
      },

      hit: {
        imageSrc: enemeyHit, 
        framesMax: 2
      },
    }
  });

}

function draw() {

  //Runs code if state is equal to "fight"
  if (state === "fight") {
  background(220);

  //Background Gif
  image(bgImage, 0, 0, width, height);
  

  
    // Check if the enemy or player has died
    if (shinso.health <= 0) { //enemy death
      shinso.switchanimation("death");
      
    }

    if (playerEx.health <= 0) {//player death
      playerEx.switchSprite("death");
      shinso.dead =true; 
    }
    

    
    
    // Class 
    playerEx.update(); 
    playerEx.display();

    shinso.update(); 
    shinso.display();

    //Player Health Bar
    healthBar(playerEx.health, maxHP, 10, 200);

    //Enemy Health Bar
    healthBar(shinso.health, maxHP, width - 410, 400); 
    
    //Enemy Movement
    if (shinso.health > 0 && shinso.dead === false) {
      if (getDistance(playerEx.position.x, playerEx.position.y, shinso.position.x,shinso.position.y) < 40) {
        
        //Times enemy attack so the attack button would not be rapidly triggered
        if (millis() - lastAttackTime >= attackInterval) {
          shinso.attack();
          lastAttackTime = millis();
      }
      }
      
      //Checks where player is and moves towards them slowly
      if (playerEx.position.x <= shinso.position.x) {
        shinso.position.x -= 3;
        shinso.switchanimation('runback');
      }

      if (playerEx.position.x >= shinso.position.x) {
        shinso.position.x += 3;
        shinso.switchanimation('run');
    }
  }


    

    //Moves player left
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
    //Fall animation trigger
    else if (playerEx.velocity.y > 0) {
      playerEx.switchSprite('Down'); 
    }
    
   


    // collision detection & damage detection
  if (rectCol({rectangle1: playerEx, rectangle2: shinso}) && playerEx.isAttacking) {
    playerEx.isAttacking = false; 
    shinso.takeHit(); 
  }

  if (rectCol({rectangle1: shinso, rectangle2: playerEx}) && shinso.isAttacking) {
    shinso.isAttacking = false;
    playerEx.takeHit(); 

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

//gets the distance
function getDistance(x1,y1,x2,y2) {
   xdiff = x1-x2;
   ydiff = y1-y2; 

   return Math.sqrt(xdiff * xdiff + ydiff * ydiff); 
}

//Detectes where the proper collision should happen
function rectCol({rectangle1,rectangle2}) {
  return (rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height); 
}


//Creates health bar and allows you to place it anywhere
function healthBar(health, maxHealth, xOffset, widthOffset) {
  stroke(0); 
  strokeWeight(7); 
  noFill(); 
  rect(xOffset, 15, widthOffset, 15); 
  noStroke(); 
  if(health >= 80) {
    fill("green"); 
  }
  if (health <= 80) {
    fill("yellow");
  }

 if (health <= 30) {
    fill("red"); 
  }
   
  rect(xOffset, 15, map(health, 0, maxHealth,0, 200), 15);
}


