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
      $stateProvider
      .state('projects.reReddit', {
        url: '/projects',
        templateUrl: 'html/projects-partials/reReddit.html'
      })
      $stateProvider
      .state('projects.shoppingCart', {
        url: '/projects',
        templateUrl: 'html/projects-partials/shoppingCart.html'
      })
      $stateProvider
      .state('projects.devourer', {
        url: '/projects',
        templateUrl: 'html/projects-partials/Devourer.html'
      })
      $stateProvider
      .state('projects.repositories', {
        url: '/projects',
        templateUrl: 'html/projects-partials/repositories.html'
      })
  })