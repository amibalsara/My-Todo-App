###


###

angular.module("app", ["ngRoute"]).config ($routeProvider, $locationProvider) ->
  $locationProvider.html5Mode true
  $routeProvider.when "/",
    templateUrl: "home.html"

  $routeProvider.otherwise redirectTo: "/"

  return

angular.module("app").run ($rootScope) ->
  $rootScope.log = (thing) ->
    console.log thing
  return








