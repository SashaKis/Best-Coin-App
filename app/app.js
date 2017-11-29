var bestCoinApp = angular.module("bestCoinApp", ["ngRoute"]);

bestCoinApp.config(function($routeProvider) {
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
         templateUrl: "app/parent/parent.html"    
     })   
     .when("/child", {
        templateUrl: "app/child/child.html"    
    })   
    // .otherwise({
    //     redirectTo: "/"
    //   }); 
});
