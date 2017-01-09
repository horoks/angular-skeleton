/**
 * page d'index : affichage des scores / bouton "start"
 * @returns {undefined}
 */
(function () {
    'use strict';

    angular
            .module('app')
            .directive('projectsTable',  function () {
                return {
                    restrict: 'AE',
                    replace: true,
                    transclude: true,
                    templateUrl: './view/directive/projects-table.html',
                    link : function (scope){
                    }
                };
            });

})();