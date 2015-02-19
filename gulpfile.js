// Definere 2 variabler som henter "rescourcer", altså vores gulp plugin/s
var gulp = require("gulp"),
	uglify = require("gulp-uglify");

// Default Task (using 'gulp' command)
gulp.task("default",["scripts", "styles", "watch"]);

// Scripts Task
// Uglifies (minification of files)
gulp.task("scripts", function(){
	gulp.src("*.js")
	.pipe(uglify())
	.pipe(gulp.dest("build/minjs"));
});

// Styles Task
// Uglifies (minification of files)
gulp.task("styles", function(){
	console.log("Styles minified");
});


// Watch Task
// Watches JS
gulp.task("watch", function(){
	gulp.watch("*.js", ["scripts"]);
})