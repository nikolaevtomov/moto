!function(){"use strict";function t(){return t}function n(){return function(t,n){for(var r=[],e=t.length,o=new RegExp(n,"i"),i=0;e>i;i++){var a=t[i];o.test(a.title.substring(0,32))&&r.push(a)}return r}}function r(t){function n(t,n){var r=t;return angular.forEach(n,function(t){r=r[t]}),r}var r=function(t){return t.split(".")};return function(e,o,i){var a=r(o);return t("filter")(e,function(t){return n(t,a)===i})}}function e(){return function(t,n,r,e){if(!t)return"";if(r=parseInt(r,10),!r)return t;if(t.length<=r)return t;if(t=t.substr(0,r),n){var o=t.lastIndexOf(" ");-1!=o&&(t=t.substr(0,o))}return t+(e||" …")}}angular.module("moto",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute"]).filter("encodeURI",t).filter("startsWithLetter",n).filter("property",r).filter("limitString",e),r.$inject=["$filter"]}(),function(){"use strict";function t(){function t(){return n}var n=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=t}angular.module("moto").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var n=this;n.relativeDate=t(n.creationDate).fromNow()}var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],n}angular.module("moto").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function n(n,r,e,o){var i,a=t(r[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});r.addClass("acme-malarkey"),angular.forEach(n.extraValues,function(t){a.type(t).pause()["delete"]()}),i=n.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){a.type(t.login).pause()["delete"]()})}),n.$on("$destroy",function(){i()})}function r(t,n){function r(){return e().then(function(){t.info("Activated Contributors View")})}function e(){return n.getContributors(10).then(function(t){return o.contributors=t,o.contributors})}var o=this;o.contributors=[],r()}var e={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:n,controller:r,controllerAs:"vm"};return r.$inject=["$log","githubContributor"],e}angular.module("moto").directive("acmeMalarkey",t),t.$inject=["malarkey"]}(),function(){"use strict";function t(t,n){function r(r){function o(t){return t.data}function i(n){t.error("XHR Failed for getContributors.\n"+angular.toJson(n.data,!0))}return r||(r=30),n.get(e+"/contributors?per_page="+r).then(o)["catch"](i)}var e="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:e,getContributors:r};return o}angular.module("moto").factory("githubContributor",t),t.$inject=["$log","$http"]}(),function(){"use strict";function t(t){function n(n){t({method:"GET",url:"app/data/articles.json",cache:!0}).success(n)}return{list:n,find:function(t,r){n(function(n){var e=n.filter(function(n){return n.title===t})[0];r(e)})}}}angular.module("moto").factory("news",t),t.$inject=["$http"]}(),function(){"use strict";function t(t){var n=this;t.list(function(t){n.news=t})}angular.module("moto").controller("MainController",t),t.$inject=["news"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("moto").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t){t.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}).when("/news/:category?",{templateUrl:"app/components/news/news.html",controller:"NewsCtrl",controllerAs:"vm"}).when("/news/:category/:articleName",{templateUrl:"app/components/article/article.html",controller:"ArticleCtrl",controllerAs:"vm"}).otherwise({redirectTo:"/"})}angular.module("moto").config(t),t.$inject=["$routeProvider"]}(),function(){"use strict";angular.module("moto")}(),function(){"use strict";function t(t){t.debugEnabled(!0)}angular.module("moto").config(t),t.$inject=["$logProvider"]}(),angular.module("moto").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container"><div ng-repeat="article in vm.news | property:\'category\':\'rally\' | orderBy:\'-date\' | limitTo:-4"><img ng-src="{{article.images.img1}}" alt="{{article.title}}"> <a ng-href="news/{{article.category}}/{{article.title}}">{{article.title | limitString:true:10:\' ...\'}}</a></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar"><a href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</a><ul><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-235423a819.js.map