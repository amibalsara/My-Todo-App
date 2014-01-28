

angular.module("todo.Service",[]).factory("TodoService",function(){

	function todos(){

		return {
			'allTodos':[
				{ name : 'Task name 1', status : 'Completed' },
				{ name : 'Task name 2', status : 'Pending'   },
				{ name : 'Task name 3', status : 'Completed' },
				{ name : 'Task name 4', status : 'Active'    },
				{ name : 'Task name 5', status : 'Pending'   }
			]
		};
	}

   return {
     todos:todos
   };
});