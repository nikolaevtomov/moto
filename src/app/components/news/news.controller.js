(function() {
  'use strict';

  angular
    .module('moto')
    .controller('NewsController', NewsController);
    function NewsController($routeParams, news) {

      /** @ngInject */

      var vm = this;

      news.list(function(news) {
        vm.news = news;
      });

        vm.filters = [
        {
          name: '',
          filterExpr: ''
        },
        {
          name: 'f1',
          filterExpr: {
            category: 'f1'
          }
        },
        {
          name: 'motogp',
          filterExpr: {
            category: 'motogp'
          }
        },
        {
          name: 'rally',
          filterExpr: {
            category: 'rally'
          }
        },
        {
          name: 'vintage',
          filterExpr: {
            category: 'vintage'
          }
        },
        {
          name: 'v8 supercars',
          filterExpr: {
            category: 'v8 supercars'
          }
        }
      ];

        vm.selectedFilter = vm.filters[0];

      if ($routeParams.category) {
        switch ($routeParams.category) {
          case 'f1':
              vm.selectedFilter = vm.filters[1];
                break;
          case 'motogp':
              vm.selectedFilter = vm.filters[2];
                break;
          case 'rally':
              vm.selectedFilter = vm.filters[3];
                break;
          case 'vintage':
              vm.selectedFilter = vm.filters[4];
                break;
          case 'v8 supercars':
              vm.selectedFilter = vm.filters[5];
                break;
        }
      }

        vm.setFilter = function (filter) {
            vm.selectedFilter = filter;
      };

    }

})();
