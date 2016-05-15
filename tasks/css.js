module.exports = function(gulp, plugins, paths) {
    'use strict';

    // Dependencies
    var path = require('path');
    var config = require('./options/config.js');
    // plugins.gulpIf = require('gulp-if');

    // Post Processors
    var autoprefixer = require('autoprefixer');
    var discardComments = require('postcss-discard-comments');
    var cssnano = require('cssnano');

    // Paths
    var paths = require(__dirname + '/options/paths.config.js');
    var cssOutputDist = paths.environment.dist + paths.output.assets.css;

    var postProcessors = [
        discardComments(),
        cssnano(),
    ];

    gulp.task('compass:report-builder', function() {
        buildScript(paths.scss.reports, cssOutputDist);
    });

    gulp.task('compass:ui-common', function() {
        buildScript(paths.scss.common, cssOutputDist);
    });

    gulp.task('clean:css', function() {
        return plugins.del([
            cssOutputDist,
        ]);
    });

    gulp.task('build:css', function(callback){
        plugins.runSequence('clean:css',
            [
                'compass:report-builder',
                'compass:ui-common'
            ],
            callback);
    });


    function buildScript(source, destination) {
        var shouldMinify = global.isProd;
        var shouldCreateSourcemap = !global.isProd || config.browserify.prodSourcemap;
        var dependencies = ['sass-globbing'];

        gulp.src(source + '/*.scss')
            .pipe(
                plugins.compass({
                    sass: source,
                    css: destination,
                    require: dependencies,
                    sourcemap: shouldCreateSourcemap
                })
            )
            .pipe(plugins.if(shouldMinify, plugins.postcss(postProcessors)))
            .pipe(gulp.dest(destination));
    };
};