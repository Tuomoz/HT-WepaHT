"use strict";
var app = angular.module("BookLibrary", ["ngRoute", "ngResource", 'ui.bootstrap']);

app.run(function ($rootScope, Alerts) {
    $rootScope.$on('$locationChangeSuccess', function () {
        Alerts.removeAlerts();
    });
});

app.config(['$routeProvider', "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider.when('/books/:id/edit', {
        templateUrl: 'templates/bookEdit.html',
        controller: EditBookCtrl
    });
    
    $routeProvider.when('/books/new', {
        templateUrl: 'templates/bookEdit.html',
        controller: NewBookCtrl
    });
    
    $routeProvider.when('/books/openlibrary', {
        templateUrl: 'templates/openlibrary.html',
        controller: OpenLibraryCtrl
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

app.factory("Alerts", ["$timeout", function ($timeout) {
    return {
        alerts: [],
        addAlert: function (type, message) {
            this.alerts.length = 0; // Multiple alerts would need more work
            var newAlert = {type: type, message: message};
            this.alerts.push(newAlert);
        },
        closeAlert: function (index) {
            this.alerts.splice(index, 1);
        },
        removeAlerts: function () {
            this.alerts.length = 0;
        }
    };
}]);

app.filter("arrayToString", function () {
    return function (input) {
        if (input === undefined)
            return "";
        
        return input.join(", ");
    };
});