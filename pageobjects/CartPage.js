class CartPage {
    constructor(page) {
        this.page = page;
        this.cartLink = page.locator("[routerlink*='cart']");
        this.productTitle = page.locator("h3:has-text('ZARA COAT 3')");
        this.checkoutButton = page.locator("text='Checkout'");
    }

    async navigateToCart() {
        await this.cartLink.click();
    }

    async waitForProduct(productName = 'ZARA COAT 3') {
        await this.page.locator(`h3:has-text('${productName}')`).waitFor();
    }

    async isProductVisible(productName = 'ZARA COAT 3') {
        return await this.page.locator(`h3:has-text('${productName}')`).isVisible();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.countryInput = page.locator("input[placeholder='Select Country']");
        this.countryDropdown = page.locator(".ta-results");
        this.dropdownButtons = this.countryDropdown.locator("button");
    }

    async enterCountry(countryText) {
        await this.countryInput.pressSequentially(countryText, { delay: 100 });
    }

    async waitForDropdown() {
        await this.countryDropdown.waitFor({ state: 'visible', timeout: 5000 });
    }

    async selectCountryFromDropdown(targetCountry) {
        await this.waitForDropdown();
        const dropdownCount = await this.dropdownButtons.count();
        
        for (let i = 0; i < dropdownCount; ++i) {
            const text = await this.dropdownButtons.nth(i).textContent();
            if (text.trim() === targetCountry) {
                await this.dropdownButtons.nth(i).click();
                break;
            }
        }
    }

    async selectCountry(searchText, targetCountry) {
        await this.enterCountry(searchText);
        await this.selectCountryFromDropdown(targetCountry);
    }
}

module.exports = { CartPage };