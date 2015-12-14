(function() {
  'use strict';

  angular
    .module('moto', [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngResource',
      'ngRoute'
    ])

    .filter('encodeURI', encodeURI)                 // Filter for URL
    .filter('startsWithLetter', startsWithLetter)   // Filter for search input
    .filter('property', property)                   // Filter for category
    .filter('limitString', limitString);            // Filter for character limit

    // TODO: fix encodeURI, seems like it is not necessary to use it on current Angular version
    function encodeURI() {
        return encodeURI;
    }

    function startsWithLetter() {

      return function (items, letter) {
        var filtered = [];
        var l = items.length;
        var letterMatch = new RegExp(letter, 'i');
        for (var i = 0; i < l; i++) {
          var item = items[i];
          if (letterMatch.test(item.title.substring(0, 32))) {
            filtered.push(item);
          }
        }
        return filtered;
      };

    }

    function property($filter) {

      var parseString = function(input){
        return input.split('.');
      };

      function getValue(element, propertyArray) {
        var value = element;

        angular.forEach(propertyArray, function(property) {
          value = value[property];
        });

        return value;
      }

      return function (array, propertyString, target) {
        var properties = parseString(propertyString);

        return $filter('filter')(array, function(item){
          return getValue(item, properties) === target;
        });
      };

    }

    function limitString() {

      return function (value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
          var lastspace = value.lastIndexOf(' ');
          if (lastspace != -1) {
            value = value.substr(0, lastspace);
          }
        }

        return value + (tail || ' …');
        // usage ex:  | limitString:true:100:' ...'
      };
    }

})();
