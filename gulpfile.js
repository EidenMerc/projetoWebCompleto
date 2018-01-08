var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// taks para o sass
gulp.task('sass', function () {
    return gulp.src('sass/**/*.sass')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

// taks gulp watch
gulp.task('watch', function () {
    gulp.watch('sass/**/*.sass', [ 'sass'])
})
// task default gulp
gulp.task('default', ['sass', 'watch'])
    console.log("Hello Coders");