(function () {
    'use strict';

    angular
            .module('app')
            .factory('ProjectDataService', ProjectDataService);

    ProjectDataService.$inject = ['$http', 'ApiCallerService'];
    function ProjectDataService($http, ApiCallerService) {

        var projects = null;

        var getAll = function (callback) {
            ApiCallerService.getApi('projects/', callback);
        };

        var getProject = function (id, callback) {
            ApiCallerService.getApi('projects/'+id, callback);
        };

        return {
            projects: projects,
            getAll: getAll,
            getProject: getProject
        };
    }

})();