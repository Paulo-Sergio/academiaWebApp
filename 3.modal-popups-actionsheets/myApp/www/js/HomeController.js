angular.module('starter')
.controller('Home', function($scope, $ionicModal, $ionicPopup, $ionicActionSheet){

  $ionicModal.fromTemplateUrl('views/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.modal = modal;
  });

  $scope.abreModal = function(){
    $scope.modal.show();
  }

  $scope.fecharModal = function(){
    $scope.modal.hide();
  }

  $scope.abrePopup = function(){
    $ionicPopup.show({
      template: 'CONTEUDO',
      title: 'Solicitação',
      subTitle: 'Uso pontual',
      scope: $scope,
      buttons: [
        {text: 'Cancelar'},
        {
          text: 'OK',
          onTap: function(e){
            console.log('Tapped1!', e);
            return "OK";
          }
        }
      ]
    }).then(function(res){
      console.log('Tapped!', res);
    });
  }

  $scope.abreActionSheet = function(){
    $ionicActionSheet.show({
      buttons: [
        {text: '<b>Testar</b> isso'},
        {text: 'Apenas ver'}
      ],
      destructiveText: 'NADA',
      titleText: 'O que quer fazer?',
      cancelText: 'CANCELAR',
      cancel: function(){
        console.log('CANCELADO');
      },
      destructiveButtonClicked: function(){
        console.log('NADA');
        return true; //para fechar
      },
      buttonClicked: function(index){
        console.log('Selecionado:' + index);
        return true; //para fechar
      }
    });
  }

});
