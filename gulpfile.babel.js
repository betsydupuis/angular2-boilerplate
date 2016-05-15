'use strict';

// Dependencies
var gulp = require('gulp');
var glob = require('glob');
var path = require('path');
var config = require('./tasks/options/config.js');
var paths = require('./tasks/options/paths.config.js');
var tasksPath = './tasks/';

// Plugins
var plugins = require('gulp-load-plugins')();
plugins.runSequence = require('run-sequence');
plugins.del = require('del');
plugins.bundleLogger =  require('./tasks/util/bundleLogger');
plugins.handleErrors =  require('./tasks/util/handleErrors');


// Variables
var taskList = glob.sync(tasksPath + '**/*.js', {
    'ignore': [
        './**/options/*',
        './**/util/*'
    ]
});
global.gulpDir = __dirname;
global.isProd = config.isProd;

registerGulpTasks(taskList);

function registerGulpTasks(taskList) {
    console.log('Registering gulp tasks... ' + taskList.join(',\n'));

    taskList.forEach(function(taskPathFile) {
        var task = require(taskPathFile);
        if (typeof(task) == 'function') {
            task(gulp, plugins, paths);
        } else {
            console.log(taskPathFile + ' is not a function');
        };
    });
};