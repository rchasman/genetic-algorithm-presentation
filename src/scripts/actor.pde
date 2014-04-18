class Actor {

  int geneCount;
  int currentGeneration;
  int score;
  char[] dna;
  float mutationRate;

  Actor(geneCount, mutationRate) {
    geneCount = geneCount;
    mutationRate = mutationRate;
    currentGeneration = 0;
    score = 0;
    dna = new char[geneCount];
    for(int i = 0; i < dna.length; i++){
      int rand = int(random(3));
      dna[i] = toChromosome(rand);
    }
    console.log(dna.toString());
  }

  char toChromosome(int rps) {
    switch(rps) {
      case 0:
        return 'r';
      case 1:
        return 'p';
      case 2:
        return 's';
      default:
        return 'x';
    }
  }

  String toString(char rps) {
    switch(rps) {
      case 'r':
        return "Rock";
      case 'p':
        return "Paper";
      case 's':
        return "Scissors";
      default:
        return "NOT VALID";
    }
  }

  void display() {


    int offsetX = 15 + (100 * currentGeneration);
    int offsetY = 25;
    textSize(16);
    fill(0, 0, 0);
    text("Generation " + currentGeneration, offsetX, offsetY);
    textSize(14);
    if(dna && dna.length > 0) {
      for(int i = 0; i < dna.length; i++){
        text(toString(dna[i]), 20 + offsetX, offsetY + 25 + (i * 20));
        fill(int(random(255)), int(random(255)), int(random(255)));
      }
    this.currentGeneration++;
    } else {
      textSize(32);
      fill(0, 0, 0);
      text("No DNA found :(", 10 * currentGeneration, 30 + 10);
    }
  }
}
