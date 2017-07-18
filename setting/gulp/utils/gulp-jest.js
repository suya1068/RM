import gutil from 'gulp-util';
import jest from 'jest';
import through2 from 'through2';


export default (options = {}) => {
    return through2({ objectMode: true }, (chunk, encoding, done) => {
        const composedOption = Object.assign({}, options);

        jest.runCLI(composedOption, ['<rootDir>'], result => {
            console.log('>>> ', result);
            if (result.numFailedTests || result.numFailedTestSuites) {
                done(new gutil.PluginError('test', { message: 'Tests Failed' }));
            } else {
                done();
            }
        });
    });
};
