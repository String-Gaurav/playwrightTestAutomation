const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');

test('Angular Practice Test',async ({page})=>
{
await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Gender").selectOption("Female");
await page.getByPlaceholder("Password").fill("test");
await page.getByRole("button",{name : 'Submit'}).click();
 const bool = await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
 console.log(bool);
 await page.getByRole("link", {name : 'Shop'}).click();
 await page.locator("app-card").filter({hasText :'Nokia Edge'}).getByRole("button").click();
 await page.locator(".react-date-picker__calendar-button.react-date-picker__button").click();

// await page.pause();

});

test('Calendar Test Practise',async ({page})=>
{
    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber,date,year];
await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

 await page.locator(".react-date-picker__calendar-button.react-date-picker__button").click();
 await page.locator("button[class='react-calendar__navigation__label']").click();
 await page.locator("button[class='react-calendar__navigation__label']").click();
 await page.getByText(year).click();
 await page.locator(".react-calendar__year-view__months button").nth(Number(monthNumber-1)).click();
 await page.locator("//abbr[text()='"+date+"']").click();
const inputLocators = page.locator("//input[contains(@class, 'react-date-picker__inputGroup__input')]");
const count = await inputLocators.count();

for (let i = 0; i < count; i++) {
  const value = await inputLocators.nth(i).inputValue();
  console.log(`Input ${i + 1}:`, value);
   expect(value).toEqual(expectedList[i]);
  
}


 
// await page.pause();

});