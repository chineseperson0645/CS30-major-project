//Screens
//turning autoplay off then calling .play in the same function is just still autoplay.

let transitionImg, creditsVideo, diedVideo, secondAttemptVideo, wiskerVideo, startVideo, startAfter;

//Start Sequence
function startVideoLoad() {
  startVideo.size(width, height);
  startVideo.noLoop();
  startVideo.volume();
  startVideo.autoplay(false);
}
function startAfterLoad(){
  startAfter.size(width, height);
  startAfter.noLoop();
  startAfter.volume(1);
  startAfter.autoplay(false);
}
function startImage(){
  state = "img";
  image(transitionImg, 0, 0, width, height+4);
  startVideo.remove();
  console.log("Image should be here");
  //Ask why there is just a white line at the bottom?
}
function startScreen(){
  startVideo = createVideo(['assets(world)/SET.mp4'], startVideoLoad); 
  startVideo.addCue(7.4, startMusicPlayer);
  startVideo.onended(startImage); //onended calls a callback function at the end of the duration of the media.
}
function startMusicPlayer(){
  bossMusic.play();
}



//Death Video
function diedVideoLoad() {
    diedVideo.size(width, height);
    diedVideo.noLoop();
    diedVideo.volume();
    diedVideo.autoplay(false);
}
function died(){
    diedVideo = createVideo(['assets(world)/DEATH.mp4'], diedVideoLoad); 
    diedVideo.onended(startImage2); //onended calls a callback function at the end of the duration of the media.
}
function startImage2(){ // Loop back to startscreen
    diedVideo.remove();
    state = "img";
    image(transitionImg, 0, 0, width, height);
    console.log("Image should be here");
    secondTime = true;
}
function secondAttemptVideoLoad() { //Second Attempt Sequence Loader (called by mousePressed)
    attemp2Video.size(width, height);
    attemp2Video.noLoop();
    attemp2Video.volume();
    attemp2Video.autoplay(false);
}



//Wisker's Interaction (called by mousePressed)
function wiskerVideoLoad(){
    wiskerVideo.size(width, height);
    wiskerVideo.noLoop();
    wiskerVideo.volume();
    wiskerVideo.autoplay(false);
    gridMusic1.pause();
}
function removeWiskerVideo(){
    wiskerVideo.remove();
    // gridMusic1.play();
  }



//Ninja Interaction
function ninjaVideoLoad() {
    ninjaVideo.size(width, height);
    ninjaVideo.noLoop();
    ninjaVideo.volume();
    ninjaVideo.autoplay(false);
}
function removeNinjaVideo(){
    ninjaVideo.remove();
    gridMusic1.setVolume(0.25);
    gridMusic1.play();
    gridMusic1.loop();
  }



//Boss Interaction
function creditsVideoLoad() {
    creditsVideo.size(width, height);
    creditsVideo.noLoop();
    creditsVideo.volume();
    creditsVideo.autoplay(false);
    finishMusic.play();
}
function creditsVideoRemove(){
    image(lastImg, 0, 0, width, height+4);
    //Img is being shoved into grid
    // COLS = 1;
    // ROWS = 1;
    creditsVideo.remove();
    console.log("be gone");
  }