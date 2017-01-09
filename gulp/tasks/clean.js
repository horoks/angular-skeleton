var gulp    = require('gulp');
var del     = require('del');
var config  = require('../config');

gulp.task('clean:all', function(done) {
    return del(config.dir.dist, done);
});

gulp.task('clean:temp', function(done) {
    return del(config.dir.temp, done);
});
