bestCoinApp.controller("LoginCtrl", function ($rootScope,$scope, $http, $location, activeUser, User, $log) {

    // TODO: Detele this
    //$scope.email = "sasha@sasha.com";
    //$scope.password = "123123";
    $scope.email = "lior@prosto.com";
    $scope.password = "111111";

    $http.get("app/data/users.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new User(response.data[i]));
        }

        //console.log(JSON.stringify($scope.users));
    });

    $scope.failedAttempt = false;
    $rootScope.isMaster = false;

    $scope.login = function () {
        var user = getLoggedInUser();
        if (user != null) {
            activeUser.login(user);
              if (activeUser.isParent()) {
                  $log.log("parent"); 
                  $rootScope.isMaster = true;
                  $log.log($rootScope.isMaster);
                  $location.path("/parent");
              } else {
                $log.log($rootScope.isMaster);  
                $log.log("child"); 
                $location.path("/child");
              }
        } else {
            $scope.failedAttempt = true;
        }
    }
    //   $scope.isParent = function () {
    //       if ($scope.users[i].role === "Parent") {
    //           $log.log("parent");
    //           $location.path("/parent");
    //           return true;
    //       } else {
    //           $log.log("children");
    //           $location.path("/child");
    //           return false;
    //       }
    //   }

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
