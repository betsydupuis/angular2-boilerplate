/**
* Example Servive
* @namespace Services
* @author Betsy Dupuis
*/

'use strict';
angular
    .module('app.example')
    .factory('exampleService', exampleService);

exampleService.$inject = ['$http', 'exampleAPI'];
function exampleService($http, exampleAPI) {
    var dataModel =  {
        example: []
    };
    var service = {
        data: angular.copy(dataModel),
        getData: getData,
        activateData: activateData,
        deactivateData: deactivateData,
        createData: createData,
        updateData: updateData,
        deleteData: deleteData,
        archiveData: archiveData,
    };

    return service;

    var dataDeactivated =  angular.copy(service.data);

    function resetData(id) {
        return activateData(id);
    };

    function activateData(id) {
        return getData(id)
            .then(function(data) {
                service.data.example = data;
                return service.data.example;
            });
    };

    function deactivateData() {
        service.data = {};
        return service.data = angular.copy(dataModel);
    };

    function getData(id) { // Get data from the backend
        var dataCall = $http({
            method: 'GET',
            url: exampleAPI.getData + id
        })
            .then(getDataComplete)
            .catch(getDataFailed);

        return dataCall;

        function getDataComplete(response) {
            return response.data;
        };

        function getDataFailed(error) {
            console.log(statusText + error.data);
        };
    };

    function createData(data) {
        var dataCall = $http({
            method: 'POST',
            data: data, // accepts string or object
            url: exampleAPI.createData
        })
            .then(createComplete)
            .catch(createFailed);

        return dataCall;

        function createComplete(response) {
            return response.status;
        };

        function createFailed(error) {
            console.log(statusText + error.data);
        };
    };

    function updateData(id, data) {
        var dataCall = $http({
            method: 'PUT',
            data: data, // accepts string or object
            url: exampleAPI.updateData + id
        })
            .then(updateComplete)
            .catch(updateFailed);

        return dataCall;

        function updateComplete(response) {
            return response.status;
        };

        function updateFailed(error) {
            console.log(statusText + error.data);
        };
    };

    function deleteData(id) {
        var dataCall = $http({
            method: 'DELETE',
            url: exampleAPI.deleteData
        })
            .then(updateComplete)
            .catch(updateFailed);

        return dataCall;

        function updateComplete(response) {
            return response.status;
        };

        function updateFailed(error) {
            console.log(statusText + error.data);
        };
    };

    function archiveData(id) { // Very few usecases for this.
        return updateData(id)
            .then(function(data) {
                return response.status;
            });
    };
};