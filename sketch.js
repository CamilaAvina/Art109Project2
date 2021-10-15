//p5.SoundFile example 0
let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('asset/register.mp3');
}

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  }


function draw(){
  background(0);
  text('tap here to play', 10, 20);
  console.log('hello');
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}
