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
var p = Processing.getInstanceById('alpha')
// p.exit(); to detach it
function start() {
  console.log("start");
  //p.loop()
}

function stop() {
  console.log("stop");
  //p.noLoop()
}
