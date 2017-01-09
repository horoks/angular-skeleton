var gulp = require('gulp');
var useref = require('gulp-useref');
var rev = require('gulp-rev');
var replace = require('gulp-rev-replace');
var filter = require('gulp-filter');
var gulpif = require('gulp-if');
var minify = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var config = require('../config');


gulp.task('optimize', function () {

    var indexHtmlFilter = filter(['**/*', '!**/index.html'], {restore: true});

    return gulp.src(config.files.index.build)
            .pipe(useref(config.useref))
            .pipe(gulpif('*.js', uglify()))
            .pipe(gulpif('*.css', minify(config.cssnano)))
            .pipe(indexHtmlFilter)
            .pipe(rev())
            .pipe(indexHtmlFilter.restore)
            .pipe(replace())
            .pipe(gulp.dest(config.dir.dist))
            ;
});