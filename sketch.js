let img;

function preload() {
  img = loadImage('animal1.png');
}

function setup() {
 createCanvas(400, 400);
 background(0);
 
}
function draw() {
  image(img,0,0,400,300);
}
    