angular.module('project', ['ngRoute'])
.config(function($routeProvider){

  $routeProvider
  .when('/', {
    template: 'TELA 1'
  })
  .when('/222', {
    template: 'TELA 2'
  })
  .otherwise({
    redirectTo: '/'
  });

});
