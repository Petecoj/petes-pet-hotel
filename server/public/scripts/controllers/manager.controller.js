app.controller('ManagerController', ['HotelService', function (HotelService) {

    let self = this;
    self.hotelPets = HotelService.petsList;
    self.petOwners = HotelService.ownersList;

    self.addPet = function(petToAdd){
        HotelService.addPet(petToAdd);
    }
    self.deletePet = HotelService.deletePet;
    self.checkIn = function(pet){
        HotelService.checkIn(pet)
    }
}]);