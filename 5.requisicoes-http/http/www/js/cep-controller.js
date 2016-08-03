angular.module('starter')
.controller('cep', CEP);

function CEP($http, $scope){

  $scope.cep = '';

  $scope.buscaCep = function(){

    if($scope.cep){

      //http://api.postmon.com.br/v1/cep/{cep}
      $http.get('http://api.postmon.com.br/v1/cep/' + $scope.cep)
      .then(
        function(dados){
          //SUCESSO
          console.info('SUCESSO');
          console.log(dados);

          //JSON.stringify(dados.data); todo o obj que veio da requisição
          $scope.texto = JSON.stringify(dados.data);
        },
        function(erro){
          //ERRO
          console.info('ERRO');
          console.log(erro);
        }
      );
    }

  }

}
