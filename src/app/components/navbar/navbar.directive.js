(function () {
  'use strict';

  angular
    .module('moto')
    .directive('motoNavbar', motoNavbar);

  /** @ngInject */

    function motoNavbar() {

      return {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        controller: 'NavbarController',
        controllerAs: 'vm',
        link: function($scope) {

          // TODO: use $document to get elements
          $scope.wrapper = document.getElementById('site-wrapper');
          $scope.navIcon = document.getElementById('cross');
          $scope.navTag = document.getElementsByClassName('linkName');

          function navFn() {
            if ($scope.wrapper.classList.contains('show-nav') === false) {
              $scope.wrapper.classList.add('show-nav');
              $scope.navIcon.classList.add('cross');
            } else {
              $scope.wrapper.classList.remove('show-nav');
              $scope.navIcon.classList.remove('cross');
            }
          }

          // bind on click function to Menu
          $scope.navIcon.addEventListener('click', navFn, false);

          // bind on click function to Menu List Items
          var navTagFunction = function() {

            var subMenu = this.nextElementSibling;

            if(subMenu !== null && subMenu.classList.contains('expandItem') === false) {
              subMenu.classList.add('expandItem');
            } else {
              subMenu.classList.remove('expandItem');
            }

          };

          for(var i=0; i<$scope.navTag.length; i++) {
            $scope.navTag[i].addEventListener('click', navTagFunction, false);
          }

          // TODO: Add hammer swipe function
          //// create a hammer swipe instance
          //$scope.vm = new Hammer($scope.wrapper);
          //
          //// listen to swipe events
          //$scope.vm.on('swiperight', function(e) {
          //  $scope.wrapper.classList.add('show-nav');
          //  $scope.navIcon.classList.add('cross');
          //  e.preventDefault();
          //});
          //$scope.vm.on('swipeleft', function(e) {
          //  $scope.wrapper.classList.remove('show-nav');
          //  $scope.navIcon.classList.remove('cross');
          //  e.preventDefault();
          //});

        }

      };

  }

}());
