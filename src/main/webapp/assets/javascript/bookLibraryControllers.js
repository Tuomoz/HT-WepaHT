function BookListCtrl($scope, RestApi) {
    $scope.books = RestApi.Books.query();
}

function BookDetailsCtrl($scope, $routeParams, RestApi) {
    $scope.book = RestApi.Books.get({id: $routeParams.id});
}

function NewBookCtrl($scope, $location, RestApi) {
    $scope.newBook = new RestApi.Books();
    $scope.newBook.authors = [""];
    $scope.newBook.publishers = [""];

    $scope.createBook = function () {
        var promise = $scope.newBook.$save();

        promise.then(function (data) {
            $location.path("/books");
        });
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