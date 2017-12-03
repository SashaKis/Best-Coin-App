bestCoinApp.controller("ChildCtrl", function ($scope, $http, $location, $log, activeUser, Report, children) {
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
    $scope.kidDataURL = activeUser.get().dataURL;
    $log.log($scope.kidDataURL);
    $http.get($scope.kidDataURL).then(function (response) {
        children.loadAll(response.data);
        //$log.log(children.getAll());
        $scope.childArr = children.getAll();
        $scope.childMood = $scope.childArr[$scope.childArr.length - 1].mood;
        $log.log($scope.childMood);
        $scope.subjects = $scope.childArr[$scope.childArr.length - 1].subjects;
        $log.log($scope.subjects);
    });

    $scope.sliderMood = document.getElementById("myMood");
    $scope.outputMood = document.getElementById("childmood");
    $scope.outputMood.innerHTML = $scope.sliderMood.value;
    $scope.sliderMood.oninput = function () {
         $scope.outputMood.innerHTML = this.value;
     }

    $scope.slider = document.getElementById("myhealth");
    $scope.output = document.getElementById("childhealth");
    $scope.output.innerHTML = $scope.slider.value;
    $scope.slider.oninput = function () {
        $scope.output.innerHTML = this.value;
    }
    $scope.sub_score = function() {
        $scope.x = document.getElementById("achievements").options.selectedIndex;
        $log.log($scope.x);
        $log.log($scope.score.value);
    };
   
    // var cuisines = ["Chinese","Indian"];     

    // var sel = document.getElementById('CuisineList');
    // for(var i = 0; i < cuisines.length; i++) {
    //     var opt = document.createElement('option');
    //     opt.innerHTML = cuisines[i];
    //     opt.value = cuisines[i];
    //     sel.appendChild(opt);
    // }

});