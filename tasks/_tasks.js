module.exports = function (gulp, plugins) {
    'use strict';
    var del = require('del');

    //Build Source files from ./src
    gulp.task('build:src', function(callback){
        plugins.runSequence('clean',
            [
                'build:css',
                'build:html',
                'build:models',
                'build:images',
                'build:scripts'
            ],
            callback);
    });

    gulp.task('build:dev', function() {

      global.isProd = false;

      plugins.runSequence(['build:src']);

    });
    // gulp.task('build:dev',['build:src']);
    gulp.task('build:gradle',['build:src']);
    gulp.task('build',['build:gradle']);
};


