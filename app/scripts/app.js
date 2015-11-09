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
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/book/books.html',
        controller: 'BookCtrl',
      })
      .when('/books/:id', {
        templateUrl: 'views/book/book.html',
        controller: 'CurrentBookCtrl',
      })
      .when('/book-new', {
        templateUrl: 'views/book/book-new.html',
        controller: 'NewBookCtrl',
      })
      .when('/authors', {
        templateUrl: 'views/author/authors.html',
        controller: 'AuthorsCtrl',
      })
      .when('/authors/:id', {
        templateUrl: 'views/author/author.html',
        controller: 'CurrentAuthorCtrl',
      })
      .when('/author-new', {
        templateUrl: 'views/author/author-new.html',
        controller: 'NewAuthorCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });

      //No Necesario para GET
      //$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

  });
