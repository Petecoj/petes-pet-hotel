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
            self.getPets()
        }).catch(function (error) {
            console.log('error', error);
        })
    };

    self.getPets = function () {
        $http({
            method: 'GET',
            url: '/pets'
        }).then(function (response) {
            console.log(response);
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
            console.log(response);
            self.ownersList.list = response.data.rows
            console.log(self.ownersList);
            
        }).catch(function (error) {
            console.log('problem with GET', error);
        })
    }
    self.getOwners();
    self.getPets();


}]);