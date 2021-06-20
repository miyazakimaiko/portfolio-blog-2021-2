'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var componentsPaths = {
    styles: {
        src: './src/components/**/*.scss',
        dest: './src/components'
    }
};
var templatesPaths = {
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

    scss(componentsPaths)
    gulp.watch(componentsPaths.styles.src, scss);

    scss(templatesPaths)
    gulp.watch(templatesPaths.styles.src, scss);
}
exports.watch = watch