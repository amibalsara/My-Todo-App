// Generated by CoffeeScript 1.6.3
/*
*/

angular.module("app", ["ngRoute" ,"todo"]).config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when("/", {
    templateUrl: "home.html",
    controller:"TodoController"
  });
  $routeProvider.otherwise({
    redirectTo: "/"
  });
});

angular.module("app").run(function($rootScope) {
  $rootScope.log = function(thing) {
    return console.log(thing);
  };
});


