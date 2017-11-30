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

    $scope.slider = document.getElementById("myMood");
    $scope.output = document.getElementById("childmood");
    $scope.output.innerHTML = $scope.slider.value;
    //$log.log($scope.slider.value)

    $scope.slider.oninput = function () {
        $scope.output.innerHTML = this.value;
    }


    // var cuisines = ["Chinese","Indian"];     
    
    // var sel = document.getElementById('CuisineList');
    // for(var i = 0; i < cuisines.length; i++) {
    //     var opt = document.createElement('option');
    //     opt.innerHTML = cuisines[i];
    //     opt.value = cuisines[i];
    //     sel.appendChild(opt);
    // }
    
});