let app = angular.module('HotelApp',['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
      .when('/home', {
        templateUrl: 'views/dashboard.html',
        controller: 'HomeController as vm'
      })
      .when('/sale', {
        templateUrl: 'views/manager.html',
        controller: 'SaleController as vm'
      })
      .otherwise({
        redirectTo: '/add'
      })
  });