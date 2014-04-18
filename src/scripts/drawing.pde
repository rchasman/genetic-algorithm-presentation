Actor a;

void setup() {
  size(800, 250);
  background(255);
  a = new Actor(8, 0.5);
}

void draw() {
  a.display();
  noLoop();
}
