app.controller('DashboardController', ['HotelService', function (HotelService) {
    console.log('Dashboard Controller works');

    let self = this;

    self.message = HotelService.serviceMessage;
    console.log(self.message);
    
}]);