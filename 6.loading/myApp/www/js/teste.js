angular.module('starter')
.controller('teste', function($scope, $ionicLoading, $http){

  $scope.teste = "variavel teste";

  $scope.call = function(){

    $ionicLoading.show({
      template: 'Carregando...'
    });

    $http.get('https://jsonplaceholder.typicode.com/posts')
    .then(
      function(sucess){
        $scope.retorno = sucess;
        $ionicLoading.hide();
      },
      function(error){
        $scope.retorno = error;
        $ionicLoading.hide();
      }
    );

  };

});
