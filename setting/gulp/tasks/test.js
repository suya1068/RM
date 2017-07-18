import gulp from 'gulp';
import plumber from 'gulp-plumber';
import jest from '../utils/gulp-jest';


/**
 * test task
 * @param {Array<String>|String} source
 * @param {Object} config - jest cli config
 */
export default (source, config) => {
    return function test() {
        return gulp.src(source)
            // .pipe(plumber({
            //     handleError: function (err) {
            //         console.log(err);
            //         this.emit('end');
            //     }
            // }))
            .pipe(jest(config));
    }
};
