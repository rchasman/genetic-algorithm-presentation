Reveal.initialize({
    controls: false,
    progress: true,
    slideNumber: false,
    history: false,
    keyboard: true,
    overview: true,
    center: true,
    touch: true,
    loop: false,
    rtl: false,
    fragments: true,
    embedded: false,
    autoSlide: 0,
    autoSlideStoppable: true,
    mouseWheel: false,
    hideAddressBar: true,
    previewLinks: false,
    transition: 'linear',
    transitionSpeed: 'fast',
    backgroundTransition: 'default',
    viewDistance: 3,
    parallaxBackgroundImage: '/styles/bg.jpg'
});

var canvas = document.getElementById("sketch");
// attaching the sketchProc function to the canvas
var p;
var pauser = true;

Processing.logger = console;

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
  document.getElementById("pauser").firstChild.data = pauser ? "Pause" : "Resume";
  switcher(pauser);
}

function reset() {
  if (!p) {
    p = Processing.getInstanceById('alpha');
  }
  p.setup();
}
