(function(){

    angular.module("app.createEvent", [])
    .controller('createEventController', createEventController);

  createEventController.$inject = ['$http', '$state', 'dataservice'];

  function createEventController($http, $state, dataservice){
    // use the navBarApp?
    var vm = this;
    vm.submit = submit;


    /////////////////////////////////

    function submit(valid){
      if (valid && this.host && this.title && this.city && this.description){

        console.log("submiting");

        var eventData = {host: this.host, title: this.title, city: this.city, time: this.time, description: this.description};
        
        dataservice.postEvent(eventData)
        .then(function(data){
          $state.go('homepage');
        }, function(err){
          console.log("ERROR === ",err);
        });
        
      }
    }
  }
})();