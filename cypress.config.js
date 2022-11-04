const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here    
      
    },
    baseUrl: 'https://green-beach-01ab0f703.1.azurestaticapps.net'
  },
});
