bestCoinApp.controller("ChildCtrl", function ($scope,$timeout, $http, $location, $log, activeUser, Report, children) {
    //http call to get data from json
    if (!activeUser.isLoggedIn()) {
        $location.path("/");
        return;
    }
    $scope.childName = activeUser.get().firstName;
    //$log.log($scope.childName);
    $scope.childArr = [];

    //http call to get data from json
    $scope.kidDataURL = activeUser.get().dataURL;
    //$log.log($scope.kidDataURL);
    $http.get($scope.kidDataURL).then(function (response) {
        children.loadAll(response.data);
        //$log.log(children.getAll());
        $scope.childArr = children.getAll();
        $scope.childmood = $scope.childArr[$scope.childArr.length - 1].mood;
        //$log.log($scope.childmood);
        $scope.childhealth = $scope.childArr[$scope.childArr.length - 1].health;
        //$log.log($scope.childhealth);
        $scope.goodDeeds = $scope.childArr[$scope.childArr.length - 1].goodDeeds;
        //$log.log($scope.subjects);
        $scope.helpFamely = $scope.childArr[$scope.childArr.length - 1].helpFamely;
        //$log.log($scope.subjects);
    });


    
 

    //$index = 1;  
    /*
    $scope.sliderMood = document.getElementById("myMood");
    $scope.outputMood = document.getElementById("childmood");
    $scope.outputMood.innerHTML = $scope.sliderMood.value;
    $scope.sliderMood.oninput = function () {
        $scope.outputMood.innerHTML = this.value;
    }
    */


    $scope.slider = document.getElementById("myhealth");
    $scope.output = document.getElementById("childhealth");
    //$log.log($scope.childhealth);
    $scope.output.innerHTML = $scope.slider.value;
    $scope.slider.oninput = function () {
        $scope.output.innerHTML = this.value;
    }
    $scope.kidData = [];
    $scope.sendData = function () {
        children.addReport(new Report($scope.childmood, $scope.childhealth, $scope.average));
        $scope.childArr = children.getAll();
        $log.log($scope.childArr)
    }


    $scope.result = {};
    $scope.sub_score = function () {
        //$scope.x = document.getElementById("achievements").options.selectedIndex;
        $scope.x = $scope.selectedLesson;
        $scope.result[$scope.x] = $scope.score.value;
        $scope.avg = 0;
        for (key in $scope.result) {
            //$log.log($scope.result[key]);
            var keys = (Object.keys($scope.result));
            var len = keys.length;
            //$log.log(len);
            $scope.avg += $scope.result[key];
            //$log.log($scope.avg / len);
            $scope.average = $scope.avg / len;
        }

        $scope.subj_change = function () {
            $scope.score.value = 0;
        }

    };


});