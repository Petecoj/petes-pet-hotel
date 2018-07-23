app.controller('DashboardController', ['HotelService', function (HotelService) {
  

    let self = this;

    self.petOwners = HotelService.ownersList;

    self.addOwner = function(newOwner){
        console.log(newOwner);
        HotelService.addOwner(newOwner);
      
    }

    self.deleteOwner = HotelService.deleteOwner;
    self.deleteOwner = function (owner) {
        console.log(owner);
        
        if( owner.petcount > 0) {
            console.log('cannot delete');
            alert(`You can't remove an owner with a doggo still checked in! The dog would be sad...`);
        } else {
            console.log('made it to delete');
            
            HotelService.deleteOwner(owner)
        }

    }

   

 
   
    
}]);