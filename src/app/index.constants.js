(function() {
  'use strict';

  angular
    .module('moto')
    .constant('CarouselarConstants', {
      RESIZE_TIMEOUT: 1000,
      MAX_DISPLAYING_IMAGE: 5,
      BREAKPOINTS: {
        LANDSCAPE: 960,
        PORTRAIT: 640
      }
    });

})();
