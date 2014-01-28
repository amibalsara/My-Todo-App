
angular.module("todo.Controller",['todo.Service']).controller("TodoController",["$scope","$log",'TodoService',
function($scope,$log,TodoService){

    $scope.messageFromController  = "List of ToDos item";


    $scope.todos = TodoService.todos().allTodos;

    $log.info(TodoService.todos().allTodos);

    $scope.add = function(){
      $log.info($scope.newItem);
	  $scope.todos.push($scope.newItem);
    };

 // DELETE INPROGRESS
 //     $scope.delete = function(id) {
        
 //        for(i in $scope.todos) {
 //            if($scope.tots[i].id == id) {
 //                $scope.todo.splice(i,1);
 //                $scope.newItem = {};
 //            }
 //        }
         
 //    }
  
}]);
