const gulp = require("gulp"),
    watch = require("gulp-watch"),
    postcss = require('gulp-postcss'),
    mixins = require('postcss-mixins'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import');

gulp.task('styles', function(){
  return gulp.src('styles/styles.css')
      .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
      .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
      })
      .pipe(gulp.dest('public/styles'));
});

// gulp.task('scripts', function (callback) {
//     webpack(require("./webpack.config.js"), function () {
//         callback();
//     });
// })

gulp.task("watch", function(){
    watch("./views/**/*.ejs", function(){
        gulp.start('styles');
    })
    watch("./styles/**/*.css", function (){
        gulp.start('styles');
    })
    // watch("./scripts/**/*.js", function() {
    //     gulp.start('scripts');
    // })
});
