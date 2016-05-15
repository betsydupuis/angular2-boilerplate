/* Define Task Paths*/

var path = require('path');

module.exports = {
    host: {
        domain: 'localhost.accend.io',
        port: 3000
    },
    src: './src',
    build: {
        reports: './reports',
    },
    images: {
        shared: '',
    },
    environment: {
        dev: './reports',
        dist: './reports'
    },
    reportBuilder: './src/app/report-builder.entry.js',
    uiCommon: './src/common/entry.webpack.js',
    scss: {
        reports: './src/app',
        common: './src/common',
    },
    html: {
        reportBuilder: './src/app/*.html',
        common: './src/common/*.html',
    },
    models: './src/common/models',
    output: {
        assetsDir: '/assets',
        assets: {
            css: '/assets/css',
            templates: '/assets/templates',
            icons: '/assets/icons',
            images: '/assets/images',
            js: '/assets/js',
            models: '/assets/models',
            img: '/assets/img'
        }
    }
}