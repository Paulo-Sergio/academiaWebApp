angular.module('starter')
.controller('controllerTest', function($scope, $cordovaToast, $cordovaFile, $cordovaCamera, $cordovaGeolocation){

  /**
  ****** MOSTRANDO PLUGIN DO TOAST
  */
  $scope.mostrarToast = function(){
    $cordovaToast.showLongBottom('Mostrando mensagem');
  };

  /**
  ****** MOSTRANDO PLUGIN DE ESCRITA E LEITURA DE DOCUMENTOS
  */
  $scope.gravar = function(){
    $cordovaFile.writeFile(cordova.file.dataDirectory, "DATA.txt", "Data: " + new Date(), true)
      .then(function(success){
        //success
        $cordovaToast.showLongBottom('Gravado com sucesso');
      }, function(error){
        //error
        $cordovaToast.showLongBottom('Erro ao gravar');
      });
  };

  $scope.ler = function(){
    $cordovaFile.readAsText(cordova.file.dataDirectory, "DATA.txt")
      .then(function(success){
        //success
        $cordovaToast.showLongBottom('Lido com sucesso');
        $scope.conteudoArquivo = success;
      }, function(error){
        //error
        $cordovaToast.showLongBottom('Erro ao ler');
      });
  };


  /**
  ****** MOSTRANDO PLUGIN DE CAMERA
  */
  $scope.tirarFoto = function(){
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      saveToPhotoAlbum: false,
	    correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(
      function(imageData){
        $scope.imagem = "data:image/jpeg;base64," + imageData;
      },
      function(err){
        //error
      });
  };

  /**
  ****** MOSTRANDO GEOLOCALIZACAO (GPS)
  */
  $scope.getLocalizacao = function(){
    var posOptions = {timeout: 10000, enableHighAccuracy: false};

    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        $scope.localizacao = position.coords.latitude + ' - ' + position.coords.longitude;
      }, function(err) {
        // error
      });
  };

});
