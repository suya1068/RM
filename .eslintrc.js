module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true,
        'jest': true
    },
    'parser': 'babel-eslint',
    'extends': 'standard',
    'plugins': [
        'standard',
        'promise',
        'jest'
    ],
    'parserOptions': {
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never'
            }
        ]
    }
};
