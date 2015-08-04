exports.config = {
  seleniumServerJar: 'SeleniumWeb_driver/selenium-server-standalone-2.45.0.jar',
  chromeDriver: 'SeleniumWeb_driver/chromedriver',
  specs: 'protractorSpec/spec.js',
  jasmineNodeOpts: { showColors: true },
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine2'
};