'use strict';

angular.module('angularApp')

  .controller('BookCtrl', ['$scope', 'BooksServices',
    function ($scope, BooksServices) {
      BooksServices.get({},
        function success(response) {
          $scope.books = response;
        },
        function error(errorResponse) {
          console.log("Error:"	+	JSON.stringify(errorResponse));
        }
      )
  }])

  .controller('CurrentBookCtrl', ['$scope', '$routeParams', '$location', 'BookServices',
    function ($scope, $routeParams, $location, BookServices) {

      var bookId = $routeParams.id;

      BookServices.get({id: bookId},
        function success(response) {
          JSON.stringify(response);
          $scope.book = response;
        },
        function error(errorResponse) {
          console.log("Error:"	+	JSON.stringify(errorResponse));
        }
      );

      $scope.delete = function(bookId) {
        BookServices.delete({id: bookId},
          function success(response) {
            $location.path('/');
          },
          function error(errorResponse) {
            console.log("Error:"	+	JSON.stringify(errorResponse));
          }
        )
      };

      $scope.update = function(data) {
        BookServices.update({id: bookId}, data,
          function success(response) {
            $location.path('/');
          },
          function error(errorResponse) {
            console.log("Error:"	+	JSON.stringify(errorResponse));
          }
        )
      };

  }])

  .controller('NewBookCtrl', ['$scope', '$location', 'BookServices', '$controller',
    function ($scope, $location, BookServices, $controller) {
      $scope.save = function(data) {
        BookServices.save(data,
          function success(response) {
            $location.path('/');
          },
          function error(errorResponse) {
            alert("Campos incompletos");
          }
        )
      };

  }]);
