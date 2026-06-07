const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  // Both configurations work (env or expose) but env will override expose
  // env: {
  //   disableSchemaValidation: false,
  //   enableMismatchesOnUI: 'true,
  //   generateReport: 'json'
  // },
  // expose: {
    // disableSchemaValidation: false,
    // enableMismatchesOnUI: true,
  //   generateReport: 'json'
  // },

  viewportWidth: 1280,
  viewportHeight: 800,
  
  reportsFolder: 'cypress/reports',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    baseUrl: 'https://petstore.swagger.io/v2',
  },
});
