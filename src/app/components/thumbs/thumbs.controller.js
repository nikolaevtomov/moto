(function() {
    'use strict';

angular
    .module('moto')
    .controller('ThumbsController', ThumbsController);
    function ThumbsController(news) {

        /** @ngInject */

        var vm = this;

        news.list(function(news) {
            vm.news = news;
        });

    }

})();

