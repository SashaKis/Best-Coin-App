bestCoinApp.controller("ChildCtrl", function ($scope, $http, $location, $log, activeUser, Child, children) {
     $scope.test = "test data";
    //$scope.mood = "5"
    //http call to get data from json
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.childName = activeUser.get().firstName;
    $log.log($scope.childName);
    $scope.childArr = [];

    //http call to get data from json
    $http.get("app/data/children.json").then(function (response) {
        children.loadAll(response.data);
        //$log.log(children.getAll());
        $scope.childArr = children.getAll();
        $scope.childMood = $scope.childArr[0].mood;
        $log.log($scope.childMood);
    });
});