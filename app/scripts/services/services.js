'use strict';

angular.module('angularApp')
  .factory('BookServices', ['$resource',
    function($resource) {
      return $resource(
        'http://127.0.0.1:8000/books/:id', {}, {
          get: {method: 'GET', cache: false, isArray: false},
          save: {method: 'POST', cache: false, isArray: false},
          update: {method: 'PUT', cache: false, isArray: false},
          delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }])
  .factory('BooksServices', ['$resource',
    function($resource) {
      return $resource(
        'http://127.0.0.1:8000/books', {}, {
          get: {method: 'GET', cache: false, isArray: true}
        });
    }])

  .factory('AuthorServices', ['$resource',
    function($resource) {
      return $resource(
        'http://127.0.0.1:8000/authors/:id', {}, {
          get: {method: 'GET', cache: false, isArray: false},
          save: {method: 'POST', cache: false, isArray: false},
          update: {method: 'PUT', cache: false, isArray: false},
          delete: {method: 'DELETE', cache: false, isArray: false}
        });
    }])
  .factory('AuthorsServices', ['$resource',
    function($resource) {
      return $resource(
        'http://127.0.0.1:8000/authors', {}, {
          get: {method: 'GET', cache: false, isArray: true}
        });
    }])
    ;
