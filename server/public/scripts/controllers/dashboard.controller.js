app.controller('DashboardController', ['HotelService', function (HotelService) {
  

    let self = this;

    self.petOwners = HotelService.ownersList;

    self.addOwner = function(newOwner){
        HotelService.addOwner(newOwner);
      
    }

    self.deleteOwner = HotelService.deleteOwner;
    self.deleteOwner = function (owner) {        
        if( owner.petcount > 0) {
            alert(`You can't remove an owner with a doggo still checked in! The dog would be sad...`);
        } else {            
            HotelService.deleteOwner(owner)
        }

    }
}]);