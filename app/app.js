/**
 * Created by pratapkumar on 4/15/2015.
 */
angular.module('newProject', ['ngRoute']).config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home.html',
                controller: 'homeViewCtrl'
            })
            .when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'aboutViewCtrl'
            })
            .when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'contactViewCtrl'
            })
            .when('/detail/:id', {
                templateUrl: 'partials/detail.html',
                controller: 'detailViewCtrl'
            });
    }
]);
