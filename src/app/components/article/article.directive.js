(function() {
  'use strict';
  /* not in use */
angular
  .module('moto')
  .directive('post', post);
  function post() {

    /** @ngInject */

    return {
      scope: {
        newsItem: '='
      },
      restrict: 'E',
      templateUrl: 'app/components/news/post.html'
    };

  }

})();
