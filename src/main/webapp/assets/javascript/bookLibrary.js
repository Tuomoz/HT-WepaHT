"use strict";
var app = angular.module("BookLibrary", ["ngRoute", "ngResource"]);

app.config(['$routeProvider', "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider.when('/books/:id/edit', {
        templateUrl: 'templates/bookEdit.html',
        controller: EditBookCtrl
    });
    
    $routeProvider.when('/books/new', {
        templateUrl: 'templates/bookEdit.html',
        controller: NewBookCtrl
    });
    
    $routeProvider.when('/books/:id', {
        templateUrl: 'templates/bookDetails.html',
        controller: BookDetailsCtrl
    });
    
    $routeProvider.when('/books', {
        templateUrl: 'templates/bookList.html',
        controller: BookListCtrl
    });

    $routeProvider.otherwise({redirectTo: '/books'});

    //$locationProvider.html5Mode(true).hashPrefix('!');
}]);

app.factory('RestApi', ["$resource",
    function ($resource) {
        return {
            Books: $resource("app/books/:id", {id: "@id"}, {
                        update: { method: 'PUT' }
            })
        };
    }]);

app.filter("arrayToString", function () {
    return function (input) {
        if (input === undefined)
            return "";
        
        return input.join(", ");
    };
});