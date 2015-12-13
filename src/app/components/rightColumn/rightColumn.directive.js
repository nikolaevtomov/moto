(function() {
  'use strict';

angular
    .module('moto')
    .directive('rightColumn', rightColumn);

    function rightColumn() {

      /** @ngInject */

      return {
        restrict: 'EA',
        templateUrl: 'app/components/rightColumn/rightColumn.html',
        scope: {},
        controller: 'rightColumnController',
        controllerAs: 'vm'
      };

    }

})();
