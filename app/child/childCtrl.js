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
        //$log.log($scope.childMood);
        $scope.subjects = $scope.childArr[$scope.childArr.length - 1].subjects;
        //$log.log($scope.subjects);
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
    $scope.result = {};
    $scope.sub_score = function () {
        //$scope.x = document.getElementById("achievements").options.selectedIndex;
        $scope.x = $scope.selectedLesson;
        //$log.log($scope.x);
        //$log.log($scope.score.value);
        $scope.result[$scope.x] = $scope.score.value;
        //$log.log($scope.result);
        $scope.avg = 0;
        for (key in $scope.result) {
            $log.log($scope.result[key]);
            var keys = (Object.keys($scope.result));
            var len = keys.length;
            $log.log(len);
            $scope.avg +=$scope.result[key];
            $log.log($scope.avg / len);
            $scope.average = $scope.avg / len;
        }


       
    };


});