(function() {
  'use strict';

  angular
    .module('moto')
    .factory('news', news);

      /** @ngInject */

      function news($http) {

        function getData(callback) {
            $http({
              method: 'GET',
              url: 'app/data/articles.json',
              cache: true
            }).success(callback);
        }

        return {
          list: getData,
          find: function (title, callback) {
              getData(function (data) {
                  var news = data.filter(function (entry) {
                      return entry.title === title;
                  })[0];
                  callback(news);
              });
          }
        };

      }

})();
