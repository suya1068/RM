import gulp from 'gulp';
import test from './setting/gulp/tasks/test';

import jestConfig from "./jest.config.json";


gulp.task('test', test('test/', jestConfig));
gulp.task('test:watch', test('test/', { ...jestConfig, watch: true }));
gulp.task('coverage', test('test/', { ...jestConfig, coverage: true }));
