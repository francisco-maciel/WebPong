var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var util = require('util');

gulp.task('build', function () {
    // TODO add building
});

gulp.task('test', function () {
    // TODO add testing
});

gulp.task('watch', function () {
  gulp.watch('src/*.*', []);
  gulp.start('run');
});

gulp.task('run', ['build'], function () {
    nodemon({
        delay: 10,
        script: './app.js',
        cwd: "./src/",
        args: ["config.json"],
        ext: 'html js css'
    })
    .on('restart', function () {
        util.log('server restarted!');
    });
});
