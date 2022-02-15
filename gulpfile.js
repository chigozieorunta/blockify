const { src, dest, watch } = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-clean-css');

const compile = () => {
	return src(path.css.src)
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(minify())
		.pipe(dest(path.css.dest));
}

exports.sass = compile;
