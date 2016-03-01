app.controller('mainController', ['$scope', '$http', 'AllTeas', 'TeaCart', function($scope, $http, AllTeas, TeaCart){
  $scope.teas = [];
  $scope.add = TeaCart.add
  $scope.cart = TeaCart.cart
  $scope.quantity = '1'

  var promise = AllTeas.getTeas();

  promise.then(function(payload){
    payload.data.forEach(function(teas){
      $scope.teas.push(teas)
    })
  })
}])
