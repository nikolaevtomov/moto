(function() {
  'use strict';

angular
  .module('moto')
  .directive('motoSlider', motoSlide);
  function motoSlide(MotoSliderService, $timeout) {

      /** @ngInject */

      return {
        restrict: 'AE',
        scope: {
          onChange: '&',
          current: '=?currentSlide',
          slider: '=?sliderInstance'
        },
        controllerAs: 'vm',
        link: function postLink(scope, element, attrs) {

          var options = attrs, disposeWatcher;

          if (attrs.onChange) {
            options.onChange = scope.onChange;
          } else {
            options.onChange = function (prev, next) {
              if (parseInt(scope.current) !== next) {
                $timeout(function () {
                  scope.$apply(function () {
                    scope.current = next;
                  });
                });
              }
            };
          }

          if (element[0].children.length === 0) {
            disposeWatcher = scope.$watch(function () {
              return element[0].children.length > 0;
            }, function (hasChildren) {
              if (hasChildren) {
                scope.slider = new MotoSliderService(element[0], options);
                disposeWatcher();
              }
            });
          } else {
            scope.slider = new MotoSliderService(element[0], options);
          }

          scope.$watch('current', function(next, prev) {
            if (next && next !== prev) {
              scope.slider.change(parseInt(next));
            }
          });

        }
      };
    }

})();
