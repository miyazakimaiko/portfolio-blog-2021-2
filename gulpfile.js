'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var paths1 = {
    styles: {
        src: './src/components/**/*.scss',
        dest: './src/components'
    }
};
var paths2 = {
    styles: {
        src: 'src/templates/**/*.scss',
        dest: 'src/templates'
    }
};

function scss(paths) {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.styles.dest));
}
exports.scss = scss
function watch() {

    scss(paths1)
    gulp.watch(paths1.styles.src, scss);

    scss(paths2)
    gulp.watch(paths2.styles.src, scss);
}
exports.watch = watch