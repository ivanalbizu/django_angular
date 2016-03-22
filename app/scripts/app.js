(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name angularApp
   * @description
   * # angularApp
   *
   * Main module of the application.
   */
  angular
    .module('angularApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ui.bootstrap'
    ])
    .config(config);

    function config($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/book/books.html',
          controller: 'BookCtrl',
          controllerAs: 'vm'
        })
        .when('/books/:id', {
          templateUrl: 'views/book/book.html',
          controller: 'CurrentBookCtrl',
          controllerAs: 'vm'
        })
        .when('/book-new', {
          templateUrl: 'views/book/book-new.html',
          controller: 'NewBookCtrl',
          controllerAs: 'vm'
        })
        .when('/authors', {
          templateUrl: 'views/author/authors.html',
          controller: 'AuthorsCtrl',
          controllerAs: 'vm'
        })
        .when('/authors/:id', {
          templateUrl: 'views/author/author.html',
          controller: 'CurrentAuthorCtrl',
          controllerAs: 'vm'
        })
        .when('/author-new', {
          templateUrl: 'views/author/author-new.html',
          controller: 'NewAuthorCtrl',
          controllerAs: 'vm'
        })
        .otherwise({
          redirectTo: '/'
        });

        //No Necesario para GET
        //$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }
})();
