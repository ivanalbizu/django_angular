(function() {
  'use strict';

  angular.module('angularApp')
    .factory('BookServices', BookServices)
    .factory('BooksServices', BooksServices)
    .factory('AuthorServices', AuthorServices)
    .factory('AuthorsServices', AuthorsServices);


    BookServices.$inject = ['$resource', 'URL_API'];
    function BookServices($resource, URL_API) {
      return $resource(
        URL_API.BOOK, {}, {
          get: {method: 'GET', cache: false, isArray: false},
          save: {method: 'POST', cache: false, isArray: false},
          update: {method: 'PUT', cache: false, isArray: false},
          delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }

    BooksServices.$inject = ['$resource', 'URL_API'];
    function BooksServices($resource, URL_API) {
      return $resource(
        URL_API.BOOKS, {}, {
          get: {method: 'GET', cache: false, isArray: true}
        });
    }

    AuthorServices.$inject = ['$resource', 'URL_API'];
    function AuthorServices($resource, URL_API) {
      return $resource(
        URL_API.AUTHOR, {}, {
          get: {method: 'GET', cache: false, isArray: false},
          save: {method: 'POST', cache: false, isArray: false},
          update: {method: 'PUT', cache: false, isArray: false},
          delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }

    AuthorsServices.$inject = ['$resource', 'URL_API'];
    function AuthorsServices($resource, URL_API) {
      return $resource(
        URL_API.AUTHORS, {}, {
          get: {method: 'GET', cache: false, isArray: true}
        });
    }

  })();
