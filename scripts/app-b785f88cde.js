!function(){"use strict";function e(){return e}function t(){return function(e,t){for(var n=[],i=e.length,a=new RegExp(t,"i"),r=0;i>r;r++){var s=e[r];a.test(s.title.substring(0,32))&&n.push(s)}return n}}function n(e){function t(e,t){var n=e;return angular.forEach(t,function(e){n=n[e]}),n}var n=function(e){return e.split(".")};return function(i,a,r){var s=n(a);return e("filter")(i,function(e){return t(e,s)===r})}}function i(){return function(e,t,n,i){if(!e)return"";if(n=parseInt(n,10),!n)return e;if(e.length<=n)return e;if(e=e.substr(0,n),t){var a=e.lastIndexOf(" ");-1!=a&&(e=e.substr(0,a))}return e+(i||" …")}}angular.module("moto",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute"]).filter("encodeURI",e).filter("startsWithLetter",t).filter("property",n).filter("limitString",i),n.$inject=["$filter"]}();var vm=this;!function(){"use strict";function e(){return"undefined"!=typeof module&&module.exports?module.exports:vm.SimpleSlider}angular.module("moto").factory("MotoSliderService",e)}(),function(){"use strict";function e(e,t){return{restrict:"AE",scope:{onChange:"&",current:"=?currentSlide",slider:"=?sliderInstance"},controllerAs:"vm",link:function(n,i,a){var r,s=a;a.onChange?s.onChange=n.onChange:s.onChange=function(e,i){parseInt(n.current)!==i&&t(function(){n.$apply(function(){n.current=i})})},0===i[0].children.length?r=n.$watch(function(){return i[0].children.length>0},function(t){t&&(n.slider=new e(i[0],s),r())}):n.slider=new e(i[0],s),n.$watch("current",function(e,t){e&&e!==t&&n.slider.change(parseInt(e))})}}}angular.module("moto").directive("motoSlider",e),e.$inject=["MotoSliderService","$timeout"]}(),function(){"use strict";function e(e){var t=this;e.list(function(e){t.news=e})}angular.module("moto").controller("SliderController",e),e.$inject=["news"]}(),function(e,t){"use strict";"undefined"!=typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(function(){return window.SimpleSlider=t()}):e.SimpleSlider=t()}(this,function(){"use strict";function e(e,t){return void 0===e||null===e||""===e?t:e}function t(e,t){for(var n,i=e.length,a="";--i>=0;)n=e[i],"string"==typeof n&&(a=n.replace(parseInt(n,10)+"",""));return"opacity"!==t&&""===a&&(a="px"),a}function n(e){if(0>=e){try{console.warn("A SimpleSlider main container elementshould have at least one child.")}catch(t){}return!0}return!1}function i(e,t,n,a,r,s,o,l,c){function u(){window.requestAnimationFrame(function(s){0===r&&(r=s),i(e,t,n,a,r,s,o,l,c)})}var g;return 0===r?u():(g=c(s-r,o,l-o,a),void(a>=s-r?(e[t]=g+n,u()):e[t]=l+n))}function a(e,t,n,i,a){for(var r=[],s=e.children.length;--s>=0;)r[s]=e.children[s],r[s].style.position="absolute",r[s].style.top="0"+t,r[s].style.left="0"+t,r[s].style[a]=n+t,r[s].style.zIndex=0;return r[0].style[a]=i+t,r[0].style.zIndex=1,r}function r(e,t){return t.style.zIndex=3,e&&(e.style.zIndex=1),t}function s(e,t){return t.style.zIndex=4,e&&(e.style.zIndex=2),t}function o(e){return"false"===e?!1:e}function l(e){document[d]?e.pauseAutoPlay():e.resumeAutoPlay()}Date.now||(Date.now=function(){return(new Date).getTime()});for(var c=["webkit","moz"],u=0;u<c.length&&!window.requestAnimationFrame;++u){var g=c[u];window.requestAnimationFrame=window[g+"RequestAnimationFrame"],window.cancelAnimationFrame=window[g+"CancelAnimationFrame"]||window[g+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var m=0;window.requestAnimationFrame=function(e){var t=Date.now(),n=Math.max(m+16,t);return setTimeout(function(){e(m=n)},n-t)},window.cancelAnimationFrame=clearTimeout}var d,p,h;"undefined"!=typeof document.hidden?(d="hidden",p="visibilitychange"):"undefined"!=typeof document.mozHidden?(d="mozHidden",p="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(d="msHidden",p="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(d="webkitHidden",p="webkitvisibilitychange");var f=function(n,i){var a=this;a.containerElem=n,a.interval=null,i||(i={});var r=parseInt(a.containerElem.style.width||a.containerElem.offsetWidth,10);a.trProp=e(i.transitionProperty,"left"),a.trTime=e(i.transitionDuration,.5),a.delay=1e3*e(i.transitionDelay,3),a.unit=t([i.startValue,i.visibleValue,i.endValue],a.trProp),a.startVal=parseInt(e(i.startValue,-r+a.unit),10),a.visVal=parseInt(e(i.visibleValue,"0"+a.unit),10),a.endVal=parseInt(e(i.endValue,r+a.unit),10),a.autoPlay=e(o(i.autoPlay),!0),a.ease=e(i.ease,f.defaultEase),a.onChange=e(i.onChange,null),a.init()};return f.defaultEase=function(e,t,n,i){return(e/=i/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t},f.easeNone=function(e,t,n,i){return n*e/i+t},f.prototype.init=function(){this.reset(),this.configSlideshow()},f.prototype.reset=function(){n(this.containerElem.children.length)||(this.containerElem.style.position="relative",this.containerElem.style.overflow="hidden",this.containerElem.style.display="block",this.imgs=a(this.containerElem,this.unit,this.startVal,this.visVal,this.trProp),this.actualIndex=0,this.inserted=null,this.removed=null,this.remainingTime=this.delay)},f.prototype.configSlideshow=function(){return this.imgs?void this.startInterval():!1},f.prototype.startInterval=function(){var e=this;this.isAutoPlayable()&&(this.interval&&window.clearTimeout(this.interval),function t(){e.intervalStartTime=Date.now(),e.interval=window.setTimeout(function(){e.intervalStartTime=Date.now(),e.remainingTime=e.delay,e.change(e.nextIndex()),t()},e.remainingTime)}(),function(){h||"undefined"==typeof document.addEventListener||(document.addEventListener(p,function(){l(e)},!1),h=!0)}())},f.prototype.isAutoPlayable=function(){return this.autoPlay&&this.imgs.length>1},f.prototype.pauseAutoPlay=function(){this.isAutoPlayable()&&(this.remainingTime=this.delay-(Date.now()-this.intervalStartTime),window.clearTimeout(this.interval),this.interval=null)},f.prototype.resumeAutoPlay=function(){this.startInterval()},f.prototype.startAnim=function(e,t,n){i(e.style,this.trProp,this.unit,1e3*this.trTime,0,0,t,n,this.ease)},f.prototype.remove=function(e){this.removed=r(this.removed,this.imgs[e]),this.startAnim(this.imgs[e],this.visVal,this.endVal)},f.prototype.insert=function(e){this.inserted=s(this.inserted,this.imgs[e]),this.startAnim(this.imgs[e],this.startVal,this.visVal)},f.prototype.change=function(e){var t=this.actualIndex;this.remove(this.actualIndex),this.insert(e),this.actualIndex=e,(this.onChange||"[object Function]"==Object.prototype.toString.call(this.onChange))&&this.onChange(t,this.actualIndex)},f.prototype.next=function(){this.change(this.nextIndex()),this.startInterval()},f.prototype.prev=function(){this.change(this.prevIndex()),this.startInterval()},f.prototype.nextIndex=function(){var e=this.actualIndex+1;return e>=this.imgs.length&&(e=0),e},f.prototype.prevIndex=function(){var e=this.actualIndex-1;return 0>e&&(e=this.imgs.length-1),e},f.prototype.dispose=function(){if(window.clearTimeout(this.interval),this.imgs){for(var e=this.imgs.length;--e>=0;)this.imgs.pop();this.imgs=null}this.containerElem=null,this.interval=null,this.trProp=null,this.trTime=null,this.delay=null,this.startVal=null,this.endVal=null,this.autoPlay=null,this.actualIndex=null,this.inserted=null,this.removed=null,this.remainingTime=null},f}),function(){"use strict";function e(){return{restrict:"EA",templateUrl:"app/components/rightColumn/rightColumn.html",scope:{},controller:"rightColumnController",controllerAs:"vm"}}angular.module("moto").directive("rightColumn",e)}(),function(){"use strict";function e(e){var t=this;e.list(function(e){t.news=e})}angular.module("moto").controller("rightColumnController",e),e.$inject=["news"]}(),/**
 * dirPagination - AngularJS module for paginating (almost) anything.
 *
 *
 * Credits
 * =======
 *
 * Daniel Tabuenca: https://groups.google.com/d/msg/angular/an9QpzqIYiM/r8v-3W1X5vcJ
 * for the idea on how to dynamically invoke the ng-repeat directive.
 *
 * I borrowed a couple of lines and a few attribute names from the AngularUI Bootstrap project:
 * https://github.com/angular-ui/bootstrap/blob/master/src/pagination/pagination.js
 *
 * Copyright 2014 Michael Bromley <michael@michaelbromley.co.uk>
 */
function(){"use strict";function e(e,t,n){function i(i,u){var g=u.dirPaginate,m=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),d=/\|\s*itemsPerPage\s*:[^|\)]*/;if(null===m[2].match(d))throw"pagination directive: the 'itemsPerPage' filter must be set.";var p=m[2].replace(d,""),h=t(p);s(i);var f=u.paginationId||o;return n.registerInstance(f),function(i,s,u){var m=t(u.paginationId)(i)||u.paginationId||o;n.registerInstance(m);var d=a(g,m);r(s,u,d),l(s);var p=e(s),f=c(i,u,m);n.setCurrentPageParser(m,f,i),"undefined"!=typeof u.totalItems?(n.setAsyncModeTrue(m),i.$watch(function(){return t(u.totalItems)(i)},function(e){e>=0&&n.setCollectionLength(m,e)})):i.$watchCollection(function(){return h(i)},function(e){e&&n.setCollectionLength(m,e.length)}),p(i)}}function a(e,t){var n,i=!!e.match(/(\|\s*itemsPerPage\s*:[^|]*:[^|]*)/);return n=t===o||i?e:e.replace(/(\|\s*itemsPerPage\s*:[^|]*)/,"$1 : '"+t+"'")}function r(e,t,n){e[0].hasAttribute("dir-paginate-start")||e[0].hasAttribute("data-dir-paginate-start")?(t.$set("ngRepeatStart",n),e.eq(e.length-1).attr("ng-repeat-end",!0)):t.$set("ngRepeat",n)}function s(e){angular.forEach(e,function(e){1===e.nodeType&&angular.element(e).attr("dir-paginate-no-compile",!0)})}function l(e){angular.forEach(e,function(e){1===e.nodeType&&angular.element(e).removeAttr("dir-paginate-no-compile")}),e.eq(0).removeAttr("dir-paginate-start").removeAttr("dir-paginate").removeAttr("data-dir-paginate-start").removeAttr("data-dir-paginate"),e.eq(e.length-1).removeAttr("dir-paginate-end").removeAttr("data-dir-paginate-end")}function c(e,n,i){var a;if(n.currentPage)a=t(n.currentPage);else{var r=i+"__currentPage";e[r]=1,a=t(r)}return a}return{terminal:!0,multiElement:!0,compile:i}}function t(){return{priority:5e3,terminal:!0}}function n(e){e.put("angularUtils.directives.dirPagination.template",'<ul class="pagination" ng-if="1 < pages.length || !autoHide"><li ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(1)">&laquo;</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a></li><li ng-repeat="pageNumber in pages track by tracker(pageNumber, $index)" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' || ( ! autoHide && pages.length === 1 ) }"><a href="" ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a></li><li ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.last)">&raquo;</a></li></ul>')}function i(e,t){function n(t,n,a,s){function l(n){e.isRegistered(d)&&g(n)&&(t.pages=i(n,e.getCollectionLength(d),e.getItemsPerPage(d),h),t.pagination.current=n,u(),t.onPageChange&&t.onPageChange({newPageNumber:n}))}function c(){if(e.isRegistered(d)){var n=parseInt(e.getCurrentPage(d))||1;t.pages=i(n,e.getCollectionLength(d),e.getItemsPerPage(d),h),t.pagination.current=n,t.pagination.last=t.pages[t.pages.length-1],t.pagination.last<t.pagination.current?t.setCurrent(t.pagination.last):u()}}function u(){if(e.isRegistered(d)){var n=e.getCurrentPage(d),i=e.getItemsPerPage(d),a=e.getCollectionLength(d);t.range.lower=(n-1)*i+1,t.range.upper=Math.min(n*i,a),t.range.total=a}}function g(e){return r.test(e)&&e>0&&e<=t.pagination.last}var m=a.paginationId||o,d=t.paginationId||a.paginationId||o;if(!e.isRegistered(d)&&!e.isRegistered(m)){var p=d!==o?" (id: "+d+") ":" ";s("Pagination directive: the pagination controls"+p+"cannot be used without the corresponding pagination directive, which was not found at link time.")}t.maxSize||(t.maxSize=9),t.autoHide=t.autoHide===angular.isUndefined?!0:t.autoHide,t.directionLinks=angular.isDefined(a.directionLinks)?t.$parent.$eval(a.directionLinks):!0,t.boundaryLinks=angular.isDefined(a.boundaryLinks)?t.$parent.$eval(a.boundaryLinks):!1;var h=Math.max(t.maxSize,5);t.pages=[],t.pagination={last:1,current:1},t.range={lower:1,upper:1,total:1},t.$watch(function(){return e.isRegistered(d)?(e.getCollectionLength(d)+1)*e.getItemsPerPage(d):void 0},function(e){e>0&&c()}),t.$watch(function(){return e.isRegistered(d)?e.getItemsPerPage(d):void 0},function(e,n){e!==n&&"undefined"!=typeof n&&l(t.pagination.current)}),t.$watch(function(){return e.isRegistered(d)?e.getCurrentPage(d):void 0},function(e,t){e!==t&&l(e)}),t.setCurrent=function(t){e.isRegistered(d)&&g(t)&&(t=parseInt(t,10),e.setCurrentPage(d,t))},t.tracker=function(e,t){return e+"_"+t}}function i(e,t,n,i){var r,s=[],o=Math.ceil(t/n),l=Math.ceil(i/2);r=l>=e?"start":e>o-l?"end":"middle";for(var c=o>i,u=1;o>=u&&i>=u;){var g=a(u,e,i,o),m=2===u&&("middle"===r||"end"===r),d=u===i-1&&("middle"===r||"start"===r);c&&(m||d)?s.push("..."):s.push(g),u++}return s}function a(e,t,n,i){var a=Math.ceil(n/2);return e===n?i:1===e?e:i>n?t>i-a?i-n+e:t>a?t-a+e:e:e}var r=/^\d+$/;return{restrict:"AE",templateUrl:function(e,n){return n.templateUrl||t.getPath()},scope:{maxSize:"=?",onPageChange:"&?",paginationId:"=?",autoHide:"=?"},link:n}}function a(e){return function(t,n,i){if("undefined"==typeof i&&(i=o),!e.isRegistered(i))throw"pagination directive: the itemsPerPage id argument (id: "+i+") does not match a registered pagination-id.";var a,r;return t instanceof Array?(n=parseInt(n)||9999999999,r=e.isAsyncMode(i)?0:(e.getCurrentPage(i)-1)*n,a=r+n,e.setItemsPerPage(i,n),t.slice(r,a)):t}}function r(){var e,t={};this.registerInstance=function(n){"undefined"==typeof t[n]&&(t[n]={asyncMode:!1},e=n)},this.isRegistered=function(e){return"undefined"!=typeof t[e]},this.getLastInstanceId=function(){return e},this.setCurrentPageParser=function(e,n,i){t[e].currentPageParser=n,t[e].context=i},this.setCurrentPage=function(e,n){t[e].currentPageParser.assign(t[e].context,n)},this.getCurrentPage=function(e){var n=t[e].currentPageParser;return n?n(t[e].context):1},this.setItemsPerPage=function(e,n){t[e].itemsPerPage=n},this.getItemsPerPage=function(e){return t[e].itemsPerPage},this.setCollectionLength=function(e,n){t[e].collectionLength=n},this.getCollectionLength=function(e){return t[e].collectionLength},this.setAsyncModeTrue=function(e){t[e].asyncMode=!0},this.isAsyncMode=function(e){return t[e].asyncMode}}function s(){var e="angularUtils.directives.dirPagination.template";this.setPath=function(t){e=t},this.$get=function(){return{getPath:function(){return e}}}}var o="__default";angular.module("moto").directive("dirPaginate",e).directive("dirPaginateNoCompile",t).directive("dirPaginationControls",i).filter("itemsPerPage",a).service("paginationService",r).provider("paginationTemplate",s).run(["$templateCache",n]),e.$inject=["$compile","$parse","paginationService"],i.$inject=["paginationService","paginationTemplate"],a.$inject=["paginationService"]}(),function(){"use strict";function e(e,t){var n=this;if(t.list(function(e){n.news=e}),n.filters=[{name:"",filterExpr:""},{name:"f1",filterExpr:{category:"f1"}},{name:"motogp",filterExpr:{category:"motogp"}},{name:"rally",filterExpr:{category:"rally"}},{name:"vintage",filterExpr:{category:"vintage"}},{name:"v8 supercars",filterExpr:{category:"v8 supercars"}}],n.selectedFilter=n.filters[0],e.category)switch(e.category){case"f1":n.selectedFilter=n.filters[1];break;case"motogp":n.selectedFilter=n.filters[2];break;case"rally":n.selectedFilter=n.filters[3];break;case"vintage":n.selectedFilter=n.filters[4];break;case"v8 supercars":n.selectedFilter=n.filters[5]}n.setFilter=function(e){n.selectedFilter=e}}angular.module("moto").controller("NewsController",e),e.$inject=["$routeParams","news"]}(),function(){"use strict";function e(){return{restrict:"E",templateUrl:"app/components/navbar/navbar.html",controller:"NavbarController",controllerAs:"vm",link:function(e){function t(){e.wrapper.classList.contains("show-nav")===!1?(e.wrapper.classList.add("show-nav"),e.navIcon.classList.add("cross")):(e.wrapper.classList.remove("show-nav"),e.navIcon.classList.remove("cross"))}e.wrapper=document.getElementById("site-wrapper"),e.navIcon=document.getElementById("cross"),e.navTag=document.getElementsByClassName("linkName"),e.navIcon.addEventListener("click",t,!1);for(var n=function(){var e=this.nextElementSibling;null!==e&&e.classList.contains("expandItem")===!1?e.classList.add("expandItem"):e.classList.remove("expandItem")},i=0;i<e.navTag.length;i++)e.navTag[i].addEventListener("click",n,!1)}}}angular.module("moto").directive("motoNavbar",e)}(),function(){"use strict";function e(e){var t=this;t.menuClass=function(n){return t.current=e.path().substring(1),n===t.current?"ms-menu__active":""}}angular.module("moto").controller("NavbarController",e),e.$inject=["$location"]}(),function(){"use strict";function e(e,t){return{replace:!0,restrict:"AE",scope:{images:"="},templateUrl:"app/components/carousel/carousel.html",controller:"CarouselarController",controllerAs:"vm",link:function(n,i,a){n.vm.maxImageCount=Math.min(parseInt(a.displayingImageCount),t.MAX_DISPLAYING_IMAGE)||1;var r=angular.element(e);r.bind("resize",n.onResize),n.onResize(),n.$on("$destroy",function(){r.unbind("resize",n.onResize)})}}}function t(e){return{restrict:"E",scope:{isVisible:"=",imgUrl:"@",date:"@",categoryUrl:"@",tag:"@",headingUrl:"@"},template:'<div class="carouselar__loader" ng-if="vm.isLoading"></div>',controller:"CarouselarImageController",controllerAs:"vm",link:function(t,n){t.vm.compileImage=function(){n.append('<img class="carouselar__image" carouselar-loader on-load="vm.onLoad()" ng-src="{{imgUrl}}"/>'),n.append('<date class="carouselar__date">{{date}}</date>'),n.append('<h4 class="carouselar__heading"><a ng-href="news/{{categoryUrl}}/{{headingUrl}}">{{headingUrl}}</a></h4>'),n.append('<span class="carouselar__cat"><a ng-href="news/{{tag}}">{{tag}}</a></span>'),e(n.contents())(t)}}}}function n(){return{restrict:"A",scope:{onLoad:"&"},link:function(e,t){t.bind("load",e.onLoad)}}}angular.module("moto").directive("carouselar",e),e.$inject=["$window","CarouselarConstants"],angular.module("moto").directive("carouselarImage",t),t.$inject=["$compile"],angular.module("moto").directive("carouselarLoader",n)}(),function(){"use strict";function e(e,t,n,i,a,r){function s(t){t&&(o.sectionCount=Math.ceil(o.news.length/e.displayingImageCount),o.moveToSection(o.activeSection),o.singleImageWidth=100/t+"%")}var o=this;a.list(function(e){o.news=e}),o.visibleImages=[],o.maxImageCount=1,e.displayingImageCount=0,o.activeSection=0,o.sectionCount=5,o.containerPosition="translateX(0)",o.singleImageWidth="100%",o.createArray=function(e){return new Array(e||0)},o.prev=function(){o.moveToSection(o.activeSection-1)},o.next=function(){o.moveToSection(o.activeSection+1)},r(function(){o.next()},5e3),o.moveToSection=function(t){t>=o.sectionCount?o.activeSection=0:0>t?o.activeSection=o.sectionCount-1:o.activeSection=t;var n,i,a=100/e.displayingImageCount,r=[];if(o.activeSection===o.sectionCount-1)for(n=(o.news.length-e.displayingImageCount)*a,i=0;i<e.displayingImageCount+1;i++)r.push(o.news.length-i);else{var s=o.activeSection*e.displayingImageCount;for(r.push(s),i=1;i<e.displayingImageCount;i++)r.push(s+i);n=s*a}o.containerPosition="translateX(-"+n+"%)",o.visibleImages=r},o.resizeTimer=null,e.onResize=function(a,r){t.cancel(o.resizeTimer),o.resizeTimer=t(function(){var t=o.maxImageCount,a=r||n.innerWidth;a<i.BREAKPOINTS.LANDSCAPE&&(t=Math.ceil(o.maxImageCount/2),a<i.BREAKPOINTS.PORTRAIT&&(t=1)),e.displayingImageCount=t},i.RESIZE_TIMEOUT)},e.$watch("displayingImageCount",s),o.isImageVisible=function(e){return o.visibleImages.indexOf(e)>-1}}function t(e){function t(e){e&&(n.compileImage(),i())}var n=this;n.isLoading=!0,n.onLoad=function(){n.isLoading=!1,e.$apply()};var i=e.$watch("isVisible",t)}angular.module("moto").controller("CarouselarController",e),e.$inject=["$scope","$timeout","$window","CarouselarConstants","news","$interval"],angular.module("moto").controller("CarouselarImageController",t),t.$inject=["$scope"]}(),function(){"use strict";function e(){return{scope:{newsItem:"="},restrict:"E",templateUrl:"app/components/news/post.html"}}angular.module("moto").directive("post",e)}(),function(){"use strict";function e(e,t,n){n.find(e.articleName,function(e){t.article=e})}angular.module("moto").controller("ArticleController",e),e.$inject=["$routeParams","$scope","news"]}(),function(){"use strict";function e(e){function t(t){e({method:"GET",url:"app/data/articles.json",cache:!0}).success(t)}return{list:t,find:function(e,n){t(function(t){var i=t.filter(function(t){return t.title===e})[0];n(i)})}}}angular.module("moto").factory("news",e),e.$inject=["$http"]}(),function(){"use strict";function e(e){var t=this;e.list(function(e){t.news=e})}angular.module("moto").controller("MainController",e),e.$inject=["news"]}(),function(){"use strict";function e(e){e.debug("runBlock end")}angular.module("moto").run(e),e.$inject=["$log"]}(),function(){"use strict";function e(e,t){e.html5Mode(!1),t.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}).when("/news/:category?",{templateUrl:"app/components/news/news.html",controller:"NewsController",controllerAs:"vm"}).when("/news/:category/:articleName",{templateUrl:"app/components/article/article.html",controller:"ArticleController",controllerAs:"vm"}).otherwise({redirectTo:"/"})}angular.module("moto").config(e),e.$inject=["$locationProvider","$routeProvider"]}(),function(){"use strict";angular.module("moto").constant("CarouselarConstants",{RESIZE_TIMEOUT:1e3,MAX_DISPLAYING_IMAGE:5,BREAKPOINTS:{LANDSCAPE:960,PORTRAIT:640}})}(),function(){"use strict";function e(e){e.debugEnabled(!0)}angular.module("moto").config(e),e.$inject=["$logProvider"]}(),angular.module("moto").run(["$templateCache",function(e){e.put("app/main/main.html",'<section class="ms-container"><section class="mainLeft"><div class="sliderWrp"><moto-slider class="motoSlider mainSlider" slider-instance="slider" current-slide="actualslide" transition-property="opacity" start-value="0" visible-value="1" end-value="0" auto-play="true" transition-delay="4"><figure class="figure" ng-repeat="article in vm.news"><img ng-src="{{article.images.img1}}" alt="{{article.title}}"><figcaption><h2><a ng-href="news/{{article.category}}/{{article.title | encodeURI}}">{{article.title | limitString:true:48:\' ...\'}}</a></h2></figcaption></figure></moto-slider><button type="button" class="sliderWrp__prev" ng-model="actualslide" ng-click="slider.prev()"></button> <button type="button" class="sliderWrp__next" ng-model="actualslide" ng-click="slider.next()"></button></div><div class="mainThm"><div class="mainThm__inner" ng-repeat="article in vm.news | property:\'category\':\'rally\' | orderBy:\'-date\' | limitTo:-4"><img src="{{article.images.img1}}" alt="{{article.title}}"><h4 class="mainThm__inner--title"><a ng-href="news/{{article.category}}/{{article.title | encodeURI}}">{{article.title | limitString:true:50:\' ...\'}}</a></h4><date class="mainThm__inner--date">{{article.date | date:\'medium\'}}</date><p class="mainThm__inner--content">{{article.post.content | limitString:true:200:\' ...\'}}</p><span class="mainThm__inner--cat"><a ng-href="news/{{article.category}}">{{article.category}}</a></span></div></div><div class="sliderWrp gp"><moto-slider class="motoSlider mainSliderGp" slider-instance="slidergp" current-slide="actualslideGp" transition-property="opacity" start-value="0" visible-value="1" end-value="0" auto-play="true"><figure class="figure" ng-repeat="article in vm.news | property:\'category\':\'motogp\'"><img ng-src="{{article.images.img1}}" alt="{{article.title}}"><figcaption><h2><a ng-href="news/{{article.category}}/{{article.title | encodeURI}}">{{article.title | limitString:true:48:\' ...\'}}</a></h2></figcaption></figure></moto-slider><button type="button" class="sliderWrp__prev" ng-model="actualslideGp" ng-click="slidergp.prev()"></button> <button type="button" class="sliderWrp__next" ng-model="actualslideGp" ng-click="slidergp.next()"></button></div><div class="mainThm"><div class="mainThm__inner" ng-repeat="article in vm.news | property:\'category\':\'vintage\' | orderBy:\'-date\' | limitTo:-4"><img src="{{article.images.img1}}" alt="{{article.title}}"><h4 class="mainThm__inner--title"><a ng-href="news/{{article.category}}/{{article.title | encodeURI}}">{{article.title | limitString:true:50:\' ...\'}}</a></h4><date class="mainThm__inner--date">{{article.date | date:\'medium\'}}</date><p class="mainThm__inner--content">{{article.post.content | limitString:true:200:\' ...\'}}</p><span class="mainThm__inner--cat"><a ng-href="news/{{article.category}}">{{article.category}}</a></span></div></div></section><aside class="mainRight"><carouselar displaying-image-count="3"></carouselar><right-column></right-column></aside></section>'),e.put("app/components/article/article.html",'<section class="ms-container"><article class="articleColumn"><img ng-src="{{article.images.img1}}" alt="{{article.post.intro}}"><h3>{{article.title}}</h3><date>{{article.date | date:\'medium\'}}</date><p>{{article.post.intro}}</p><p>{{article.post.content}}</p><h3>{{article.post.subhead}}</h3><p>{{article.post.subcont}}</p><h3>{{article.post.subhead2}}</h3><p>{{article.post.subcont2}}</p><img class="subImg" ng-src="{{article.images.img2}}" alt="{{article.post.intro}}"> <img class="subImg" ng-src="{{article.images.img3}}" alt="{{article.post.intro}}"> <img class="subImg" ng-src="{{article.images.img4}}" alt="{{article.post.intro}}"> <img class="subImg" ng-src="{{article.images.img5}}" alt="{{article.post.intro}}"> <img class="subImg" ng-src="{{article.images.img6}}" alt="{{article.post.intro}}"> <img class="subImg" ng-src="{{article.images.img7}}" alt="{{article.post.intro}}"></article><aside class="articleRightColumn"><right-column></right-column></aside><nav><ul><li><a ng-href="news">Back to News</a></li><li><a ng-href="/">Back to Home</a></li></ul></nav></section>'),e.put("app/components/carousel/carousel.html",'<div class="ms-container carouselar"><div class="carouselar__navigation"><span class="carouselar__navigation__button carouselar__navigation__button--prev" ng-click="vm.prev()">PREV</span><div class="carouselar__navigation__index"><span class="carouselar__navigation__button carouselar__navigation__button--index" ng-repeat="i in vm.createArray(vm.sectionCount) track by $index" ng-class="{carouselar__navigation__button__active: $index === vm.activeSection}" ng-click="vm.moveToSection($index)">{{$index + 1}}</span></div><span class="carouselar__navigation__button carouselar__navigation__button--next" ng-click="vm.next()">NEXT</span></div><div class="carouselar__container"><div class="carouselar__inner-container" ng-style="{transform: vm.containerPosition}"><carouselar-image class="carouselar__image-container" ng-style="{width: vm.singleImageWidth}" ng-repeat="article in vm.news" is-visible="vm.isImageVisible($index)" img-url="{{article.images.img1}}" date="{{article.date | date:\'medium\'}}" category-url="{{article.category}}" heading-url="{{article.title}}" tag="{{article.category}}"></carouselar-image></div></div></div>'),e.put("app/components/navbar/navbar.html",'<div class="topnav"><div id="cross" class="topnav__icon"><span class="topnav__icon--item one"></span> <span class="topnav__icon--item two"></span> <span class="topnav__icon--item three"></span></div></div><nav class="ms-container ms-navbar"><ul class="ms-menu"><li ng-class="menuClass(\'#/\')"><a class="linkName" href="/">Home</a></li><li ng-class="menuClass(\'news\')"><a class="linkName" ng-href="news">Latest News</a><ul class="sub_Menu"><li class="sub_Link" ng-class="menuClass(\'#/news/f1\')"><a ng-href="news/f1">Formula 1 News</a></li><li class="sub_Link" ng-class="menuClass(\'#/news/motogp\')"><a ng-href="news/motogp">Moto GP News</a></li><li class="sub_Link" ng-class="menuClass(\'#/news/rally\')"><a ng-href="news/rally">World Rallycross</a></li><li class="sub_Link" ng-class="menuClass(\'#/news/vintage\')"><a ng-href="news/vintage">Vintage</a></li><li class="sub_Link" ng-class="menuClass(\'#/news/v8 supercars\')"><a ng-href="news/v8 supercars">V8 Supercars</a></li></ul></li><li ng-class="menuClass(\'gallery\')"><a class="linkName" ng-href="gallery">Gallery</a></li><li ng-class="menuClass(\'about\')"><a class="linkName" ng-href="about">About</a></li><li ng-class="menuClass(\'contact\')"><a class="linkName" ng-href="contact">Contact</a></li></ul></nav>'),e.put("app/components/news/news.html",'<section class="ms-container"><section class="newsColumn"><h4>Latest News</h4><figure class="newsItem" dir-paginate="article in vm.news | filter:vm.selectedFilter.filterExpr | startsWithLetter:letter | orderBy:\'-date\' | itemsPerPage: 10"><img src="{{article.images.img1}}" alt="{{article.title}}"><figcaption><h3 class="newsItem__title" ng-href="news/{{article.category}}/{{article.title | encodeURI}}"><a ng-href="news/{{article.category}}/{{article.title | encodeURI}}">{{article.title}}</a></h3><p class="newsItem__intro">{{article.post.intro}}</p><date class="newsItem__date">{{article.date | date:\'medium\'}}</date><span class="newsItem__cat">{{article.category}}</span></figcaption></figure><dir-pagination-controls></dir-pagination-controls><a ng-href="/">Back to Home</a></section><aside class="rightColumn"><right-column></right-column></aside></section>'),e.put("app/components/rightColumn/rightColumn.html",'<aside class="rightColumnModule"><article class="left"><h3>V8 Supercars</h3><div class="motoThumbs supercars" ng-repeat="article in vm.news | property:\'category\':\'v8 supercars\' | orderBy:\'-date\' | limitTo:-3"><img src="{{article.images.img1}}" alt="{{article.title}}"><h4 class="motoThumbs__title"><a ng-href="news/{{article.category}}/{{article.title | encodeURI}}">{{article.title}}</a></h4><date class="motoThumbs__date">{{article.date | date:\'medium\'}}</date><p class="motoThumbs__intro">{{article.post.content | limitString:true:200:\' ...\'}}</p><span class="motoThumbs__cat"><a ng-href="news/{{article.category}}">{{article.category}}</a></span></div><h3>Vintage Cars</h3><div class="motoThumbs vintage" ng-repeat="article in vm.news | property:\'category\':\'vintage\' | orderBy:\'-date\' | limitTo:-3"><img src="{{article.images.img1}}" alt="{{article.title}}"><h4 class="motoThumbs__title"><a ng-href="news/{{article.category}}/{{article.title | encodeURI}}">{{article.title}}</a></h4><date class="motoThumbs__date">{{article.date | date:\'medium\'}}</date><p class="motoThumbs__intro">{{article.post.content | limitString:true:200:\' ...\'}}</p><span class="motoThumbs__cat"><a ng-href="news/{{article.category}}">{{article.category}}</a></span></div></article><article class="right"><h3>Categories</h3><menu><ul><li></li></ul></menu><h3>Videos</h3><div class="videos" ng-repeat="article in vm.news | property:\'category\':\'motogp\' | orderBy:\'-date\' | limitTo:5"><video controls=""><source src="{{article.video}}" type="video/mp4">Your browser does not support the <code>video</code> element.</video><date class="videos__date">{{article.date | date:\'medium\'}}</date><h4 class="videos__title"><a ng-href="news/{{article.category}}/{{article.title | encodeURI}}">{{article.title | limitString:true:100:\' ...\'}}</a></h4><span class="videos__cat"><a ng-href="news/{{article.category}}">{{article.category}}</a></span></div></article></aside>')}]);
//# sourceMappingURL=../maps/scripts/app-b785f88cde.js.map
