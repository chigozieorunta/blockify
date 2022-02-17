const { src, dest, watch } = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-clean-css');

const babel = require('gulp-babel');

const path = {
	src: {
		css: './assets/src/css/**/*.scss',
		js: './assets/src/js/**/*.js'
	},
	dest: {
		css: './assets/dist/css',
		js: './assets/dist/js'
	},
}

const compile = () => {
	return src(path.css.src)
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(minify())
		.pipe(dest(path.css.dest));
}

const observe = () => {
	watch(path.css.src, compile);
}

exports.sass = compile;
exports.watch = observe;
