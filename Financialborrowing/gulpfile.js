var gulp = require("gulp");
var uglify = require("gulp-uglify");//压缩js
var less = require("gulp-less");//编译less
var cleanCss = require("gulp-clean-css");//压缩css
var rename = require("gulp-rename");//重命名
var imagemin = require("gulp-imagemin");//压缩图片gu
var webserver = require("gulp-webserver");//起服务


//压缩js
gulp.task("jsTask",function(){
    gulp.src("./js/**/*.js")   //读取源文件
        .pipe(uglify()) //压缩js
        .pipe(rename({
            suffix:".min"
        })) //重命名
        .pipe(gulp.dest("./dist/js")); //输出
});
gulp.task('scripts', function () {
    return gulp.src('./main.js')
        .pipe(uglify())
        .pipe($.jshint())
        .pipe(contact('vue.min.js'))
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.size());
});
//编译less、压缩css、重命名
gulp.task("cssTask",function(){
    gulp.src("./less/**/*.less")//读取源文件
        .pipe(less()) //编译less
        .pipe(cleanCss()) //压缩css
        .pipe(rename({
            suffix:".min"
        })) //重命名
        .pipe(gulp.dest("./dist/css")); //输出目录
});

//压缩图片
gulp.task("imgTask",function(){
    gulp.src("./imgs/**/*.{png,jpg,gif,ico,svg}")//读取源文件
        .pipe(imagemin())//压缩图片
        .pipe(gulp.dest("./dist/imgs")); //输出目录
});

gulp.task("webserver",function(){
    gulp.src("./") //服务根目录
        .pipe(webserver({
            livereload: true, // 启用LiveReload
            open: true, // 服务器启动时自动打开网页
            post:9999
        }));
});

//观察者 
gulp.task("watch",function(){
    // 监听到less文件变化，执行数组中的所有任务
    gulp.watch("./less/**/*.less",gulp.series("cssTask"));
});


gulp.task("default",gulp.parallel('webserver','watch'));

//上线前手动执行的任务
// 压缩js  jsTask


// 压缩图片 imgTask

