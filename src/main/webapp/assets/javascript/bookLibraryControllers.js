function BookListCtrl($scope, RestApi) {
    $scope.books = RestApi.Books.query();
}

function BookDetailsCtrl($scope, $routeParams, RestApi) {
    $scope.book = RestApi.Books.get({id: $routeParams.id});
}

function NewBookCtrl($scope, $location, RestApi) {
    $scope.pageHeader = "Add a new book";
    $scope.book = new RestApi.Books();
    $scope.book.authors = [""];
    $scope.book.publishers = [""];

    $scope.createBook = function () {
        var promise = $scope.book.$save();

        promise.then(function (savedBook) {
            $location.path("/books/" + savedBook.id);
        });
    };

    $scope.removeAuthor = function (index) {
        $scope.book.authors.splice(index, 1);
    };

    $scope.addAuthor = function () {
        $scope.book.authors.push("");
    };

    $scope.removePublisher = function (index) {
        $scope.book.publishers.splice(index, 1);
    };

    $scope.addPublisher = function () {
        $scope.book.publishers.push("");
    };
}

function EditBookCtrl($scope, $routeParams, $location, RestApi) {
    $scope.pageHeader = "Edit book";
    $scope.book = RestApi.Books.get({id: $routeParams.id});

    $scope.createBook = function () {
        var promise = $scope.book.$update();

        promise.then(function (savedBook) {
            $location.path("/books/" + savedBook.id);
        });
    };
    
    $scope.removeAuthor = function (index) {
        $scope.book.authors.splice(index, 1);
    };

    $scope.addAuthor = function () {
        $scope.book.authors.push("");
    };

    $scope.removePublisher = function (index) {
        $scope.book.publishers.splice(index, 1);
    };

    $scope.addPublisher = function () {
        $scope.book.publishers.push("");
    };
}