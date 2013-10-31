"use strict";
var app = angular.module("BookLibrary", ["ngRoute", "ngResource"]);

app.config(['$routeProvider', "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider.when('/books/:id', {
        templateUrl: 'templates/bookDetails.html',
        controller: BookDetailsCtrl
    });
    
    $routeProvider.when('/books', {
        templateUrl: 'templates/bookList.html',
        controller: BookListCtrl
    });

    $routeProvider.when('/newbook', {
        templateUrl: 'templates/newbook.html',
        controller: NewBookCtrl
    });

    $routeProvider.otherwise({redirectTo: '/books'});

    //$locationProvider.html5Mode(true).hashPrefix('!');
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