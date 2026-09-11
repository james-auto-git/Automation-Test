class Login2 {
    constructor(page) {
    this.page = page;   

}
    async UserLogin(email, password) {
    await this.page.getByRole('button', { name: ' My account' }).click();
    await this.page.getByRole('link', { name: 'Login', exact: true }).click();
    await this.page.getByRole('textbox', { name: 'E-Mail Address' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
        

    }

}

module.exports = { Login2 };