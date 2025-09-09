const { defineConfig } = require("cypress");

const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if(browser.family === 'chromium'){
          launchOptions.args.push(
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu'
          )
        }
        return launchOptions
      }),
      cypressSplit(on, config)
      // IMPORTANT: return the config object
      return config
    },
  },
});
