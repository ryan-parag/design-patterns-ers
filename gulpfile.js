'use strict';

var gulp = require('gulp'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	minifyCSS = require('gulp-minify-css'),
	sourcemaps  = require('gulp-sourcemaps'),
	rename  = require('gulp-rename'),
 pug = require('gulp-pug'),
	browserSync = require('browser-sync').create(),
 pugLinter = require('gulp-pug-linter');

var paths = {
  dist: './dist/',
  sass: './src/scss/',
  css: './dist/css/docs/',
		pug: './src/views/pages/**/*.pug'
	};

/* SCSS
==============================================*/
gulp.task('sass', function () {
	return gulp.src(paths.sass + 'docs.scss')
		.pipe(sass())
		.pipe(sourcemaps.init())
		.pipe(minifyCSS())
		.pipe(prefix())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(paths.css))
		.pipe(browserSync.reload({
      stream: true
    }));
});

/* PUG
==============================================*/
gulp.task('pug', function () {
  return gulp.src(paths.pug)
  .pipe(pug({
  }))
.pipe(gulp.dest(paths.dist));
});

gulp.task('lint', function () {
  return gulp
    .src(paths.pug)
    .pipe(pugLinter())
    .pipe(pugLinter.reporter('fail'))
})

/* Watch
==============================================*/
gulp.task('watch',['browserSync'], function(){
  gulp.watch('./src/scss/**/*.scss', ['sass'], browserSync.reload);
		gulp.watch('./src/views/**/*.pug', ['pug'], browserSync.reload);
})

/* BrowserSync
==============================================*/
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
})



/* Build
==============================================*/
gulp.task('build', ['sass', 'pug', 'lint']);

/* Compile
==============================================*/
gulp.task('default', ['build', 'watch']);