'use strict';
angular
    .module('app.example')
    .constant('assets', assetsConstant());

function assetsConstant() {
    var thisConstant = {
        'home': '/',
        'templates': '/reports/assets/templates'
    };
    return thisConstant;
};
