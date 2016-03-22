(function() {
  'use strict';

  angular.module('angularApp')
    .factory('BookServices', BookServices)
    .factory('BooksServices', BooksServices)
    .factory('AuthorServices', AuthorServices)
    .factory('AuthorsServices', AuthorsServices);


    BookServices.$inject = ['$resource'];
    function BookServices($resource) {
      return $resource(
        'http://127.0.0.1:8000/books/:id', {}, {
          get: {method: 'GET', cache: false, isArray: false},
          save: {method: 'POST', cache: false, isArray: false},
          update: {method: 'PUT', cache: false, isArray: false},
          delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }

    BooksServices.$inject = ['$resource'];
    function BooksServices($resource) {
      return $resource(
        'http://127.0.0.1:8000/books', {}, {
          get: {method: 'GET', cache: false, isArray: true}
        });
    }

    AuthorServices.$inject = ['$resource'];
    function AuthorServices($resource) {
      return $resource(
        'http://127.0.0.1:8000/authors/:id', {}, {
          get: {method: 'GET', cache: false, isArray: false},
          save: {method: 'POST', cache: false, isArray: false},
          update: {method: 'PUT', cache: false, isArray: false},
          delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }

    AuthorsServices.$inject = ['$resource'];
    function AuthorsServices($resource) {
      return $resource(
        'http://127.0.0.1:8000/authors', {}, {
          get: {method: 'GET', cache: false, isArray: true}
        });
    }

  })();
