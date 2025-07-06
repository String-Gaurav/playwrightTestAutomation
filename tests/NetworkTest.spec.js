const { test, expect, request } = require('@playwright/test');

test('Positive Test Login', async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {

            const response = await page.request.fetch(route.request());
            let body = JSON.stringify(fakePayload);
            route.fulfill({
                response,
                body
            });
        })
        // await page.pause();
        await page.locator("button[routerlink*='myorders']").click();
        await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
        console.log(await page.locator(".mt-4").textContent());

});

test('takingscreenshot', async ({ page }) => {



    await page.goto("https://www.google.co.in");
        expect(await page.screenshot()).toMatchSnapshot('landingpage.png');

});