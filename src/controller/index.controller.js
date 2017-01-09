/**
 * page d'index : affichage des scores / bouton "start"
 * @returns {undefined}
 */
(function () {
    'use strict';

    angular
            .module('app')
            .controller('indexController', indexController);

    indexController.$inject = ['$location', '$scope', '$rootScope', 'ProjectDataService', '$http', '$timeout'];
    function indexController($location, $scope, $rootScope, ProjectDataService, $http, $timeout) {

        /*$scope.init = function () {
            ProjectDataService.getAll(function(response){
                $scope.projects = response;
                $scope.loaded = true;
            });
        };*/
        
		$scope.init = function () {
		$timeout(function () {
                $http.get('http://localhost/angular-skeleton/src/services/projects.json').success(function (response) {
					$scope.projects = response;
					$scope.loaded = true;
				});
            }, 1000);

        };
		
        $scope.init();
    }

})();