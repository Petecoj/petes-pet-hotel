let app = angular.module('HotelApp',['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController as vm'
      })
      .when('/manager', {
        templateUrl: 'views/manager.html',
        controller: 'ManagerController as vm'
      })
      .otherwise({
        redirectTo: '/dashboard'
      })
  });