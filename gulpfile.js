const gulp = require('gulp');
const zip = require('gulp-zip');
const upload = require('gulp-file-post');
const del = require('del');

gulp.task('compress', function () {
  return gulp.src('./site/**/*')
    .pipe(zip('archive.zip'))
    .pipe(gulp.dest('.'));
});

gulp.task('upload', ['compress'], function () {
  return gulp.src('./archive.zip')
    .pipe(upload({
      url: 'http://wapstatic.sparta.html5.qq.com/upload',
      data: {
        type: 'zip',
        to: `/data/wapstatic/keithytsai/ui-know-how`
      },
      timeout: 30000
    }).on('end', function() {
      del.sync(['./archive.zip']);
    }));
});

gulp.task('default', function() {
  console.log('default');
});