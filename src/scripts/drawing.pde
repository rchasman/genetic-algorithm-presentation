Actor a;

void setup() {
  size(300, 300);
  background(255);
  a = new Actor(8, 0.5);
  //stroke(255);
  //ellipse(50, 50, 25, 25);
  //println("hi");
}

void draw() {
  a.display();
  noLoop();
}
