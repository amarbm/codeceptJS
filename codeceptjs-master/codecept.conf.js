exports.config = {
  tests: './*_test.js',
  output: './output',
  multiple: {
    basic: {
      browsers: ["chrome", "firefox"]
    }
  },
  plugins: {
    allure: {
      enabled: true,
      outputDir: './allure-results',
    },
  },
  helpers: {
    Allure: {
      require: './helper/Allure.js', 
      enabled: true,
    },
    
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjsdemo'
};
