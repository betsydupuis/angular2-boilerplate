/**
 * Component Example
 * @namespace Modules
 * @author Betsy Dupuis
 */
'use strict';
angular
    .module('componentExample', []) // Remember to register your modiles in app.modules.js
    .directive('componentExampleCmp', function() { // Use 'Cmp' suffix to denote a component
        var directive = {
            scope: {},
            templateUrl: 'assets/templates/common/components/component-example/component-example-view.html',
            controller: 'componentExampleCtrl',
            controllerAs: 'vm',
            restrict: 'EA',
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            // Directive Code goes here
            console.log('New component Example')
        };
    })
    .controller('componentExampleCtrl', function() { // Use 'Ctrl' suffix to denote a controller
        var vm = this;
        vm.exampleText = 'Example text';
        vm.exampleModel = [
            // Examples models go here.
        ];
    });