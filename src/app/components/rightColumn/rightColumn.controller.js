(function() {
  'use strict';

  angular
    .module('moto')
    .controller('rightColumnController', rightColumnController);

    function rightColumnController(news) {

      /** @ngInject */

      var vm = this;

      news.list(function(news) {
        vm.news = news;
      });

    }

})();
