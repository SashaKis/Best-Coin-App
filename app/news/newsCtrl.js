bestCoinApp.controller("NewsCtrl", function ($scope, $http, $log, $location, activeUser) {
    //http call to get data from json

     if (!activeUser.isLoggedIn()) {
         $location.path("/");
         return;
     }
    $scope.newsArr = [];
    $http.get("app/data/news.json").then(function mySuccess(response) {
        // Updating the service with the data
        $scope.newsArr = response.data;
        //$log.log($scope.newsArr);
        for (var i = 0; i <= $scope.newsArr.length - 1; i++) {
            $scope.topic = $scope.newsArr[i].topic;
            $scope.imageURL = $scope.newsArr[i].imageURL;
            $scope.content = $scope.newsArr[i].content;
        }

    }, function myError(response) {
        alert("error read news.json");
    });
});

