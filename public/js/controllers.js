'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
  
  $http.get('/algos').success(function(data)
  {
  this.sortingAlgos = data;

   });

  
}

function MyCtrl1() {}
MyCtrl1.$inject = [];

function AlgoCtrl($scope,$http)
{
$http.get('/algos').success(function(data)
{
this.sortingAlgos = data;

}


);
}

function MyCtrl2() {
}
MyCtrl2.$inject = [];
