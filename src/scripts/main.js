bespoke.from('article', {
  keys: true,
  touch: true,
  bullets: 'li, .bullet',
  scale: true,
  hash: true,
  progress: true,
  forms: true
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
  document.getElementById("pauser").firstChild.data = pauser ? "pause" : "resume";
  switcher(pauser);
}

function reset() {
  if (!p) {
    p = Processing.getInstanceById('alpha');
  }
  p.setup();
}
