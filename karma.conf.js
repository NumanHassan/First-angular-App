module.exports = function(config) {
  config.set({ 
    basePath: '', 
    frameworks: ['jasmine'], 
    exclude: [ ], 
    files: [ 'bower_components/jquery/jquery.js',
             'bower_components/angular/angular.js',
             'bower_components/angular-route/angular-route.js',
             'bower_components/angular-mocks/angular-mocks.js',
              'source/myApp.js',
             'source/myAppCtrl.js',
             'source/index.html',
              'test/ControllerSpec.js'
             
    ],
    preprocessors: { }, 
    reporters: ['progress'], 
    port: 9876, 
    colors: true, 
    logLevel: config.LOG_INFO, 
    autoWatch: false, 
    browsers: ['Chrome'], 
    singleRun: true 
  });
};  