Reveal.initialize({
  controls: false,
  slideNumber: true,
  history: true,
  overview: true,
  center: true,
  touch: false,
  loop: true,
  fragments: true,
  transition: 'page',
  parallaxBackgroundImage: '/styles/bg.jpg',
  parallaxBackgroundSize: '2100px'
});

var canvas = document.getElementById("sketch");
// attaching the sketchProc function to the canvas
var p;
var pauser = true;

function switcher(on) {
  if (!p) {
    p = Processing.getInstanceById('alpha');
  }
  if (on) {
    p.loop();
  } else {
    p.noLoop();
  }
}

// p.exit(); to detach it
function pause() {
  pauser = pauser ? false : true;
  document.getElementById("pauser").firstChild.data = pauser ? "Step" : "Step!";
  switcher(pauser);
}

function reset() {
  if (!p) {
    p = Processing.getInstanceById('alpha');
  }
  p.setup();
}
