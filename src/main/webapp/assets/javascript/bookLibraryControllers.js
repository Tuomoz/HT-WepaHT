function BookListCtrl($scope, RestApi) {
    $scope.books = RestApi.Books.query();
}

function BookDetailsCtrl($scope, $routeParams, $location, RestApi) {
    $scope.book = RestApi.Books.get({id: $routeParams.id});

    $scope.deleteBook = function () {
        var promise = $scope.book.$delete();

        promise.then(function () {
            $location.path("/books");
        });
    };
}

function NewBookCtrl($scope, $location, RestApi, $http) {
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

    $scope.searchIsbn = function() {
        var url = "https://openlibrary.org/api/books?bibkeys=ISBN:" + $scope.book.isbn + "&callback=JSON_CALLBACK&jscmd=details";

        $http.jsonp(url).success(function (data) {
            for (var prop in data) {
                var details = data[prop].details;
                console.log(details);
                $scope.book.name = details.title;
                $scope.book.publishingYear = details.publish_date;
                $scope.book.authors = [];
                $scope.book.publishers = [];
                
                for (var author in details.authors) {
                    $scope.book.authors.push(details.authors[author].name);
                }
                
                for (var publisher in details.publishers) {
                    $scope.book.publishers.push(details.publishers[publisher]);
                }
                break; // Breaking just in case
            }
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

function OpenLibraryCtrl($scope, RestApi) {
    
}