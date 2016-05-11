'use strict';

/**
 * @ngdoc overview
 * @name primariasMunicipales2016App
 * @description
 * # primariasMunicipales2016App
 *
 * Main module of the application.
 */
angular
  .module('primariasMunicipales2016App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .service('TabletopService', function ($q) {

    this.keys = false;
    this.data = false;
    this.loading = false;

    this.getData = function(){
      var that = this;
      return $q(function(resolve, reject) {
        if(!that.data){
            that.loading = true;
            Tabletop.init( { 
                key: '1vJPaGoOkKBiF2eP9RylmRWzh5hYjdapAOjAI3c1B_bE', 
                    callback: function(data, tabletop) {
                      that.data = data;

                      that.loading = false;
                      resolve({data:that.data});
                    },
                    simpleSheet: true,
                    parseNumbers: true
                  });            
        } else {
          resolve({data:that.data});
        }
      });
    };
  });
