let slider;
let image1;

function preload() {
  image1 = loadImage("Controllers.png");
}

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("main");
  
  slider = createSlider(0, 1, 0);
  textAlign(CENTER);
}

function draw() {
  background(220);
  
  const sliderDisplay = map(slider.value(), 0, 1, -0.5, 0.5);
  
  image(image1, 0, 0);
  fill(255, 255, 255, 50);
  noStroke();
  translate(200, 0);
  rect(0, 0, width * sliderDisplay, height, 5);
}