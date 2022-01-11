"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var cssimport = require("gulp-cssimport");
var autoprefixer = require("gulp-autoprefixer");
var mergeStream = require("merge-stream");

gulp.task("css", function () {
  var allFiles = gulp
    .src("scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cssimport())
    .pipe(autoprefixer())
    .pipe(gulp.dest("dist"));
  return mergeStream(allFiles);
});

gulp.task("default", function () {
  gulp.watch("scss/**/*.scss", gulp.series("css"));
});
