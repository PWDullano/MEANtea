app.service('AllTeas', ['$http', '$q', function($http, $q) {

  var deferred = $q.defer();
  $http.get('js/teaJSON.json').then(function(data){
      deferred.resolve(data);
   })

   this.getTeas = function(){
     return deferred.promise;
   }
}])
