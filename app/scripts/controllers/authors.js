(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name angularApp.controller:AutoresCtrl
   * @description
   * # AutoresCtrl
   * Controller of the angularApp
   */
  angular.module('angularApp')
    .controller('AuthorsCtrl', AuthorsCtrl)
    .controller('CurrentAuthorCtrl', CurrentAuthorCtrl)
    .controller('NewAuthorCtrl', NewAuthorCtrl);

    //Controller
    AuthorsCtrl.$inject = ['$rootScope', 'AuthorsServices'];
    function AuthorsCtrl($rootScope, AuthorsServices) {

      var vm = this;
      var authors = [];

      vm.getAll = function() {
        AuthorsServices.get({},
          function success(response) {
            vm.authors = response;
          },
          function error(errorResponse) {
            console.log("Error:"	+	JSON.stringify(errorResponse));
          }
        );
        //console.log('Entra por controlador: "NewBookCtrl"');
      }
    }

    //Controller
    CurrentAuthorCtrl.$inject = ['$rootScope', '$routeParams', '$location', 'AuthorServices'];
    function CurrentAuthorCtrl($rootScope, $routeParams, $location, AuthorServices) {

      var vm = this;
      var author = {};

      var authorId = $routeParams.id;

      AuthorServices.get({id: authorId},
        function success(response) {
          JSON.stringify(response);
          vm.author = response;
        },
        function error(errorResponse) {
          console.log("Error:"	+	JSON.stringify(errorResponse));
        }
      );

      vm.deleteAuthor = function(authorId) {
        AuthorServices.delete({id: authorId},
          function success(response) {
            $location.path('/');
          },
          function error(errorResponse) {
            console.log("Error:"	+	JSON.stringify(errorResponse));
          }
        );
      };

      vm.updateAuthor = function(data) {
        AuthorServices.update({id: authorId}, data,
          function success(response) {
            $location.path('#/authors');
          },
          function error(errorResponse) {
            console.log("Error:"	+	JSON.stringify(errorResponse));
          }
        );
      };
    }

    //Controller
    NewAuthorCtrl.$inject = ['$rootScope', '$location', 'AuthorServices'];
    function NewAuthorCtrl($rootScope, $location, AuthorServices) {

      var vm = this;

      vm.saveAuthor = function(data) {
        AuthorServices.save(data,
          function success(response) {
            $location.path('#/authors');
          },
          function error(errorResponse) {
            alert("Campos incompletos");
          }
        );
      };
    }

})();
