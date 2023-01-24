//Screens
//turning autoplay off then calling .play in the same function is just still autoplay.

let transitionImg, creditsVideo, diedVideo, secondAttemptVideo, wiskerVideo, startVideo, startAfter, startVideo2;

//Start Sequence
function startVideoLoad() {
  startVideo.size(1920, 1076);
  startVideo.noLoop();
  startVideo.volume();
  startVideo.autoplay(false);
}

function startAfterLoad(){
  startAfter.size(1920, 1076);
  startAfter.noLoop();
  startAfter.volume(1);
  startAfter.autoplay(false);
}
function startImage(){
  state = "img";
  image(transitionImg, 0, 0, 1920, 1076);
  startVideo.remove();
  console.log("Image should be here");
  //Ask why there is just a white line at the bottom?
}
function startScreen(){
  startVideo = createVideo(['assets(world)/SET.mp4'], startVideoLoad); 
  startVideo.onended(startImage); //onended calls a callback function at the end of the duration of the media.
}



//Death Video
function diedVideoLoad() {
    diedVideo.size(1920, 1076);
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
    image(transitionImg, 0, 0, 1920, 1076);
    console.log("Image should be here");
    secondTime = true;
}
function secondAttemptVideoLoad() { //Second Attempt Sequence Loader (called by mousePressed)
    attemp2Video.size(1920, 1076);
    attemp2Video.noLoop();
    attemp2Video.volume();
    attemp2Video.autoplay(false);
}



//Wisker's Interaction (called by mousePressed)
function wiskerVideoLoad(){
    wiskerVideo.size(1920, 1076);
    wiskerVideo.noLoop();
    wiskerVideo.volume();
    wiskerVideo.autoplay(false);
}
function removeWiskerVideo(){
    wiskerVideo.remove();
  }



//Ninja Interaction
function ninjaVideoLoad() {
    ninjaVideo.size(1920, 1076);
    ninjaVideo.noLoop();
    ninjaVideo.volume();
    ninjaVideo.autoplay(false);
}
function removeNinjaVideo(){
    ninjaVideo.remove();
  }



//Boss Interaction
function creditsVideoLoad() {
    creditsVideo.size(1920, 1076);
    creditsVideo.noLoop();
    creditsVideo.volume();
    creditsVideo.autoplay(false);
}
function creditsVideoRemove(){
    image(lastImg, 0, 0, 1920, 1076);
    creditsVideo.remove();
    console.log("be gone")
  }