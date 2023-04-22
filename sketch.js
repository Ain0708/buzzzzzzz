var i=0;
var d=5;
var on=false;
var is;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  background(0)
}

function draw() {
  if(on) background(255);
  if(mouseX>=width/2-50 && mouseX<=width/2+50&& mouseY) {
    fill(0, 0, 255, 100)
  }else{
      fill(255, 0, 0, 100);
    isIn=false;
    }
    ellipse(width/2, height/2, 100, 30);
    ellipse(width/2, height/2, 30, 100);
    rect(width/2, height/2, 30, 100);
  }
 function windowResized(){
   resizeCanvas(windowWidth, windowHeight)
 }
function mousePressed(){
  if (mouseIsPressed){
    if(mouseX>=width/2-50 && mouseX<=width/2+50){
      fill(0, 0, 0);
      ellipse(width/2, height/2, 100, 30);
    ellipse(width/2, height/2, 30, 100);
    rect(width/2, height/2, 30, 100);
      
    }
  }
  }

function keyPressed(){}