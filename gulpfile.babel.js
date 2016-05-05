import gulp from 'gulp';
import webpack from 'webpack-stream';
import less from 'gulp-less';
import path from 'path';

gulp.task('default', ['watch']);

gulp.task('scripts', () => {
	return gulp.src('./src/js/index.js')
	  .pipe(webpack( require('./webpack.config.js') ))
	  .pipe(gulp.dest('./build/js'));
});

gulp.task('styles', () => {
  return gulp.src('./src/less/styles.less')
    .pipe(less({
		paths: [ path.join(__dirname, 'less') ]
    }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', () => {
	gulp.watch('./src/less/**/*.less', ['styles']);
	gulp.watch('./src/js/**/*.js', ['scripts']);
});