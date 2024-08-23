'use strict';

var babel = require('gulp-babel'),
    browserSync = require('browser-sync'),
    cleanCSS = require('gulp-clean-css'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    image = require('gulp-image'),
    prefixer = require('gulp-autoprefixer'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    strip = require('gulp-strip-comments'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}

var folders = {
    src: 'src/',
    dst: './'
}

var path = {
    build: {
        js: folders.dst + 'js/',
        css: folders.dst + 'css/',
        images: folders.dst + 'images/',
        fonts: folders.dst + 'fonts/'
    },
    src: {
        js: folders.src + 'js/*.js',
        css: folders.src + 'styles/app.scss',
        images: folders.dst + 'images/**/*.*',
        fonts:  [
            'node_modules/font-awesome-sass/assets/fonts/**/*.woff',
            'node_modules/font-awesome-sass/assets/fonts/**/*.woff2'
        ]
    },
    watch: {
        js: folders.src + 'js/**/*.js',
        css: folders.src + 'styles/**/*.scss'
    },
    clean: ['js', 'css'],
    node: 'node_modules'
};

gulp.task('browser-sync', ['styles:build', 'js:build'], function() {

    var files = [
        folders.dst + '*.*'
    ];

    browserSync.init(files, {
        server: {
            baseDir: folders.dst
        }
    });
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) 
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(rigger())
        .pipe(strip())
        .pipe(sourcemaps.init()) 
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('styles:build', function () {
    gulp.src(path.src.css) 
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [path.src.css],
            outputStyle: 'compressed',
            sourceMap: true,
            errLogToConsole: true
        }))
        .on('error', swallowError)
        .pipe(prefixer())
        .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('images:build', function (cb) {
    gulp.src(path.src.images)
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            guetzli: false,
            gifsicle: true,
            svgo: true,
            concurrent: 10
        }))
        .pipe(gulp.dest(path.build.images));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
})

gulp.task('clean', function (cb) {
    for (var i = 0; i < path.clean.length; i++) {
        rimraf(path.clean[i], cb);
    }
});

gulp.task('build', [
    'fonts:build',
    'js:build',
    'styles:build'
]);

gulp.task('default', ['build', 'browser-sync'], function () {
    gulp.watch(path.watch.css, ['styles:build']);
    gulp.watch(path.watch.js, ['js:build']);
});
