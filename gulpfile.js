const gulp = require('gulp');
const plumber = require('gulp-plumber');
const watch = require('gulp-watch');
const gulpsass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');


var onError = function(err){
    console.log("Se ha producido un error: ", err.message);
    this.emit("end");
}

gulp.task('sass', function(){
    return gulp.src("./sass/style.scss")
        .pipe(plumber({errorHandler:onError}))
        .pipe(gulpsass())
        .pipe(gulp.dest('.'))
});



gulp.task('default', function(){
        gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});