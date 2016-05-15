
// require('../common/ui-common.entry');

'use strict';

// Register component dependencies of app.example.
angular
    .module('app.example', [
        'exampleFeature'
    ]);

// Define modules of primary app.
angular
    .module('app', [
        'ui.common',
        'app.example',
    ]);
