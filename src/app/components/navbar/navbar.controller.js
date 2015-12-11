(function () {
 'use strict';

  angular
    .module('moto')
    .controller('NavbarController', NavbarController);

    /** @ngInject */

    function NavbarController($location) {

      var vm = this;

      vm.menuClass = function(page) {

        vm.current = $location.path().substring(1);
        return page === vm.current ? 'ms-menu__active' : '';

      };

    }

}());
