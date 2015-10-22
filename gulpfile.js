var gulp = require("gulp"),
    rename = require("gulp-rename"),
    livereload = require("gulp-livereload"),
    uglify = require("gulp-uglify"),
    notify = require("gulp-notify");

//JS 
var jshint = require("gulp-jshint"),
    babel = require("gulp-babel");


//Style Dependencies
var sass = require("gulp-sass"),
    minifycss = require("gulp-minify-css");

//JS Dependencies
var jshint = require("gulp-jshint"),
    concat = require("gulp-concat"),
    rjs = require("requirejs"),
    shell = require("gulp-shell");

//tests
var karma = require("karma").server;

//jshint - client js
gulp.task("lint-client", function () {
    return gulp.src(["public/js/**/*.js", "!public/js/build.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

//jshint - tests js
gulp.task("lint-test", function () {
    return gulp.src("test/**/*.test.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});


gulp.task("babel", function () {
    return gulp.src(["public/js/**/*.js", "public/js/tempaltes/*"])
        .pipe(babel())
        .pipe(gulp.dest("dist/js/"));
});

gulp.task("copy-data", function () {
    return gulp.src("public/js/data/*")
        .pipe(gulp.dest("dist/js/data"))
});


gulp.task("testOnce", function (done) {
    karma.start({
        configFile: __dirname + "/karma.conf.js",
        singleRun: true
    }, function (exitCode) {
        done(exitCode ? "There are failing tests" : undefined);
    });
});

gulp.task("test", function (done) {
    karma.start({
        configFile: __dirname + "/karma.conf.js",
        singleRun: false
    }, function (exitCode) {
        done(exitCode ? "There are failing tests" : undefined);
    });
});

//before we run the build make sure the r.js is installed
gulp.task("test_r", function () {
    return gulp.src("")
        .pipe(shell(["r.js"], {ignoreErrors: true}))
        .on("error", notify.onError({
            title: "r.js",
            message: "Error r.js is not installed"
        }))
        .pipe(notify({message: "r.js is installed"}));
});

//build the main.min.js
gulp.task("build", function () {
    return gulp.src("")
        .pipe(shell(["r.js -o public/js/build.js"]))
        .pipe(notify("Build completed!"));
});

//Styles
gulp.task("sass", function () {
    return gulp.src("public/scss/*.scss", {style : "expanded"})
        .pipe(sass())
        .pipe(gulp.dest("./dist/css"))
        .pipe(notify({message : "Styles completed!"}));
});


gulp.task("copy-templates", function () {
    return gulp.src("public/js/templates/*")
        .pipe(gulp.dest("dist/js/templates"))
});

//Clean
gulp.task("clean", function () {
    del(["./dist"]);
});

gulp.task("default", function () {
    gulp.start("copy-data", "babel", "sass", "testOnce");
    //gulp.start("lint-client", "lint-test", "testOnce");
    //gulp.start("test_r", "build");
});

gulp.task("autotest", function () {
    gulp.start("test");
});

gulp.task("watch", function () {
    //watch sass files
    gulp.watch("public/scss/*.scss", ["sass"]);
    gulp.watch("public/js/**/*.js", ["babel"]);
    gulp.watch("public/js/data/*", ["copy-data"]);
    gulp.watch("public/js/templates/*.html", ["copy-templates"]);
    gulp.watch("test/**/*.test.js", ["test"]);
    //create livereaload
    livereload.listen();
    //watch the files on dist folder
    gulp.watch(["dist/js/"]).on("change", livereload.changed);
});


