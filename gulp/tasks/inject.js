var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var path = require('path');
var order   = require('gulp-order');
var config = require('../config');


gulp.task('inject:inject-vendor', function () {
    return gulp.src(config.files.index.build)
            .pipe(wiredep(config.wiredep.options))
            .pipe(gulp.dest(config.dir.dist));
});

gulp.task('inject:inject-own', function () {
    return gulp.src(config.files.index.build)
            .pipe(inject(gulp.src(config.files.src, {read: false}).pipe(order(config.wiredep.order)),{relative: true}))
            .pipe(inject(gulp.src(config.dir.temp + config.cache.template.file, {read: false}), {name: 'inject:templates',relative: true}))
            .pipe(gulp.dest(config.dir.dist));
});