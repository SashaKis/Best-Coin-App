bestCoinApp.controller("LoginCtrl", function ($scope, $http, $location, activeUser, User,$log) {

    // TODO: Detele this
    $scope.email = "sasha@sasha.com";
    $scope.password = "123123";
    

    $http.get("app/data/users.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }

        //console.log(JSON.stringify($scope.users));
    });

    $scope.failedAttempt = false;

    $scope.login = function () {
        var user = getLoggedInUser();
        if (user != null) {
            activeUser.login(user);
            if (activeUser.isParent()) {
                $log.log("parent"); 
                $location.path("/parent");
            } else {
                $location.path("/child");
                $log.log("child"); 
            }
        } else {
            $scope.failedAttempt = true;
        }
    }

    var getLoggedInUser = function () {
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].email === $scope.email && $scope.users[i].password === $scope.password) {
                return $scope.users[i];
            }
        }
        return null;
    }

    // $scope.dismiss = function () {
    //     $uibModalInstance.close("User dismissed");
   //}
});
