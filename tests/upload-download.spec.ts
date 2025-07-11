import { test, expect } from '@playwright/test';
import fs from 'fs';

test('@upload file upload example', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.setInputFiles('#file-upload', 'tests/tests/assets/sample.txt');
  await page.click('#file-submit');
  await expect(page.locator('#uploaded-files')).toHaveText('sample.txt');
});

test('@download file download example', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('text=some-file.txt'), // pick an actual file from the list
  ]);

  const path = await download.path();
  expect(path).not.toBeNull();
});

