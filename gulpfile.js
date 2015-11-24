var gulp = require('gulp');
var gulpWebpack = require("gulp-webpack");
var webpackConfig = require("./webpack.config");
var del = require('del');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

var paths = {
  scripts: ['./index.js', './src/**/*.js', './examples/**/*.js']
};

gulp.task('clean', function(callback) {
  del(['dist'], callback);
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.scripts, ['build']);
});

gulp.task('scripts', function(){
    gulp.src('./index.js')
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest('./dist/'))
        .pipe(livereload());
});

gulp.task('build', ['clean', 'scripts'],function(callback){
    
});

gulp.task('serve', function(callback){
    connect.server();
});

gulp.task('default',['clean', 'scripts', 'watch', 'serve'], function(){

});
