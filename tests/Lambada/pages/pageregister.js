class RegisterAccount {

    constructor(page) {
        this.page = page;                 // store the Playwright page instance
        this.URL = 'https://ecommerce-playground.lambdatest.io/index.php?route=common/home'; // set a default URL
    }

    async gotoURL() {
        await this.page.goto(this.URL);   // use the page instance
    }

    async register(firstName, lastName, email, phoneNumber, password, confirmPassword) {
        await this.page.getByRole('button', { name: ' My account' }).hover();
        await this.page.getByRole('link', { name: 'Register' }).click();
        //await expect(this.URLpage.getByRole('heading', { name: 'Register Account' })).toBeVisible(); // validation registration page
        await this.page.getByRole('textbox', { name: 'First Name*' }).fill(firstName);
        await this.page.getByRole('textbox', { name: 'Last Name*' }).fill(lastName);
        await this.page.getByRole('textbox', { name: 'E-Mail*' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Telephone*' }).fill(phoneNumber);
        await this.page.getByRole('textbox', { name: 'Password*' }).fill(password);
        await this.page.getByRole('textbox', { name: 'Password Confirm*' }).fill(confirmPassword);
        await this.page.getByText('I have read and agree to the').click();
        await this.page.getByRole('button', { name: 'Continue' }).click();
        
    }
}
module.exports = { RegisterAccount };