// const{test, expect} = require('@playwright/test');

// let webContext;
// test.beforeAll( async({browser})=>
// {
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     const product = page.locator(".card-body");
//     const productName = 'ZARA COAT 3';
//     const email = "lucknowomax@gmail.com";
// await page.goto("https://rahulshettyacademy.com/client/");
// await page.locator("#userEmail").fill(email);
// await page.locator("#userPassword").fill("Test@123");
// await page.locator("[value='Login']").click();
// // await page.locator(".card-body b").nth(0).textContent();
// await page.waitForLoadState('networkidle');
// await context.storageState({path: 'state.json'});
// webContext = await browser.newContext({storageState :'state.json'});

// });


// test('Browser Playwright test',async ()=>
// {
  

//     const productName = 'ZARA COAT 3';
//     const email = "lucknowomax@gmail.com";
//      const page =  await webContext.newPage();
//       const product = page.locator(".card-body");
//       await page.goto("https://rahulshettyacademy.com/client/");
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
//     }
// }
   

// });