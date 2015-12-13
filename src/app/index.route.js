(function() {
  'use strict';

  angular
    .module('moto')
    .config(routeConfig);

    // TODO: Config the $locationProvider for pretty URL

    function routeConfig($routeProvider) {

    //$locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'vm'
        })
        .when('/news/:category?', {
            templateUrl: 'app/components/news/news.html',
            controller: 'NewsController',
            controllerAs: 'vm'
        })
        .when('/news/:category/:articleName', {
            templateUrl: 'app/components/article/article.html',
            controller: 'ArticleController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });

    }

})();
