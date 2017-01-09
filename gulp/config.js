var path = require('path');
var root = path.join(__dirname, '/../');
var src = path.join('.', '/src/');
var dist = path.join('.', '/dist/');
var temp = path.join(dist, '/temp/');
var report = path.join('.', '/report/');
var bower = {
    json: require('../bower.json'),
    directory: path.join(root, '/vendor/')
};
module.exports = {

    dir: {
        root: root,
        source: src,
        dist: dist,
        report: report,
        temp: temp
    },
    files: {
        index: {
            src: path.join(src, 'index.html'),
            build: path.join(dist, 'index.html')
        },
        images: {
            src: path.join(src, 'assets/img/*.*'),
            dist: path.join(dist, 'assets/img/')
        },
        fonts: {
            src: path.join(src, 'assets/fonts/*.*'),
            dist: path.join(dist, 'build/fonts/')
        },
        scripts: path.join(src, '/**/*.js'),
        src: path.join(src, '**'),
        templates: path.join(src, '**/*.html')

    },
    cssnano: {
        discardComments: {removeAll: true},
        discardDuplicates: {removeAll: true},
        discardEmpty: {removeAll: true}
    },
    packages: [
        './package.json',
        './bower.json'
    ],
    cache: {
        template: {
            file: 'templates.js',
            options: {
                module: 'app',
                root: './',
                standalone: false
            }
        }
    },
    htmlmin: {
        collapseWhitespace: true,
        removeEmptyAttributes: true,
        caseSensitive: true
    },

    useref: {
        searchPath: './dist/'
    },

    iCheck: {
        imgSrc: 'vendor/iCheck/skins/flat/*.png',
        imgDest: 'dist/build/css/'
    },

    wiredep: {
        options: {
            bowerJson: bower.json,
            directory: bower.directory,
            ignorePath: bower.ignorePath
        },
        order: ['**/app.js', '**/*.js']
    },

    lint: path.join(src, '**/*.js'),

    plato: {
        output: path.join(report, '/plato'),
        options: {
            title: 'Plato Inspections Report',
            exclude: /.*\.spec\.js/
        }
    },

    init: function () {
        try {
            var config = require('./config.json');
            this.proxy = config;
        } catch (e) {
            console.log('cannot find ./gulp/config.json for proxy info');
        }

        return this;
    }

}.init();
