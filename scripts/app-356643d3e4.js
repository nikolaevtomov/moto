!function(){"use strict";angular.module("moto",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","toastr"])}(),function(){"use strict";function n(n){function t(t){n({method:"GET",url:"app/data/articles.json",cache:!0}).success(t)}return{list:t,find:function(n,a){t(function(t){var e=t.filter(function(t){return t.title===n})[0];a(e)})}}}angular.module("moto").factory("news",n),n.$inject=["$http"]}(),function(){"use strict";function n(n,t,a,e){function i(){s(),n(function(){r.classAnimation="rubberBand"},4e3)}function o(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),r.classAnimation=""}function s(){r.awesomeThings=t.getTec(),angular.forEach(r.awesomeThings,function(n){n.rank=Math.random()})}var r=this;e.list(function(n){r.news=n}),r.awesomeThings=[],r.classAnimation="",r.creationDate=1449583820715,r.showToastr=o,i()}angular.module("moto").controller("MainController",n),n.$inject=["$timeout","webDevTec","toastr","news"]}(),function(){"use strict";function n(n){n.debug("runBlock end")}angular.module("moto").run(n),n.$inject=["$log"]}(),function(){"use strict";function n(n){n.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}angular.module("moto").config(n),n.$inject=["$routeProvider"]}(),function(){"use strict";angular.module("moto").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function n(n,t){n.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}angular.module("moto").config(n),n.$inject=["$logProvider","toastrConfig"]}(),angular.module("moto").run(["$templateCache",function(n){n.put("app/main/main.html",'<div class="container"><div ng-repeat="article in main.news"><img ng-src="{{article.images.img1}}" alt="{{article.title}}"> <a ng-href="news/{{article.category}}/{{article.title}}">{{article.title}}</a></div><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="col" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-356643d3e4.js.map
