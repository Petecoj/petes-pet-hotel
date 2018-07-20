app.controller('DashboardController', ['HotelService', function (HotelService) {
  

    let self = this;

    self.petOwners = HotelService.ownersList;

    self.addOwner = function(newOwner){
        console.log(newOwner);
        HotelService.addOwner(newOwner);
    }


   

 
   
    
}]);