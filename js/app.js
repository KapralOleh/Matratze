var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("json/headers.json")
    .success(function(response) {$scope.headers = response});
    $scope.show = false;
	$scope.buttonShow = function () {
		$scope.show = !$scope.show;
	};	
});

app.controller("ReviewController", function(){
  	this.review = {};
  	
  	this.addReview = function(product){
  		//this.review = {createdOn: Date.now()};
  		product.reviews.push(this.review);
  		  	this.review = {};


  	};
  });

