
import {test, expect} from '@playwright/test';

test.only('Real brokerage Registration', async ({page})=>{

    await page.goto('https://bolt.playrealbrokerage.com/');
    await page.click('text=Join Real');
    await page.fill('[name="firstName"]','John');
await page.fill('[name="lastName"]','test');
await page.fill('[name="username"]','test123456');
await page.fill('[name="emailAddress"]','test27June@mailsac.com');
await page.click('[data-testid="country"]');
await page.click('text=United states');

if(await page.locator('[name="password"]').isVisible()){

    await page.fill('[name="password"]','SecurePass123');

     await page.fill('[name="confimrPassword"]','SecurePass123');
}

await page.click('[name="terms"]');
await page.click('button[type="submit"]');

await expect(page.locator('p.text-xl font-primary-medium')).toBeVisible();


});