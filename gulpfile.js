"use strict";

var gulp = require("gulp");
var apidocSwagger = require("gulp-apidoc-swagger");
var runSequence = require("run-sequence");
var angularTemplatecache = require("gulp-angular-templatecache");
var replace = require("gulp-replace");
var fs = require("fs");
var packageConfig = JSON.parse(fs.readFileSync("./package.json"));

// Generate swagger documentation
gulp.task("swagger", function() {
    apidocSwagger.exec({
        src: "app/controllers/", // To get limited frontend data replace with  'swagger/input''
        dest: "swagger/output",
        definitions: "swagger/definitions/definitions.json",
        debug: true
    });

    return gulp.src(["./swagger/output/swagger.json"])
        .pipe(replace(/\/api\/1.0.0\//g, "/"))
        .pipe(gulp.dest("./swagger/output/acpaas"));
});
