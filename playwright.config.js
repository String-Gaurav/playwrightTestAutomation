// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config = defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 5000,
  },
  
  // Enhanced reporting configuration
  reporter: [
    ['html', { 
      open: 'never',
      outputFolder: 'playwright-report',
      host: 'localhost',
      port: 9323
    }],
    ['json', { outputFile: 'playwright-report/results.json' }],
    ['junit', { outputFile: 'playwright-report/results.xml' }],
    ['list'] // Console output during test runs
  ],
  
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    headless: true,
    screenshot: 'only-on-failure', // More efficient - only capture on failures
    video: 'retain-on-failure', // Add video recording for failed tests
    trace: 'retain-on-failure',
    
    // Enhanced test context
    actionTimeout: 10000,
    navigationTimeout: 30000,
    
    // Better debugging info
    contextOptions: {
      // Capture console logs
      recordVideo: {
        dir: 'test-results/',
        size: { width: 1280, height: 720 }
      }
    }
  },
  
  // Test output directory
  outputDir: 'test-results/',
  
  // Retry configuration
  retries: process.env.CI ? 2 : 0,
  
  // Parallel execution
  workers: process.env.CI ? 1 : undefined,
  
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Browser-specific settings
        contextOptions: {
          permissions: ['clipboard-read', 'clipboard-write']
        }
      },
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        // Firefox-specific settings
        launchOptions: {
          firefoxUserPrefs: {
            'media.navigator.streams.fake': true,
            'media.navigator.permission.disabled': true
          }
        }
      },
    },
    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        // WebKit-specific settings
        contextOptions: {
          permissions: ['camera', 'microphone']
        }
      },
    },
  ],
});

module.exports = config;