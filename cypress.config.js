const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://buger-eats-qa.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
