(function() {
  'use strict';

  /** @ngInject */

angular
  .module('moto')
  .controller('CarouselarController', CarouselarController);

  function CarouselarController($scope, $timeout, $window, CarouselarConstants, news, $interval) {

    var vm = this;

    news.list(function(news) {
      vm.news = news;
    });

    vm.visibleImages = [];
    vm.maxImageCount = 1;
    // TODO: Fix controller as to 'vm'
    $scope.displayingImageCount = 0;
    vm.activeSection = 0;
    vm.sectionCount = 5;
    vm.containerPosition = 'translateX(0)';
    vm.singleImageWidth = '100%';

    vm.createArray = function(num) {
      return new Array(num || 0);
    };

    vm.prev = function() {
      vm.moveToSection(vm.activeSection - 1);
    };

    vm.next = function() {
      vm.moveToSection(vm.activeSection + 1);
    };

    $interval( function(){
      vm.next();
    },5000);

    vm.moveToSection = function(sectionIndex) {
      if (sectionIndex >= vm.sectionCount) {
        vm.activeSection = 0;

      } else if (sectionIndex < 0) {
        vm.activeSection = vm.sectionCount - 1;

      } else {
        vm.activeSection = sectionIndex;
      }

      // update container position & visible images:
      var pos;
      var imagePercentage = 100 / $scope.displayingImageCount;
      var visibleImages = [];
      var i;

      if (vm.activeSection === vm.sectionCount - 1) { // last section
        pos = (vm.news.length - $scope.displayingImageCount) * imagePercentage;

        for (i = 0; i < $scope.displayingImageCount + 1; i++) {
          visibleImages.push(vm.news.length - i);
        }

      } else {
        var firstVisibleImageIndex = vm.activeSection * $scope.displayingImageCount;

        visibleImages.push(firstVisibleImageIndex);
        for (i = 1; i < $scope.displayingImageCount; i++) {
          visibleImages.push(firstVisibleImageIndex + i);
        }

        pos = firstVisibleImageIndex * imagePercentage;
      }

      vm.containerPosition = 'translateX(-' + pos + '%)';
      vm.visibleImages = visibleImages;
    };

    vm.resizeTimer = null;
    $scope.onResize = function(event, _width) {
      $timeout.cancel(vm.resizeTimer);
      vm.resizeTimer = $timeout(function() {
        var displayingImageCount = vm.maxImageCount;
        var windowWidth = _width || $window.innerWidth;

        if (windowWidth < CarouselarConstants.BREAKPOINTS.LANDSCAPE) {
          displayingImageCount = Math.ceil(vm.maxImageCount / 2);

          if (windowWidth < CarouselarConstants.BREAKPOINTS.PORTRAIT) {
            displayingImageCount = 1;
          }
        }

        $scope.displayingImageCount = displayingImageCount;
      }, CarouselarConstants.RESIZE_TIMEOUT);
    };

    $scope.$watch('displayingImageCount', displayingImageCount);

    function displayingImageCount(newValue) {
      if (newValue) {
        vm.sectionCount = Math.ceil(
        vm.news.length / $scope.displayingImageCount);
        vm.moveToSection(vm.activeSection); // TODO: keep first image in sight
        vm.singleImageWidth = (100 / newValue) + '%';
      }
    }

    vm.isImageVisible = function(imageIndex) {
      return vm.visibleImages.indexOf(imageIndex) > -1;
    };

  }

angular
  .module('moto')
  .controller('CarouselarImageController', CarouselarImageController);

  function CarouselarImageController($scope) {
    var vm = this;
    vm.isLoading = true;
    vm.onLoad = function() {
      vm.isLoading = false;
      $scope.$apply();
    };

    var unwatch = $scope.$watch('isVisible', isVisible);
    function isVisible(isVisible) {
      if (isVisible) {
        vm.compileImage();
        unwatch();
      }
    }
  }

})();
