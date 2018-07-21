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
            console.log(response);
            self.getPets();
            self.getOwners();
        }).catch(function (error) {
            console.log('error', error);
        })
    };

    self.getPets = function () {
        $http({
            method: 'GET',
            url: '/pets'
        }).then(function (response) {
            console.log(response.data.rows);
            self.petsList.list = response.data.rows
        }).catch(function (error) {
            console.log('problem with GET', error);
        })
    }

    self.addOwner = function (ownerToAdd) {
        $http({
            method: 'POST',
            url: '/owners',
            data: ownerToAdd
        }).then(function (response) {
            console.log(response);
           self.getOwners();
        }).catch(function (error) {
            console.log('error on owner POST', error);
        })
    }
    self.getOwners = function () {
        $http({
            method: 'GET',
            url: '/owners'
        }).then(function (response) {
            console.log(response.data.rows);
            self.ownersList.list = response.data.rows
            console.log(self.ownersList);
            
        }).catch(function (error) {
            console.log('problem with GET', error);
        })
    }
    self.deleteOwner = function(ownerId) {
        console.log('in delete', ownerId);
        
        $http({
            method: 'DELETE',
            url: `/owners/${ownerId}`
        }).then((response) => {
            console.log('made it to delete');
            
            self.getOwners();
            self.getPets();
        }).catch((error) => {
            console.log(error);
        });
    }
    self.deletePet = function(petId) {
        $http({
            method: 'DELETE',
            url: `/pets/${petId}`,
        }).then((response) => {
            console.log(petId)
            self.getPets();
            self.getOwners();
        })
        .catch((error) => {
            console.log('error in delete', error);
        
        });
    }
    self.checkIn = function(pet){
        console.log(pet);
        
        $http({
            url: `/pets/${pet.pet_id}`,
            method: 'PUT',
            data: pet._id
        }).then(function(response){
            console.log('PUT', response);
            self.getPets();

        }).catch(function(error){
            console.log('error in PUT', error);
            
        })
      
    } 


    self.getOwners();
    self.getPets();


}]);