(function() {
  'use strict';

angular
  .module('moto')
  .controller('ArticleController', ArticleController);

  function ArticleController($routeParams, $scope, news) {

    /** @ngInject */

    //var vm = this;
    news.find($routeParams.articleName, function(article) {
      $scope.article = article;
    });

  }

})();
