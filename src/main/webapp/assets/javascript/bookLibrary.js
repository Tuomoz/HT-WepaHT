function BookCtrl($scope, $http) {
    $scope.testMsg = "working! ASDASDASD";
    
    $scope.fetchBooks = function() {
        $http.get("app/books").success(function(list) {
            $scope.books = list;
        });
    };
    
    $scope.fetchBooks();
}