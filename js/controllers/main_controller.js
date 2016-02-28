app.controller('mainController', ['$scope', '$http', '$routeParams', 'AllTeas', function($scope, $http, $routeParams, AllTeas){

  var promise = AllTeas.getTeas();

  promise.then(function(payload){
    $scope.teas = [];
    $scope.cartNumber = 0
    payload.data.forEach(function(teas){
      $scope.teas.push(teas)
    })
  })
  //categories properly being displayed
  $scope.arrayToString = function(string){
    return string.join(', ')
  };
}])
