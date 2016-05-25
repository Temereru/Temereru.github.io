var app = angular.module('main', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'html/home.html'
      });
    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'html/projects.html'
      })
  })