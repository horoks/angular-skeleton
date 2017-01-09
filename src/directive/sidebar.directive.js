/**
 * page d'index : affichage des scores / bouton "start"
 * @returns {undefined}
 */
(function () {
    'use strict';

    angular
            .module('app')
            .directive('sidebar', function () {
                return {
                    restrict: 'AE',
                    replace: true,
                    transclude: true,
                    templateUrl: './view/directive/sidebar.html',
                    link: function (scope) {
                        adjustSidebar();
                    }
                };
            });

})();