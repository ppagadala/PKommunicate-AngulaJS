'use strict';

/* Controllers */

var pkommunicateControllers = angular.module('pkommunicateControllers', []);

  
pkommunicateControllers.controller('indexCtrl', ['$scope',
  function($scope) {
	$scope.user = 'Hello Pradeep';
    $scope.date = new Date();
  }]);
  
pkommunicateControllers.controller('UserHomeCtrl', ['$scope',
  function($scope) {
	
}]);
 
pkommunicateControllers.controller('CreatePostCtrl', ['$scope','$location','question',
  function($scope,$location,question) {
    $scope.categories = question.categories();
	$scope.files = function(element){
		 $scope.photofiles = element.files;
		 $scope.photofilesLength = element.files.length;
		 $scope.file = [];
		 if (window.File && window.FileList && window.FileReader) {
			for (var i = 0; i < $scope.photofiles.length  ; i++){
				var file = $scope.photofiles[i];
				//Only pics
				if (!file.type.match('image')) continue;		
				var picReader = new FileReader();
				 picReader.addEventListener("loadend",function(event){	
					var picFile = event.target;
					$scope.file.push(picFile.result);
				});
				//Read the image
                picReader.readAsDataURL(file); 
			}
		}else{
			console.log("Your browser does not support File API");
		} 
	};
	$scope.save = function() {
		$scope.$broadcast('show-errors-check-validity');    
		if ($scope.createPostForm.$valid) {
		  alert('User saved');
		  $scope.reset();
		}
	};
  
	$scope.reset = function() {
		$scope.$broadcast('show-errors-reset');
		$scope.user = { name: '', email: '', phone: '' };
		$scope.question = { title: '', category: '', description: '' };
	};	
	$scope.cancel = function() {
		$location.path('/home');
	};	
  }]); 
 
   
pkommunicateControllers.controller('PostsSearchCtrl', ['$scope','question','posts',
  function($scope,question,posts) {
	$scope.categories = question.categories();
	$scope.showResults = false;
	$scope.search = function(){
			$scope.showResults = true;
			$scope.searchResults = posts.search();
	};	  
	$scope.reset = function() {
		$scope.showResults = false;
		$scope.$broadcast('show-errors-reset');
		$scope.user = { name: ''};
		$scope.question = { title: '', category: ''};
	};
}]);

pkommunicateControllers.controller('PostDetailCtrl', ['$scope','$location','$routeParams','post',
  function($scope,$location,$routeParams,post) {
		
	$scope.postDetail = post.query({postId: $routeParams.postId});
	$scope.cancel = function() {
		$location.path('/search');
	};
		
}]);
