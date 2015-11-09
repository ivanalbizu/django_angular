'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:AutoresCtrl
 * @description
 * # AutoresCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('AuthorsCtrl', ['$scope', 'AuthorsServices',
    function ($scope, AuthorsServices) {
      AuthorsServices.get({},
        function success(response) {
          $scope.authors = response;
        },
        function error(errorResponse) {
          console.log("Error:"	+	JSON.stringify(errorResponse));
        }
      )
  }])

  .controller('CurrentAuthorCtrl', ['$scope', '$routeParams', '$location', 'AuthorServices',
    function ($scope, $routeParams, $location, AuthorServices) {

      var authorId = $routeParams.id;

      AuthorServices.get({id: authorId},
        function success(response) {
          JSON.stringify(response);
          $scope.author = response;
        },
        function error(errorResponse) {
          console.log("Error:"	+	JSON.stringify(errorResponse));
        }
      );

      $scope.delete = function(authorId) {
        AuthorServices.delete({id: authorId},
          function success(response) {
            $location.path('/');
          },
          function error(errorResponse) {
            console.log("Error:"	+	JSON.stringify(errorResponse));
          }
        )
      };

      $scope.update = function(data) {
        AuthorServices.update({id: authorId}, data,
          function success(response) {
            $location.path('#/authors');
          },
          function error(errorResponse) {
            console.log("Error:"	+	JSON.stringify(errorResponse));
          }
        )
      };

  }])

  .controller('NewAuthorCtrl', ['$scope', '$location', 'AuthorServices', '$controller',
    function ($scope, $location, AuthorServices, $controller) {
      $scope.save = function(data) {
        AuthorServices.save(data,
          function success(response) {
            $location.path('#/authors');
          },
          function error(errorResponse) {
            alert("Campos incompletos");
          }
        )
      };

  }]);
