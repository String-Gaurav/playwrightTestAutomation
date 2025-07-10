import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    headless: true,
    baseURL: 'https://demo.playwright.dev',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'Chrome', use: { browserName: 'chromium', headless: true } },
    { name: 'Firefox', use: { browserName: 'firefox', headless: true } },
  ],
});