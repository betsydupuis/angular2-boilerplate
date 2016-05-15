var path = require('path');
var paths = require('./options/paths.config.js');
var flatten = require('gulp-flatten');

module.exports = function(gulp, plugins, paths) {
    'use strict';
    var source = [paths.src + '/**/*.*(png|jpeg|jpg|gif)'];
    var imagesOutput = paths.environment.dist + paths.output.assets.img;

    gulp.task('build:images', function() {
        return gulp.src(source)
            .pipe(flatten())
            .pipe(gulp.dest(imagesOutput));
    });
}