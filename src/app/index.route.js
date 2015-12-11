(function() {
  'use strict';

  angular
    .module('moto')
    .config(routeConfig);

    //TODO: Config the $locationProvider for pretty URL
    //.config(locationConfig);

    function routeConfig($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'vm'
        })
        .when('/news/:category?', {
            templateUrl: 'app/components/news/news.html',
            controller: 'NewsCtrl',
            controllerAs: 'vm'
        })
        .when('/news/:category/:articleName', {
            templateUrl: 'app/components/article/article.html',
            controller: 'ArticleCtrl',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
    }

    //function locationConfig($locationProvider) {
    //    // use the HTML5 History API
    //    $locationProvider.html5Mode(true);
    //}

})();
