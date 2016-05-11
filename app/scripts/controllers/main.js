'use strict';

/**
 * @ngdoc function
 * @name primariasMunicipales2016App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the primariasMunicipales2016App
 */
angular.module('primariasMunicipales2016App')
  .controller('MainCtrl', function (TabletopService) {
  	TabletopService.getData().then(function(data){
  		console.log(data);
  	});
  });
