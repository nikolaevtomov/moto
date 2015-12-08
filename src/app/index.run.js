(function() {
  'use strict';

  angular
    .module('moto')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
