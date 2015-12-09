!function(){"use strict";function t(){return t}function n(){return function(t,n){for(var e=[],r=new RegExp(n,"i"),a=0;a<t.length;a++){var o=t[a];r.test(o.title.substring(0,32))&&e.push(o)}return e}}function e(t){function n(t,n){var e=t;return angular.forEach(n,function(t){e=e[t]}),e}var e=function(t){return t.split(".")};return function(r,a,o){var i=e(a);return t("filter")(r,function(t){return n(t,i)===o})}}function r(){return function(t,n,e,r){if(!t)return"";if(e=parseInt(e,10),!e)return t;if(t.length<=e)return t;if(t=t.substr(0,e),n){var a=t.lastIndexOf(" ");-1!=a&&(t=t.substr(0,a))}return t+(r||" …")}}angular.module("moto",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","toastr"]).filter("encodeURI",t).filter("startsWithLetter",n).filter("property",e).filter("limitString",r),e.$inject=["$filter"]}(),function(){"use strict";function t(){function t(){return n}var n=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=t}angular.module("moto").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var n=this;n.relativeDate=t(n.creationDate).fromNow()}var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["moment"],n}angular.module("moto").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function n(n,e,r,a){var o,i=t(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(n.extraValues,function(t){i.type(t).pause()["delete"]()}),o=n.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){i.type(t.login).pause()["delete"]()})}),n.$on("$destroy",function(){o()})}function e(t,n){function e(){return r().then(function(){t.info("Activated Contributors View")})}function r(){return n.getContributors(10).then(function(t){return a.contributors=t,a.contributors})}var a=this;a.contributors=[],e()}var r={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:n,controller:e,controllerAs:"vm"};return e.$inject=["$log","githubContributor"],r}angular.module("moto").directive("acmeMalarkey",t),t.$inject=["malarkey"]}(),function(){"use strict";function t(t,n){function e(e){function a(t){return t.data}function o(n){t.error("XHR Failed for getContributors.\n"+angular.toJson(n.data,!0))}return e||(e=30),n.get(r+"/contributors?per_page="+e).then(a)["catch"](o)}var r="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:r,getContributors:e};return a}angular.module("moto").factory("githubContributor",t),t.$inject=["$log","$http"]}(),function(){"use strict";function t(t){function n(n){t({method:"GET",url:"app/data/articles.json",cache:!0}).success(n)}return{list:n,find:function(t,e){n(function(n){var r=n.filter(function(n){return n.title===t})[0];e(r)})}}}angular.module("moto").factory("news",t),t.$inject=["$http"]}(),function(){"use strict";function t(t,n,e,r){function a(){i(),t(function(){l.classAnimation="rubberBand"},4e3)}function o(){e.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""}function i(){l.awesomeThings=n.getTec(),angular.forEach(l.awesomeThings,function(t){t.rank=Math.random()})}var l=this;r.list(function(t){l.news=t}),l.awesomeThings=[],l.classAnimation="",l.creationDate=1449583820715,l.showToastr=o,a()}angular.module("moto").controller("MainController",t),t.$inject=["$timeout","webDevTec","toastr","news"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("moto").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t){t.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}).when("/news/:category?",{templateUrl:"app/components/news/news.html",controller:"NewsCtrl",controllerAs:"vm"}).when("/news/:category/:articleName",{templateUrl:"app/components/article/article.html",controller:"ArticleCtrl",controllerAs:"vm"}).otherwise({redirectTo:"/"})}angular.module("moto").config(t),t.$inject=["$routeProvider"]}(),function(){"use strict";angular.module("moto").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,n){t.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0}angular.module("moto").config(t),t.$inject=["$logProvider","toastrConfig"]}(),angular.module("moto").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container"><div ng-repeat="article in vm.news | property:\'category\':\'rally\' | orderBy:\'-date\' | limitTo:-4"><img ng-src="{{article.images.img1}}" alt="{{article.title}}"> <a ng-href="news/{{article.category}}/{{article.title}}">{{article.title | limitString:true:10:\' ...\'}}</a></div><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="col" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar"><a href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</a><ul><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-83410030ef.js.map
