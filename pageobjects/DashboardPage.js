class DashboardPage {


    constructor(page) {

        this.products = page.locator(".card-body");
        this.productsTexts = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
    }

    async searchProduct(productName) {

        const allTitles = await this.productsTexts.allTextContents();
        console.log(allTitles);
        const countTitles = await this.products.count();

        for (let i = 0; i < countTitles; ++i) {

            if (await this.products.nth(i).locator("b").textContent() === productName) {
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }
}
module.exports = {DashboardPage};