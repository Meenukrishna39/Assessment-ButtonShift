const { defineConfig } = require('cypress');
const Mochawesome = require('mochawesome');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 5000,
  requestTimeout: 10000,
  responseTimeout: 30000,
  pageLoadTimeout: 60000,
  execTimeout: 60000,
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    }
  }
});
