const { defineConfig } = require("cypress");

module.exports = defineConfig(
  {
  reporter:'cypress-mochawesome-reporter',//for html report
  screenshotsFolder: 'cypress/reports/mochawesome-report/assets',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'OrangeHRM_E2E_Testing',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  
  e2e: 
  {
    setupNodeEvents(on, config) 
    {
      // implement node event listeners here
      
      screenshotOnRunFailure=true;
    
      require('cypress-mochawesome-reporter/plugin')(on);//for html report

    },
  },
});
