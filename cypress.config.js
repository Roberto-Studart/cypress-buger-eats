const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: w4pek5,
    baseUrl: 'https://buger-eats-qa.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
