"use strict";
var app = angular.module("BookLibrary", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/books', {
        templateUrl: 'templates/bookList.html',
        controller: BookListCtrl
    });

    $routeProvider.when('/newbook', {
        templateUrl: 'templates/newbook.html',
        controller: NewBookCtrl
    });

    $routeProvider.otherwise({redirectTo: '/books'});
}]);

app.filter("arrayToString", function () {
    return function (input) {
        return input.join(", ");
    };
});

function BookListCtrl($scope, $http) {
    $scope.testMsg = "working! ASDASDASD";

    $scope.fetchBooks = function () {
        $http.get("app/books/books.json").success(function (list) {
            $scope.books = list;
            $scope.books[0].authors.push("asd");
        });
    };

    $scope.fetchBooks();
}

function NewBookCtrl($scope, $http) {
    $scope.newBook = {name: "", isbn: "", authors: [""], publishers: [""]};

    $scope.removeAuthor = function (index) {
        $scope.newBook.authors.splice(index, 1);
    };

    $scope.addAuthor = function () {
        $scope.newBook.authors.push("");
    };

    $scope.removePublisher = function (index) {
        $scope.newBook.publishers.splice(index, 1);
    };

    $scope.addPublisher = function () {
        $scope.newBook.publishers.push("");
    };
}