const gulp = require('gulp');

const SOURCE = ['./src/**/*.js', './src/**/*.template'];
const DEST = './build/npm/lib';

const SOURCE_README = '*.md';
const DEST_README = './build/npm';

gulp.task('default', function() {
  gulp.src(SOURCE)
		.pipe(gulp.dest(DEST));

  gulp.src(SOURCE_README)
		.pipe(gulp.dest(DEST_README));
});
