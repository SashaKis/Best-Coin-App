bestCoinApp.controller("ParentCtrl", function ($scope, $http, $log, $location, activeUser, Report, children) {
    //http call to get data from json
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }

    //$scope.test = "Hello Parrent Page and Controller"
    $scope.kidReport = [];
    $scope.kidsArr = [];
    $scope.kidsURL = activeUser.get().dataURL;
    //$log.log($scope.kidDataURL);
    $http.get($scope.kidsURL).then(function (response) {
        //$log.log(response.data);
        $scope.kidsArr = response.data;
        $scope.kidsName = [];
        for (var i = 0; i <= $scope.kidsArr.length - 1; i++) {
            $scope.kidsName[i] = $scope.kidsArr[i].name
        }
        //$log.log($scope.kidsName);
    });
    $scope.kidNameSelect = function () {
        $log.log($scope.selectedName)
        switch ($scope.selectedName) {
            case "Lior":
                $scope.kidReportfile = "app/data/lior.json"
                break;
            case "Annabel":
                $scope.kidReportfile = "app/data/annabel.json"
                break;
            default:
            $scope.kidReportfile ="No Report data file"
        }
        $log.log($scope.kidReportfile)
        
        $http.get($scope.kidReportfile).then(function (response) { 
            $scope.kidReport = response.data;
            $log.log($scope.kidReport);
        }); 
    }

});