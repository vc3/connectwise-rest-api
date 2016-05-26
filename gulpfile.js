'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const merge = require('merge2');
const size = require('gulp-size');
const uglify = require('gulp-uglify');

require('pretty-error').start();

const tsProject = ts.createProject('tsconfig.json');

gulp.task('build', () => {
    const tsResult = gulp.src('./src/**/*.ts').pipe(plumber()).pipe(ts(tsProject));

    return merge([
            tsResult.dts.pipe(gulp.dest('release')),
            tsResult.js
                .pipe(babel())
                .pipe(uglify())
                .pipe(size())
                .pipe(gulp.dest('release'))
    ]);
});
