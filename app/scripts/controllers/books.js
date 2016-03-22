(function() {
  'use strict';

  angular.module('angularApp')
    .controller('BookCtrl', BookCtrl)
    .controller('CurrentBookCtrl', CurrentBookCtrl)
    .controller('NewBookCtrl', NewBookCtrl);


    //Controller
    BookCtrl.$inject = ['$rootScope', 'BooksServices'];
    function BookCtrl($rootScope, BooksServices) {

      var vm = this;
      var books = [];

      BooksServices.get({},
        function success(response) {
          vm.books = response;
        },
        function error(errorResponse) {
          console.log("Error:"	+	JSON.stringify(errorResponse));
        }
      )
    };

    //Controller
    CurrentBookCtrl.$inject = ['$rootScope', '$routeParams', '$location', 'BookServices'];
    function CurrentBookCtrl ($rootScope, $routeParams, $location, BookServices) {

      var vm = this;
      var book = {};

      var bookId = $routeParams.id;

      BookServices.get({id: bookId},
        function success(response) {
          JSON.stringify(response);
          vm.book = response;
        },
        function error(errorResponse) {
          console.log("Error:"	+	JSON.stringify(errorResponse));
        }
      );

      vm.deleteBook = function(id) {
        console.log('evento deleteBook');
        BookServices.delete({id: bookId},
          function success(response) {
            $location.path('/');
          },
          function error(errorResponse) {
            console.log("Error:"	+	JSON.stringify(errorResponse));
          }
        );
      }

      vm.updateBook = function(data) {
        console.log('evento updateBook');
        BookServices.update({id: bookId}, data,
          function success(response) {
            $location.path('/');
          },
          function error(errorResponse) {
            console.log("Error:"	+	JSON.stringify(errorResponse));
          }
        )
      }
    };

    //Controller
    NewBookCtrl.$inject = ['$rootScope', '$location', 'BookServices', '$controller', '$uibModal'];
    function NewBookCtrl ($rootScope, $location, BookServices, $controller, $uibModal) {

      var vm = this;

      vm.saveBook = function(data) {
        BookServices.save(data,
          function success(response) {
            $location.path('/');
          },
          function error(errorResponse) {
            alert("Campos incompletos");
          }
        )
      };


      vm.open = function (size, authorsItem) {

        var modalInstance = $uibModal.open({
          templateUrl: './views/book/modal-list-authors.html',
          controller: function($rootScope, $uibModalInstance) {
            $rootScope.authorsItem = authorsItem;
            $rootScope.selected = {
              authorItem: $rootScope.authorsItem[0],
            };

            window.onhashchange = function() {
              $uibModalInstance.dismiss('cancel');
            };

            $rootScope.ok = function () {
              $uibModalInstance.close($rootScope.selected.authorItem);
            };

            $rootScope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          },
          size: size,
          resolve: {
            authorsItem: function () {
              return $rootScope.authorsItem;
            }
          }
        });

      };

      var AuthorsCtrl = $controller('AuthorsCtrl');
      AuthorsCtrl.getAll();
      $rootScope.AuthorsCtrl = AuthorsCtrl;

    };

})();
