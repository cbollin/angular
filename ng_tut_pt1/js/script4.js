var app4 = angular.module('app4', []);

app4.controller('eventCtrl', function($scope){
  $scope.blur = 0;
  $scope.click = 0;
  $scope.dblclick = 0;
  $scope.copy = 0;
  $scope.paste = 0;
  $scope.cut = 0;
  $scope.focus = 0;
  $scope.change = 0;
  $scope.keydown = function(e){
    $scope.kdKey = String.fromCharCode(e.keyCode);
  };
  $scope.mouseenter=0;
  $scope.mouseleave=0;

  $scope.disableButton = true;

  $scope.dayTimeButton = true;

  $scope.capitals = [
    {"City" : "Seattle", "State" : "WA"}, {"City" : "KC", "State" : "Kansas"}
  ];

});
