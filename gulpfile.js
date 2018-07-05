const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglyfi = require('gulp-uglify');
const sass = require('gulp-sass');

gulp.task('message', () =>
  console.log('Gulp is running...')
);

// Copy all HTML files
gulp.task('copyHTML', () =>
  gulp.src('src/*.html')
    .pipe(gulp.dest('build'))
);

// Optimize images
gulp.task('imageMin', () =>
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
);

// Minify Js
gulp.task('minifyJS', () =>
  gulp.src('src/scripts/*.js')
    .pipe(uglyfi())
    .pipe(gulp.dest('build/scripts'))
);

// Compile sass
gulp.task('sass', () =>
  gulp.src('src/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'))
    .pipe(gulp.dest('src/css'))
);

// Run everthing at once
gulp.task('default', ['message', 'copyHTML', 'imageMin', 'sass', 'minifyJS']
);

// Keep watching for changes
gulp.task('watch', function(){
  gulp.watch('src/*.html', ['copyHTML']);
  gulp.watch('src/sass/*.sass', ['sass']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/scripts/*.js', ['minifyJS']);
});
