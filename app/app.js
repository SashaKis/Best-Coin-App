var bestCoinApp = angular.module("bestCoinApp", ["ngRoute"]);

bestCoinApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
    // .when("/login", {
    //     templateUrl: "app/login/login.html",
    //     controller: "appLoginCtrl"
    // })
    // .when("/cars/:index", {
    //     templateUrl: "app/details/carDetails.html",
    //     controller: "carDetailsCtrl"        
    // })
    // .when("/maintenance", {
    //     templateUrl: "app/maintenance/maintenance.html"    
    // })   
    .otherwise({
        redirectTo: "/"
      }); 
});
