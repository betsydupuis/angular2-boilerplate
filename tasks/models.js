var path = require('path');
var paths = require('./options/paths.config.js');

module.exports = function(gulp, plugins, paths) {
    'use strict';
    var source = [paths.models + '/**/*.json'];

    var destination = paths.environment.dist + paths.output.assets.models;

    gulp.task('build:models', function() {
        return  buildModels(source, destination);
    });

    function buildModels(source, destination) {
        return gulp.src(source)
            .pipe(gulp.dest(destination));
    }
}