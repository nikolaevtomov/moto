(function() {
  'use strict';

  /** @ngInject */

angular
  .module('moto')
  .directive('carouselar', carouselar);

  function carouselar($window, CarouselarConstants) {

    return {
      replace: true,
      restrict: 'AE',
      scope: {
        images: '='
      },
      templateUrl: 'app/components/carousel/carousel.html',
      controller: 'CarouselarController',
      controllerAs: 'vm',
      link: function(scope, element, attrs) {

        scope.vm.maxImageCount = Math.min(
        parseInt(attrs.displayingImageCount), CarouselarConstants.MAX_DISPLAYING_IMAGE) || 1;

        var win = angular.element($window);
        win.bind('resize', scope.onResize);
        scope.onResize();

        scope.$on('$destroy', function() {
          win.unbind('resize', scope.onResize);
        });

      }
    };

  }

angular
  .module('moto')
  .directive('carouselarImage', carouselarImage);

  function carouselarImage($compile) {

    return {
      restrict: 'E',
      scope: {
        isVisible: '=',
        imgUrl: '@',
        date: '@',
        categoryUrl: '@',
        tag: '@',
        headingUrl: '@'
      },
      template: '<div class="carouselar__container__inner__thumbs__loader" ng-if="vm.isLoading"></div>',
      controller: 'CarouselarImageController',
      controllerAs: 'vm',
      link: function(scope, element) {

        scope.vm.compileImage = function() {

          element.append(
              '<img class="carouselar__container__inner__thumbs__image" carouselar-loader on-load="vm.onLoad()" ng-src="{{imgUrl}}"/>');

          element.append(
              '<date class="carouselar__container__inner__thumbs__date">{{date}}</date>');

          element.append(
              '<h4 class="carouselar__container__inner__thumbs__heading"><a ng-href="#/news/{{categoryUrl}}/{{headingUrl}}">{{headingUrl}}</a></h4>');

          element.append(
              '<span class="carouselar__container__inner__thumbs__cat"><a ng-href="#/news/{{tag}}">{{tag}}</a></span>');

          $compile(element.contents())(scope);

        };
      }
    };

  }

angular
  .module('moto')
  .directive('carouselarLoader', carouselarLoader);

  function carouselarLoader() {

    return {
      restrict: 'A',
      scope: {
        onLoad: '&'
      },
      link: function(scope, element) {
        element.bind('load', scope.onLoad);
      }
    };

  }

})();
