function setup() {
    createCanvas(400, 400);
    
    background("orange");
  }
  
  function draw() {

    stroke("red");
    fill("purple");
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 50, 50);
    }
  }
  