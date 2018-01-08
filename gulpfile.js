var gulp = require('gulp');
var sass = require('gulp-sass');

// taks para o sass
gulp.task('sass', function () {
    return gulp.src('sass/*.sass')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});


// task default gulp
gulp.task('default', function(){
  console.log("Hello Coders");
})
