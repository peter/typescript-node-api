const gulp = require('gulp');
const ts = require('gulp-typescript');
const tslint = require("gulp-tslint");

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

const src = 'src/**/*.ts';

gulp.task("lint", () =>
  gulp.src(src)
      .pipe(tslint({
        formatter: "verbose"
      }))
      .pipe(tslint.report())
);

gulp.task('build', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], () => {
  gulp.watch(src, ['build']);
});

gulp.task('default', ['watch']);
