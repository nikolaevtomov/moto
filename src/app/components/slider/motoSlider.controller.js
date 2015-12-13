(function() {
  'use strict';

  angular
    .module('moto')
    .controller('SliderController', SliderController);
    function SliderController(news) {

      /** @ngInject */

      var vm = this;

      news.list(function(news) {
        vm.news = news;
      });

    }

})();
