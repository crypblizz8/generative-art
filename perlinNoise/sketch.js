var start = 0;
var xOffsetOne = 0;
var incr = 0.01;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xOffsetOne = start;
  for (var x = 0; x < width; x++){
    stroke(255);
    
    // Make it follow a Sin Curve.
    var n = map(noise(xOffsetOne), 0, -1, -50, 50)
    var s = map(sin(xOffsetOne), -1, 1, 0, height);
    var y = s + n;

    // Similar to Sin Wave.
    // var y = noise(xOffsetOne) * height;
    vertex(x,y)
    
    xOffsetOne += incr;
  }
  endShape();
  
  // noLoop();
  start += incr;

}