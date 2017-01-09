/**
 * page d'index : affichage des scores / bouton "start"
 * @returns {undefined}
 */
(function () {
    'use strict';

    angular
            .module('app')
            .directive('splashScreen',  function () {
                return {
                    restrict: 'AE',
                    replace: true,
                    transclude: true,
                    templateUrl: './view/directive/splash-screen.html',
                    link : function (scope){
                    }
                };
            });

})();