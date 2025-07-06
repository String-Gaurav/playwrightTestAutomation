// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */

  const config = ({

  testDir: './tests',
  timeout: 40 *1000,
  expect :{

      timeout: 5000,

  },
 reporter : 'html',
  use: {

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

browserName : 'chromium',
headless : true,
screenshot : 'on',
trace : 'retain-on-faliure'



  },
});

module.exports = config


