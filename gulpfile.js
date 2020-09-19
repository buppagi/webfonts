/**************** 환경설정 ****************/

// 모듈
const { src, dest, task, watch, series, parallel } = require('gulp');
const options = require("./package.json").options; //Options : paths and other options from package.json
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const header = require('gulp-header');
const postcss = require('gulp-postcss');
const cleanCSS = require('gulp-clean-css');
const gitRevSync = require('git-rev-sync');
const moment = require('moment');
const del = require('del');
const logSymbols = require('log-symbols');

// 브라우저에서 미리보기
task('livepreview', (done) => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  done();
});

//브라우저 다시로드를 트리거하는 다시 로드 기능
function previewReload(done) {
  console.log("\n\t" + logSymbols.info, "Reloading Preview.\n");
  browserSync.reload();
  done();
}

// Error
const onError = (error) => {
  console.log([error.message, error.plugin]);
};

const plumberOption = {
  errorHandler: onError
};

//Compiling styles
task('styles', () => {
  return src(options.paths.src.css + '/*')
    .pipe(plumber(plumberOption))
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed',
      sourceComments: true
    }).on('error', sass.logError))
    .pipe(header([
      '@charset "UTF-8";',
      '/*!',
      ' * <%= name %> - <%= description %>',
      ' * ${filename}',
      ' * @link       <%= homepage %>',
      ' * @repository <%= repository.url %>',
      ' */\n',
    ].join('\n'), pkg))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest(options.paths.css));
});

task('styles2', () => {
  return src(options.paths.src.css + '/*')
    .pipe(plumber(plumberOption))
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded',
      sourceComments: true
    }).on('error', sass.logError))
    .pipe(dest(options.paths.css));
  });

task('watch-changes', (done) => {
  //Watching css Files edits
  watch(options.paths.src.css + '/*.scss', series('styles', previewReload));

  console.log("\n\t" + logSymbols.info, "파일의 변경 사항을 감시합니다.\n");

  done();
});

task('development', series('styles', (done) => {
  console.log("\n\t" + logSymbols.info, "npm run dev가 완료되었습니다. 루트의 style.css를 확인하세요.\n");
  done();
}));

task('optamizedBuild', series('styles', 'styles2', (done) => {
  console.log("\n\t" + logSymbols.info, "npm 실행 빌드가 완료되었습니다. \n");
  done();
}));


exports.default = series('development', 'livepreview', 'watch-changes');
exports.build = series('optamizedBuild');