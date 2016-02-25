var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/allTeas.html',
        controller: 'mainController'
      })
      .when('/shoppingCart', {
        templateUrl: 'partials/shoppingCart.html',
        controller: 'shoppingController'
      })
});
