var app = angular.module("BookLibrary", []);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/books', {
        templateUrl: 'templates/bookList.html',
        controller: BookCtrl
    });
    
    $routeProvider.otherwise({redirectTo: '/books'});
}]);    

app.filter("arrayToString", function() {
    return function(input) {
        return input.join(", ");
    }
});

function BookCtrl($scope, $http) {
    $scope.testMsg = "working! ASDASDASD";
    
    $scope.fetchBooks = function() {
        $http.get("app/books/books.json").success(function(list) {
            $scope.books = list;
        });
    };
    
    $scope.fetchBooks();
}