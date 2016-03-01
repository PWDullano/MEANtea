app.service('TeaCart', ['$http', function($http) {
  var cart = [];
  this.cart = cart;
  this.add = function(quantity) {
    var item = {};
    item.name = this.item.name;
    item.ingredients = this.item.ingredients;
    item.caffeineScale = this.item.caffeineScale;
    item.price = this.item.price;
    item.picture = this.item.imageUrl;
    item.categories = this.item.categories;
    item.rating = this.item.rating;
    item.total = this.item.price * quantity;
    item.quantity = parseFloat(quantity);
    cart.push(item)
  }
}])
