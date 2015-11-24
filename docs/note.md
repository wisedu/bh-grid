## 未使用的node模块
* react-hot-loader
* webpack-dev-server
* run-sequence

## 配置页面自动刷新
使用gulp-livereload，另外还需要下载chrome插件livereload

## 监控文件变化-watch
注意在gulp.task('scripts', function() {}) 内部function 不能传递callback参数，否则不会监控变化。原因未知。