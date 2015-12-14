(function() {
    'use strict';

angular
    .module('moto')
    .directive('thumbs', thumbs);
    function thumbs() {

        /** @ngInject */

        return {
            restrict: 'AE',
            scope: {},
            templateUrl: 'app/components/thumbs/thumbs.html',
            controller: 'ThumbsController',
            controllerAs: 'vm',
            link: function() {}
        };

    }

})();

