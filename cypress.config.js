const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverrest.dev',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
