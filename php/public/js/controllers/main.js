'use strict';
var initApp = angular.module('initApp.controllers',  ['google-maps', 'LocalStorageModule']);

initApp.controller('mainController', function ($scope, localStorageService,points ) {



   points.getall(function(points){
        $scope.points = points;
        $scope.markersProperty
    });

   angular.extend($scope, {

        /** the initial center of the map */
        centerProperty: {
            latitude: 45,
            longitude: -73
        },

        /** the initial zoom level of the map */
        zoomProperty: 8,

        /** list of markers to put in the map */
        markersProperty: [ {
                latitude: 45,
                longitude: -74
            },
             {
                latitude: 45,
                longitude: -73
            }],

        // These 2 properties will be set when clicking on the map
        clickedLatitudeProperty: null,
        clickedLongitudeProperty: null,
    });

});
