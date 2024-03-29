const gulp = require('gulp');
const concat = require('gulp-concat');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
const ngAnnotate = require('gulp-ng-annotate');
const shell = require('gulp-shell');
const plumber = require('gulp-plumber'); // Handle gulp.watch errors without throwing / cancelling nodemon
const webpack = require('webpack-stream');
const browserSync = require('browser-sync'); // Live reload of css and html through 'browser-sync'
const nodemon = require('gulp-nodemon');
const historyFallback = require('connect-history-api-fallback');

const config = {
  src: {
    html: ['./client/**/*.html', './client/**/*.ico', './client/**/*.pdf'],
    css: ['./client/styles/scss/*.scss', './client/styles/scss/**/*.scss'],
    js: ['./client/index.js', './client/**/*.js'],
    json: './client/**/*.json',
    img: ['./client/images/**', './client/images/**/*', '!./client/images/**/*.sketch', '!./client/images/application-photos/*']
  },
  build: {
    html: './dist/',
    css: './dist/styles/css/',
    js: './dist/assets/',
    json: './dist/',
    img: './dist/images/'
  }
};

/* DEV TOOLS */

gulp.task('lint', function() {
  gulp.src('./client/**/*.js') //, './server/**/*.js' add to lint serverside js
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('browser-sync', ['nodemon'], () => {
  browserSync({
    proxy: 'localhost:5000',
    port: 3000,
    files: config.src.css,
    middleware: [historyFallback()],
  });
});

gulp.task('nodemon', (cb) => {
  var started = false;

  return nodemon({
    script: 'server/server.js',
    ext: 'html js'
  })
  .on('start', () => {
    // avoid nodemon being started multiple times
    if (!started) {
      cb();
      started = true;
    }
  })
  .on('restart', () => {
    console.log('nodemon restarted server!');
  });
});

/* BUILD TASKS */

gulp.task('clean', function() {
  return gulp.src(['./dist/data', './dist/files', './dist/styles', './dist/index.html'], {read: false})
    .pipe(clean({force: true}));
});

gulp.task('webpack', function() {
  return gulp.src(config.src.js[0])
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(config.build.js));
});

gulp.task('sass', function() {
  // var opts = { comments: true, spare: true };
  gulp.src(config.src.css)
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest(config.build.css))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    // .pipe(minifyCSS(opts))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.build.css));
});

gulp.task('copy-json-files', function () {
  gulp.src(config.src.json)
    .pipe(plumber())
    .pipe(gulp.dest(config.build.json));
});

gulp.task('copy-html-files', function () {
  gulp.src(config.src.html)
    .pipe(plumber())
    .pipe(gulp.dest(config.build.html));
});

gulp.task('clean-images', () => {
  return gulp.src(['./dist/images/**', './dist/images/**/*'], {read: false})
    .pipe(clean({force: true}));
});
 
gulp.task('images', ['clean-images'], () => {
  return gulp.src(config.src.img)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(config.build.img));
});

gulp.task('build', function() {
  runSequence(
    'clean',
    ['sass', 'copy-json-files', 'copy-html-files']
  );
});

gulp.task('watch', function() {
  gulp.watch(config.src.css, ['sass']);
  gulp.watch(config.src.json, ['copy-json-files']);
  gulp.watch(config.src.html, ['copy-html-files']);
});

/* ENVIRONMENT TASKS */

gulp.task('set-prod', function() {
    return process.env.NODE_ENV = 'production';
});

gulp.task('set-pres', function() {
    return process.env.NODE_ENV = 'presentation';
});

gulp.task('set-dev', function() {
    return process.env.NODE_ENV = 'development';
});

gulp.task('forever', shell.task([
  'forever start server/server.js'
]));

gulp.task('stop', shell.task([
  'forever stop server/server.js'
]));

gulp.task('node', shell.task([
  'node server/server.js'
]));

/* DEV v. PROD */

gulp.task('dev', function() {
  runSequence(
    'set-dev',
    'build',
    'watch',
    'browser-sync'
  );
});

gulp.task('pres', function() {
  runSequence(
    'build',
    'webpack',
    'node'
  );
});

gulp.task('prod', function() {
  runSequence(
    'set-prod',
    'build',
    'webpack',
    'forever'
  );
});