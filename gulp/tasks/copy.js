var gulp = require('gulp');
var config = require('../config');
var imagemin = require('gulp-imagemin');

gulp.task('copy', ['copy:index', 'copy:img', 'copy:fonts', 'copy:icheck'], function () {
    return gulp;
});

gulp.task('copy:index', function () {
    return gulp.src(config.files.index.src)
            .pipe(gulp.dest(config.dir.dist))
            ;
});


gulp.task('copy:img', function () {
    return gulp.src(config.files.images.src)
            .pipe(imagemin({optimizationLevel: 4}))
            .pipe(gulp.dest(config.files.images.dist))
            ;
});

gulp.task('copy:fonts', function () {
    return gulp.src(config.files.fonts.src)
            .pipe(gulp.dest(config.files.fonts.dist))
            ;
});

gulp.task('copy:icheck', function () {
    return gulp.src(config.iCheck.imgSrc)
            .pipe(gulp.dest(config.iCheck.imgDest))
            ;
});

