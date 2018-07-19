app.service('HotelService', ['$http', function ($http) {
    let self = this;
 

    self.petsList = {
        list: []
    };

    self.ownersList = {
        list: []
    };

    self.addPet = function(petToAdd){
        $http({
            method:'POST',
            url: '/pets',
            data: petToAdd
        }).then(function(response){
            console.log(response);
            self.getPets()
        }).catch(function(error){
            console.log('error', error);
            res.sendStatus(500);
        })
    };

    self.getPets = function(){
        $http({
            method: 'GET',
            url: '/pets'
        }).then(function(response){
            console.log(response);
            self.petsList.list = response.data.rows
        }).catch(function(error){
            console.log('problem with GET',error);
        })
    }
self.getPets();


}]);