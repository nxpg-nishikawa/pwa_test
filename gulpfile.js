//gulp
const gulp = require('gulp');
const plumber = require("gulp-plumber");

//webpack
const webpack = require("webpack");
const webpackStream = require("webpack-stream");

const webpackConfigApp = require("./webpackApp.config");
gulp.task('webpack', function() {
		gulp.src('src/js/entry.js')
		.pipe(plumber())
		.pipe(webpackStream(webpackConfigApp, webpack))
		.pipe(gulp.dest('dist/js/'))
});

//js_vendor
const concat = require('gulp-concat');
gulp.task('jsVendor', () => {
	gulp.src('src/js/vendor/' + '**/*.js')
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('dist/js/'));
});

//pug
const pug = require('gulp-pug');
const pugOptions = {
	pretty: true
}

gulp.task('pug', () => {
	gulp.src(['src/pug/' + '**/*.pug', '!' + 'src/pug/' + '**/_*.pug'])
		.pipe(plumber())
		.pipe(pug(pugOptions))
		.pipe(gulp.dest('dist/'));
});

//stylus
const stylus = require('gulp-stylus');

gulp.task('stylus', () => {
	gulp.src('src/stylus/' + '**/!(_)*.styl')
		.pipe(plumber())
		.pipe(stylus())
		.pipe(gulp.dest('dist/css/'))
});

//Browser Sync
const browserSync = require("browser-sync");

gulp.task('browser-sync', () => {
	browserSync({
		server: {
			baseDir:'dist/'
		}
	});
	gulp.watch('dist/' + "**/*.html", ['reload']);
	gulp.watch('dist/' + "**/*.js", ['reload']);
	gulp.watch('dist/' + "**/*.css", ['reload']);
});

gulp.task('reload', () => {
	browserSync.reload();
});

//watch
gulp.task('watch', function () {
	gulp.watch('src/js/entry.js', ['webpack']);
	gulp.watch('src/js/import/' + '**/*.js', ['webpack']);
	gulp.watch('src/js/vendor' + '**/*.js', ['jsVendor']);
	gulp.watch(['src/pug/' + '**/*.pug', '!' + 'src/' + '**/_*.pug'], ['pug']);
	gulp.watch('src/stylus/' + '**/*.styl', ['stylus']);
});

gulp.task('default', ['browser-sync', 'watch']);