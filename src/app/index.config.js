(function() {
  'use strict';

  angular
    .module('moto')
    .config(config);

  /** @ngInject */

  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
