var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var tsify = require('tsify');
<<<<<<< HEAD
var fancy_log = require('fancy-log');
var paths = {
    pages: ['src/*.html']
};
=======
var paths = {
  pages: ['src/*.html']
};
// var ts = require('gulp-typescript');
// var tsProject = ts.createProject('tsconfig.json');
>>>>>>> ebbd7cc56b627d3a301f8cb6e06d95f10aa7196b

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

gulp.task('copy-html', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

<<<<<<< HEAD
function bundle() {
    return watchedBrowserify
        .bundle()
        .on('error', fancy_log)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
}

gulp.task('default', gulp.series(gulp.parallel('copy-html'), bundle));
watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', fancy_log);
=======
gulp.task('default', gulp.series(gulp.parallel('copy-html'),
  function () {
    return browserify({
      basedir: '.',
      debug: true,
      entries: ['src/main.ts'],
      cache: {},
      packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
}));
>>>>>>> ebbd7cc56b627d3a301f8cb6e06d95f10aa7196b
