var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	jade = require('gulp-jade'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	imageMin = require('gulp-imagemin'),
	merge = require('merge-stream'),
	image = require('gulp-image');
	// svgmin = require('gulp-svgmin');

// JADE --> HTMl
gulp.task('html', function(){
	gulp.src('src/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('dist/'))
});

// SASS --> CSS --> Autoprefix --> Minify --> final CSS file
gulp.task('styles', function(){
	sass('src/css/main.scss')
		.pipe(autoprefixer({
			browsers: ['IE 9', 'last 3 versions']
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css/'))
});

// Minifying JS files
gulp.task('scripts', function(){
	var plugins = gulp.src('src/js/plugins/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/plugins/'))

	var custom = gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'))

	return merge(plugins, custom);
});

// Images not getting compressed. Needs to be checked. Copying over images as is for now.
gulp.task('images', function () {
  gulp.src('src/img/**')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: false,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest('dist/img/'));
});


// Copying over font files
gulp.task('fonts', function(){
	gulp.src('src/fonts/**')
	.pipe(gulp.dest('dist/fonts'))
});
//  Run all tasks
gulp.task('default', ['html', 'styles', 'scripts', 'images', 'fonts']);