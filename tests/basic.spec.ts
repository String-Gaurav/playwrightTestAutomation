import { test, expect } from '@playwright/test';

test('DuckDuckGo search interaction', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.fill('input[name="q"]', 'Playwright');
  await page.keyboard.press('Enter');

  // Wait for navigation and result title
  await page.waitForSelector('[data-testid="result-title-a"]', { timeout: 15000 });
  const firstResult = page.locator('[data-testid="result-title-a"]').first();
  await expect(firstResult).toBeVisible();
});