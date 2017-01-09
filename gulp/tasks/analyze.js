var gulp    = require('gulp');
var glob    = require('glob');
var plato   = require('plato');
var gif     = require('gulp-if');
var jshint  = require('gulp-jshint');
var jscs    = require('gulp-jscs');
var print   = require('gulp-print');
var args    = require('yargs').argv;
var config  = require('../config');

gulp.task('analyze', function() {
    return gulp
        .src(config.lint)
        .pipe(gif(args.verbose, print()))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe(jshint.reporter('fail'))
        .pipe(jscs());
});

gulp.task('plato', function(done) {
    var files = glob.sync(config.files.scripts);

    plato.inspect(files, config.plato.output, config.plato.options, completed);

    function completed(report) {
        var overview = plato.getOverviewReport(report);
        if (args.verbose) {
            log(overview.summary);
        }
        if (done) { done(); }
    };
});
