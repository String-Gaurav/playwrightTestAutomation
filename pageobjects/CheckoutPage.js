class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.countryInput = page.locator("input[placeholder='Select Country']");
        this.countryDropdown = page.locator(".ta-results");
        this.dropdownButtons = this.countryDropdown.locator("button");
    }

    async enterCountry(countryText) {
        await this.countryInput.pressSequentially(countryText, { delay: 500 });
        await this.countryDropdown.waitFor({ state: 'visible', timeout: 5000 });
    }

    async waitForDropdown() {

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

module.exports = { CheckoutPage };