Walker w;
Actor a;

void setup() {
  size(600, 300);
  background(255);
  w = new Walker();
  a = new Actor(8, 0.5);
  //stroke(255);
  //ellipse(50, 50, 25, 25);
  //println("hi");
}

void draw() {
  w.step();
  w.display();
  a.display();
  a.clear();
}
