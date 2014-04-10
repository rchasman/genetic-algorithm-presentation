Walker w;

void setup() {
  size(200, 200);
  background(100);
  w = new Walker();
  //stroke(255);
  //ellipse(50, 50, 25, 25);
  //println("hi");
}

void draw() {
  w.step();
  w.display();
}
