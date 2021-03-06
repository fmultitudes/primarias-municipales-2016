'use strict';

/**
 * @ngdoc function
 * @name primariasMunicipales2016App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the primariasMunicipales2016App
 */
angular.module('primariasMunicipales2016App')
  .controller('MainCtrl', function ($scope,TabletopService) {
  	
  	$scope.munis = [];
	$scope.loading = true;
	$scope.myInterval = -1;

  	TabletopService.getData().then(function(data){
  		$scope.slides = data.data;
  		$scope.loading = true;
  	});

  });
