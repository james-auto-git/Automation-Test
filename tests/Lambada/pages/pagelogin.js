class Login {

    constructor(page) {
        this.page = page;                 // store the Playwright page instance
        this.URL = 'https://ecommerce-playground.lambdatest.io/index.php?route=common/home'; // set a default URL
    }

    async gotoURL() {
        await this.page.goto(this.URL);   // use the page instance
    }

   async myAccountLogin(email, password) {  // ← add parameters here
        await this.page.getByRole('button', { name: ' My account' }).hover();
        await this.page.getByRole('link', { name: 'Login', exact: true }).click();
        await this.page.getByRole('textbox', { name: 'E-Mail Address' }).fill(email);  // ← use email
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);     // ← use password
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async Logout() {
        await this.page.getByRole('button', { name: ' My account' }).hover()
        await this.page.getByRole('link', { name: 'Logout', exact: true }).click();
    }
}

module.exports = { Login };