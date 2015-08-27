angular.module('app', [
  'ui.router',
  'ui.bootstrap',
  'homepage'
  ])

.config(router)


router.$inject = ['$urlRouterProvider', '$stateProvider', '$httpProvider'];



function router($urlRouterProvider, $stateProvider, $httpProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('homepage',{
      url: '/',
      templateUrl: './homepage/homepageTemplate.html',
      controller: 'homepageController'
    })
}