var gulp    = require('gulp');
var gif     = require('gulp-if');
var minify  = require('gulp-htmlmin');
var cache   = require('gulp-angular-templatecache');
var config  = require('../config');


gulp.task('template:cache',  function() {
    return gulp
        .src(config.files.templates)
        .pipe(minify(config.htmlmin))
        .pipe(cache(
            config.cache.template.file,
            config.cache.template.options
        ))
        .pipe(gulp.dest(config.dir.temp));
});