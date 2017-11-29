
bestCoinApp.controller("navCtrl", function ($scope, activeUser,$log) {
    
    //$scope.isLoggedIn = activeUser.isLoggedIn();   
    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };
});