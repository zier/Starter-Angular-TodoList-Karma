angular.module('todoApp', [])
  .controller('TodoList',TodoList);

function TodoList($scope) {
 
  $scope.lists = [];

  $scope.addTodo = addTodo;
  $scope.clearTodo = clearTodo;

  function addTodo() {
    if($scope.inputText == "") {
      return
    }

    $scope.lists.push({name:$scope.inputText, check:false});
    $scope.inputText = "";
  }

  function clearTodo() {
    var newLists = [];
    angular.forEach($scope.lists, function(value,key) {
      if(!value.check) {
        newLists.push(value);
      }
    });
    
    $scope.lists = newLists;
  }

}