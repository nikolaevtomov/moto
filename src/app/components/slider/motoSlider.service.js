var vm = this;
(function() {
  'use strict';

  angular
    .module('moto')
    .factory('MotoSliderService', MotoSliderService);

    function MotoSliderService() {

      /** @ngInject */
      return typeof module !== 'undefined' && module.exports ?
        module.exports :
        vm.SimpleSlider;
    }

})();
