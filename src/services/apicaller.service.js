(function () {
    'use strict';

    angular
            .module('app')
            .factory('ApiCallerService', ApiCallerService);

    ApiCallerService.$inject = ['$http'];
    function ApiCallerService($http) {
        var service = {};
        service.getApi = getApi;

        var baseUrl = "http://localhost/server/web/app_dev.php/api/"
        
        function getApi(url, callback) {
            $http.get(baseUrl + url).success(function (response) {
                console.log("api");
                callback(response);
            });
        }

        return service;
    }

})();