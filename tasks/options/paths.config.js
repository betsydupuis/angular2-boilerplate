module.exports = {
    src: './src',
    dist: 'dist',
    scss: [{
        name: 'common',
        src: './src/common',
        dist: './dist/assets/css',
        glob: '/!(*.spec).scss',
    }, {
        name: 'dist',
        src: './src/app',
        dist: './dist/assets/css',
        glob: '/!(*.spec).scss',
    }],
    scripts: [{
        name: 'dependencies',
        src: [
            './src/app/app.entry.js',
            './src/common/ui-common.entry.js'
        ],
        dist: './dist/assets/js/dependencies.entry.js',
    }],
    html: [{
        name: 'templates-dist',
        src: './src/app/**/!(*index|*.spec).html',
        dist: './dist/assets/templates/app/'
    }, {
        name: 'templates-common',
        src: './src/common/**/!(*index|*.spec).html',
        dist: './dist/assets/templates/common/'
    }, {
        name: 'index',
        src: './src/index.html',
        dist: './dist'
    }],
    fonts: [{
        name: 'font-awesome',
        src: './node_modules/font-awesome/fonts/*.*(svg|eot|ttf|woff|woff2|otf)',
        dist: './dist/assets/fonts',
        glob: '/**/*.*(svg|eot|ttf|woff|woff2|otf)'
    }, {
        name: 'angular-ui-grid',
        src: './node_modules/angular-ui-grid/*.*(svg|eot|ttf|woff|woff2|otf)',
        dist: './dist/assets/fonts',
        glob: '/**/*.*(svg|eot|ttf|woff|woff2|otf)'
    }],
    models: [{
        name: 'images',
        src: './src/**/*.json',
        glob: '**/*.json',
        dist: './dist/assets/models'
    }],
    images: [{
        name: 'images',
        src: './src/**/*.*(png|jpeg|jpg|gif|svg)',
        glob: '*.*(png|jpeg|jpg|gif|svg)',
        dist: './dist/assets/img'
    }]
}