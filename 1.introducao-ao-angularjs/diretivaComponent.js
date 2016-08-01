angular.module('app', [])
.controller('controller_xxx', function($scope, $locale){

  $scope.dados_ = [0,1,2,3,4,5,6];

}).directive('painel', function(){

  return {
    restrict: 'E',
    transclude: true,
    scope: {
      texto: '@',
      dados: '='
    },
    template: '<div ng-repeat="eee in dados">{{$parent.texto}} - {{eee}}</div>',
    replacec: true
  };

});
