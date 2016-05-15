/**
 * Example Feature
 * @author Betsy Dupuis
 * @namespace Features
 * @description This is example feature component
 */
'use strict';
angular
    .module('exampleFeature', [])
    .directive('exampleFeatureCmp', function() { // Use 'Cmp' suffix to denote a component
        var directive = {
            scope: {},
            templateUrl: 'assets/templates/app/features/example-feature/example-feature-view.html',
            controller: 'exampleFeatureCtrl',
            controllerAs: 'vm',
            restrict: 'EA',
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            console.log('New Example of a Feature component created!')
        };

    }).controller('exampleFeatureCtrl', function() {//exampleService
        var vm = this;
        vm.title = null;

        activate();

        function activate() {
            vm.title = "New Example of a Feature component created!";
            // return getGridView();
        };

        function getExample() {
            return exampleService.getData()
                .then(function(data) {
                    vm.gridView = data;
                    return vm.gridView;
                });
        };
    });
