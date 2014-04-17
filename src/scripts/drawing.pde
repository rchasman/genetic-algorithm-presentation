Actor a;

void setup() {
  size(300, 300);
  background(255);
  a = new Actor(8, 0.5);
}

void draw() {
  a.display();
  noLoop();
}
