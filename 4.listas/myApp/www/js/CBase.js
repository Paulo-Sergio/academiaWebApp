angular.module('starter')
.controller('CBase', function($scope){

  $scope.dadosLista = [];

  $scope.dadosLista = [
    {nome: "usuario 1", endereco: "Rua teste,123 - SP -BR"},
    {nome: "usuario 2", endereco: "Rua teste,123 - SP -BR"},
    {nome: "usuario 3", endereco: "Rua teste,123 - SP -BR"}
  ];

  $scope.CLICK = function(obj){
    console.log(obj); //traz todo o objeto
    console.log(obj.nome); //traz atributo nome do objeto
  }

})
