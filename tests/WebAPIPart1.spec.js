const {test, expect, request} = require('@playwright/test');
const {APiUtils}= require('./utils/APiUtils');
const {DashboardPage} = require('../pageobjects/DashboardPage');
const {CartPage} = require('../pageobjects/CartPage');
const {CheckoutPage} = require('../pageobjects/CheckoutPage');

const loginPayload ={userEmail:"lucknowomax@gmail.com",userPassword:"Test@123"}
const orderPayload ={orders:[{country:"Cuba",productOrderedId:"67a8dde5c0d3e6622a297cc8"}]}
let response;


test.beforeAll( async()=>
{
    const apiContext = await request.newContext();
    const apiUtils= new APiUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);

});

test.only('Positive Test Login', async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client/");
    const product = page.locator(".card-body");
    const productName = 'ZARA COAT 3';
    const email = "lucknowomax@gmail.com";

   const dashboardPage = new DashboardPage(page);
   const checkoutPage = new CheckoutPage(page);
   const cartpage = new CartPage(page);
   await dashboardPage.searchProduct(productName);
   await cartpage.navigateToCart();
   await cartpage.waitForProduct();
   await cartpage.isProductVisible();
   await cartpage.proceedToCheckout();

  await checkoutPage.enterCountry("Cub");
  await checkoutPage.selectCountryFromDropdown();
  await checkoutPage.selectCountry();
// const allTitles = await page.locator(".card-body").allTextContents();
// console.log(allTitles);
// const countTitles = await product.count();

// for(let i =0; i < countTitles; ++i)
//     {

//     if(await product.nth(i).locator("b").textContent() === productName)
//     {
//        await product.nth(i).locator("text= Add To Cart").click();
//        break;
//     }
// }
// await page.locator("[routerlink*='cart']").click();
// await page.locator("h3:has-text('ZARA COAT 3')").waitFor();
// const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();

// expect(bool).toBeTruthy();
// await page.locator("text ='Checkout'").click();
// await page.locator("input[placeholder='Select Country']").pressSequentially("Cuba",{delay:100});
// await page.locator(".ta-results").waitFor({ state: 'visible', timeout: 5000 });
// const dropdown = page.locator(".ta-results");
// await dropdown.waitFor();
// const dropdownCount = await dropdown.locator("button").count();

// for(let i =0; i<dropdownCount; ++i){

//     const text = await dropdown.locator("button").nth(i).textContent();

//     if(text.trim() === "India"){

//         await dropdown.locator("button").nth(i).click();
//         break;
//     }
     
// }
// expect(page.locator("label[type='text']").first()).toHaveText(email);
// await page.locator(".btnn.action__submit.ng-star-inserted").click();
// const order = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
// console.log(order);

// const orderId = order.replace(/\|/g, '').trim();
// await page.locator("text=' Orders History Page '").click();
// const orderPageOrderId = page.locator("tbody tr");
// const orderCount = await orderPageOrderId.count();

// for(let i =0; i<=orderCount; ++i){

//     const orderText = await orderPageOrderId.nth(i).locator("th").textContent();

//     if(order.includes(orderText)){
//        await orderPageOrderId.nth(i).locator("button").first().click();
//         break;
//     }}

// await page.pause();

});