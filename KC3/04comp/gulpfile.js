var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");

gulp.task("default", function() {
  return browserify({
      entries: "./todo.jsx",
      debug: true,
      transform: ["reactify"]
    }).bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./"));
});

gulp.task("watch", function() {
  return gulp.watch("./*.jsx", ["default"]);
});
