import * as lib from 'Lib/carouselTab/carouselTab.js';

const Carousel = lib.carouselTab;

Carousel.prototype = {
  constructor: Carousel,
  init: lib.init,
  setListeners: lib.setListeners,
  activateSlide: lib.activateSlide,
  deactivateSlide: lib.deactivateSlide,
  focusTab: lib.focusTab,
  unfocusTab: lib.unfocusTab,
  activateTab: lib.activateTab,
  deactivateTab: lib.deactivateTab,
  onclickTab: lib.onclickTab,
  onkeydown: lib.onkeydown,
  setSlidesAnimation: lib.setSlidesAnimation,
  handleEvent: lib.handleEvent,
};

export default Carousel;
