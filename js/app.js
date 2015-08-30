var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("json/headers.json")
    .success(function(response) {$scope.headers = response});
});


