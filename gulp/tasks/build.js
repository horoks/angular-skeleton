var gulp     = require('gulp');
var sequence    = require('run-sequence');

gulp.task('build-prod' , function() {
    sequence('clean:all','copy','template:cache','inject:inject-vendor','inject:inject-own','optimize','clean:temp');
});

gulp.task('build-debug' , function() {
    sequence('clean:all','copy','template:cache','inject:inject-vendor','inject:inject-own');
});