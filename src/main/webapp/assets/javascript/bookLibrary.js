var app = angular.module("BookLibrary", []);

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

app.filter("arrayToString", function() {
    return function(input) {
        return input.join(", ");
    }
});

function BookListCtrl($scope, $http) {
    $scope.testMsg = "working! ASDASDASD";
    
    $scope.fetchBooks = function() {
        $http.get("app/books/books.json").success(function(list) {
            $scope.books = list;
        });
    };
    
    $scope.fetchBooks();
}

function NewBookCtrl($scope, $http) {

}