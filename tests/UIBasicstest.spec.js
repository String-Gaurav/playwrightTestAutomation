const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');

test('Browser Playwright test',async ({browser})=>
{
    const userName = page.locator("#username");

const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await userName.fill("rahulshettyacademy");
await page.locator("#password").fill("learning");
await page.locator("#signInBtn").click();
// await page.locator("[style*='block']").textContent();

console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");

});

test('Positive Test Login',async ({browser})=>
{

const context = await browser.newContext();
const page = await context.newPage();
const userName = page.locator("#username");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await userName.fill("rahulshettyacademy");
await page.locator("#password").fill("learning");
await page.locator("#signInBtn").click();
 console.log(await page.locator(".card-body a").nth(0).textContent());
// const allTitles = await page.locator(".card-body a").allTextContents();
console.log(await page.locator(".card-body a").allTextContents());

});

test('Dropdown selection',async ({page})=>
{

const userName = page.locator("#username");
const locatorLink = page.locator("[href*='documents-request']");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await userName.fill("rahulshettyacademy");
await page.locator("#password").fill("learning");

const dropDown = page.locator("select.form-control");

await dropDown.selectOption("Teacher");
await page.locator(".radiotextsty").nth("1").click();
await expect(page.locator(".radiotextsty").nth("1")).toBeChecked();
await page.locator("#okayBtn").click();

await expect(locatorLink).toHaveAttribute('class', 'blinkingText');
locatorLink.click();
// await page.locator("#signInBtn").click();
await page.pause();


});

test('New Page tab',async ({browser})=>
{

const context = await browser.newContext();
const page = await context.newPage();
const userName = page.locator("#username");
const locatorLink = page.locator("[href*='documents-request']");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await userName.fill("test");
await page.locator("#password").fill("learning");

const dropDown = page.locator("select.form-control");

await dropDown.selectOption("Teacher");
await page.locator(".radiotextsty").nth("1").click();
await expect(page.locator(".radiotextsty").nth("1")).toBeChecked();
await page.locator("#okayBtn").click();

await expect(locatorLink).toHaveAttribute('class', 'blinkingText');
const [newPage] = await Promise.all([
    
    context.waitForEvent('page'), 
    locatorLink.click(),
])
// await page.locator("#signInBtn").click();

const textPresent = await newPage.locator(".red").textContent();
console.log(textPresent);
const arrayText = textPresent.split("@")
const domain = arrayText[1].split(" ")[0]

console.log(domain);
await page.locator("#username").fill(domain);


});