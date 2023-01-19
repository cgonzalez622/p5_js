function setup() {
    createCanvas(800, 800);
}
  
function draw() {
    background(220);
}

function draw() {
    if (mouseIsPressed) {
        fill(0, 126, 255);
    }   
    else {
        noFill();
        noStroke();
    }
    ellipse(mouseX, mouseY, 80, 80);
}