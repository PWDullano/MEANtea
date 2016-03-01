app.controller('shoppingController', ['$scope', '$http', 'TeaCart', function($scope, $http, TeaCart){
  $scope.cart = TeaCart.cart;
  $scope.showEdit = false
  $scope.hideQty = false
  $scope.hideSave = false

  $scope.getTotal = function(){
    var grandTotal = 0;
    for (var i = 0; i < $scope.cart.length; i++) {
      var product = $scope.cart.length[i]
      grandTotal += ($scope.cart[i]['price'] * $scope.cart[i]['quantity'])
    }
    return grandTotal
  }

  $scope.remove = function(index, price) {
    price = $scope.cart[index]['price'] * $scope.cart[index]['quantity']
    $scope.cart.splice(index, 1);
      $scope.grandTotal -= price
    };

  $scope.toggleEdit = function() {
    // $scope.cart[index].showEdit = !$scope.cart[index].showEdit
    // $scope.cart[index].hideQty = !$scope.cart[index].hideQty
    // console.log(index);
    $scope.showEdit = !$scope.showEdit
    $scope.hideQty = !$scope.hideQty
  }

  $scope.updateQuantity = function(editQuantity){
   this.item.quantity = editQuantity
   this.item.total = this.item.price * editQuantity
 }
}])
