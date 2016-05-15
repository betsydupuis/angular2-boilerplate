var path = require('path');
var paths = require('./options/paths.config.js');

module.exports = function(gulp, plugins, paths) {
    'use strict';
    var templatesSource = [paths.src + '/**/*.html', '!' + paths.src + '/*.html'];
    var indexSource = '!' + paths.src + '/*.html';
    var templatesOutputDist = paths.environment.dist + paths.output.assets.templates;
    var indexOutputDist = paths.environment.dist;


    gulp.task('build-html:index', function(){
        buildHtml(indexSource, indexOutputDist)
    });

    gulp.task('build-html:templates', function(){
        buildHtml(templatesSource, templatesOutputDist)
    });

    gulp.task('clean:html:index', function() {
        return plugins.del([
            paths.environment.dist + '/*.html'
        ]);
    });

    gulp.task('clean:html:templates', function() {
        return plugins.del([
            templatesOutputDist + '/*.html'
        ]);
    });

    gulp.task('clean:html', ['clean:html:index', 'clean:html:templates']);

    gulp.task('build:html', function(callback){
        plugins.runSequence(
            'clean:html',
            [
                'build-html:index',
                'build-html:templates'
            ],
            callback);
    });

    function buildHtml(source, destination) {
        return gulp.src(source)
            // .pipe(plugins.watch(source))
            .pipe(gulp.dest(destination));
    };

};