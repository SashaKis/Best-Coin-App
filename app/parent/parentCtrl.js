bestCoinApp.controller("ParentCtrl", function ($scope, $http, $location, $log, activeUser, Report, children) {
    //http call to get data from json
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.kidsURL = activeUser.get().dataURL;
    //$log.log($scope.kidDataURL);
    $http.get($scope.kidsURL).then(function (response) {
        $log.log(response.data);
    });



});
