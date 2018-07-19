app.controller('ManagerController', ['HotelService', function (HotelService) {
    console.log('Manager Controller works');

    let self = this;
    self.hotelPets = HotelService.petsList;

    self.addPet = function(petToAdd){
        HotelService.addPet(petToAdd);
    }
}]);