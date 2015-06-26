'use strict';

/* App Module */

var pkommunicateApp = angular.module('pkommunicateApp', [
  'ngRoute',
  'pkommunicateAnimations',
  'pkommunicateControllers',
  'pkommunicateDirectives',
  'pkommunicateFilters',
  'pkommunicateProviders',
  'pkommunicateServices'
]);

pkommunicateApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	  when('/home', {
        templateUrl: 'partials/user-home.html',
        controller: 'UserHomeCtrl'
      }).
	  when('/post', {
        templateUrl: 'partials/user-create-post.html',
        controller: 'CreatePostCtrl'
      }).
	  when('/search', {
        templateUrl: 'partials/posts-search.html',
        controller: 'PostsSearchCtrl'
      }).
	  when('/posts/:postId', {
        templateUrl: 'partials/post-detail.html',
        controller: 'PostDetailCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
