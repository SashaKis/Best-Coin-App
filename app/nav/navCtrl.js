
bestCoinApp.controller("navCtrl", function ($scope, activeUser) {
    
    //$scope.isLoggedIn = activeUser.isLoggedIn();   
    $scope.isLoggedIn = function() {
        return activeUser.isLoggedIn();
    };
});