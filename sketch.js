
let img;

function preload() {
  img = loadImage('15puzzle.png');
}

function setup() {
 createCanvas(400, 400);
 background(0);
 
}
function draw() {
  image(img,0,0,400,300);
}  