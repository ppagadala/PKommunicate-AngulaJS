'use strict';

/* Services */

var pkommunicateServices = angular.module('pkommunicateServices', ['ngResource']);

pkommunicateServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
  
pkommunicateServices.factory('question', ['$resource',
  function($resource){
    return $resource('posts/categories.json', {}, {
      categories: {method:'GET', isArray:true}
    });
  }]);  
  
pkommunicateServices.factory('posts', ['$resource',
  function($resource){
    return $resource('posts/posts.json', {}, {
           search: { method:'GET', isArray:true }
    });
  }]);

pkommunicateServices.factory('post', ['$resource',
  function($resource){
    return $resource('posts/:postId.json', {}, {
           query: { method:'GET', params:{postId:'@postId'}}
    });
  }]);  

  
  
