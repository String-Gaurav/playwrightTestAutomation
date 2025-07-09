import { test, expect } from '@playwright/test';

test('DuckDuckGo search interaction', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');

  // Type search and submit
  const searchInput = page.locator('input[name="q"]');
  await expect(searchInput).toBeVisible();
  await searchInput.fill('Playwright');
  await searchInput.press('Enter');

  // Wait for results to appear using updated class
  const resultTitles = page.locator('.react-results--main h2 a');
  await expect(resultTitles.first()).toBeVisible();

  // Optional: Validate page title
  await expect(page).toHaveTitle(/Playwright/);
});
