"use strict";
var app = angular.module("BookLibrary", ["ngRoute", "ngResource"]);

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

app.factory('RestApi', ["$resource",
    function ($resource) {
        return {
            Books: $resource("app/books/:id", {id: "@id"})
        };
    }]);

app.filter("arrayToString", function () {
    return function (input) {
        return input.join(", ");
    };
});

function BookListCtrl($scope, RestApi) {
    $scope.books = RestApi.Books.query();
}

function NewBookCtrl($scope, RestApi) {
    $scope.newBook = new RestApi.Books();
    $scope.newBook.authors = [""];
    $scope.newBook.publishers = [""];

    $scope.createBook = function () {
        $scope.newBook.$save();
    };

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