app.service('HotelService', ['$http', function ($http) {
    let self = this;


    self.petsList = {
        list: []
    };

    self.ownersList = {
        list: []
    };

    self.addPet = function (petToAdd) {
        $http({
            method: 'POST',
            url: '/pets',
            data: petToAdd
        }).then(function (response) {
            self.getPets();
            self.getOwners();

        }).catch(function (error) {
        })
     
    };

    self.getPets = function () {
        $http({
            method: 'GET',
            url: '/pets'
        }).then(function (response) {
            self.petsList.list = response.data.rows
        }).catch(function (error) {
        })
    }

    self.addOwner = function (ownerToAdd) {
        $http({
            method: 'POST',
            url: '/owners',
            data: ownerToAdd
        }).then(function (response) {
           self.getOwners();
        }).catch(function (error) {
        })
    }
    self.getOwners = function () {
        $http({
            method: 'GET',
            url: '/owners'
        }).then(function (response) {
            self.ownersList.list = response.data.rows
            
        }).catch(function (error) {
        })
    }
    self.deleteOwner = function(ownerId) {
        $http({
            method: 'DELETE',
            url: `/owners/${ownerId}`
        }).then((response) => {
            self.getOwners();
            self.getPets();
        }).catch((error) => {
            swal({
                title: "Warning!",
                text: "You can't delete an owner who has a pet checked in!",
                icon: "warning",
              })
        });
  
    }
    self.deletePet = function(petId) {
        $http({
            method: 'DELETE',
            url: `/pets/${petId}`,
        }).then((response) => {
            self.getPets();
            self.getOwners();
        })
        .catch((error) => {        
        });
    }

    self.checkIn = function(pet){        
        $http({
            url: `/pets/${pet.pet_id}`,
            method: 'PUT',
            data: pet._id
        }).then(function(response){
            self.getPets();

        }).catch(function(error){            
        })
      
    } 
    self.getOwners();
    self.getPets();
}]);