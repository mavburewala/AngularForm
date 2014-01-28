'use strict';

/* Controllers */
angular.module('myApp.controllers', []);
angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',function($scope) {
  	$scope.Fields = [
      { Name: "ID", Type: "number", Data:null },
      { Name: "Name", Type: "text", Data:null }
    ];
  $scope.FieldData = {ID:1,Name:'nadeem'}; //{fieldname: fielddata}
  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('dynController',['$scope',function($scope){
  	$scope.click = function(arg) {
    alert('Clicked ' + arg);
  }
  $scope.html ='<div id="menu" style="border-style:solid;border-color:#ff0000 #0000ff;height:200px;width:100px;float:left;margin-left:10%;">';
  //$scope.html = '<a ng-click="click(1)" href="#">Click me</a>';
  }]);