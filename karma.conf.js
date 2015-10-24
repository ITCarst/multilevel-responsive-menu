// Karma configuration
// Generated on Wed Sep 09 2015 17:32:23 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs', "sinon"],

    // list of files / patterns to load in the browser
    files: [
        {pattern: "public/js/templates/*", included: false},
        {pattern: "public/js/data/menu.data.json", included: false},
        {pattern: "public/js/*.js", included: false},
        {pattern: 'test/**/*.test.js', included: false},

        {pattern: "node_modules/requirejs-plugins/src/json.js", included: false},
        {pattern: "node_modules/requirejs-plugins/lib/text.js", included: false},
        {pattern: "node_modules/lodash/index.js", included: false},

        'test/test-main.js'
    ],

    // list of files to exclude
    exclude: [
        "public/js/main.js"
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        "public/js/**/*.js": ["babel"],
        "test/**/*.test.js" : ["babel"]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}

