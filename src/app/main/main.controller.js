(function() {
  'use strict';

  angular
    .module('moto')
    .controller('MainController', MainController);

  /** @ngInject */

  function MainController(news) {

    var vm = this;

    news.list(function(news) {
      vm.news = news;
    });

  }

})();
