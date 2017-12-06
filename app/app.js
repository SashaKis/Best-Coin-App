var bestCoinApp = angular.module("bestCoinApp", ["ngRoute"]);

bestCoinApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home/home.html"
        })
        .when("/login", {
            templateUrl: "app/login/login.html",
            controller: "LoginCtrl"
        })
        // .when("/cars/:index", {
        //      templateUrl: "app/details/carDetails.html",
        //      controller: "carDetailsCtrl"        
        //  })
        .when("/parent", {
            templateUrl: "app/parent/parent.html",
            controller: "ParentCtrl"
        })
        .when("/child", {
            templateUrl: "app/child/child.html",
            controller: "ChildCtrl"
        })
        .when("/gallery", {
            templateUrl: "app/gallery/gallery.html"
            //controller: "ChildCtrl"
        })
        .when("/news", {
            templateUrl: "app/news/news.html",
            controller: "NewsCtrl"
        })
        .when("/winner", {
            templateUrl: "app/winner/winner.html"
            //controller: "ChildCtrl"
        })
        .when("/plans", {
            templateUrl: "app/plans/plans.html"
            //controller: "ChildCtrl"
        })
    // .otherwise({
    //     redirectTo: "/"
    //   }); 
});
