// page object/LoginDemo.js
class LoginDemo {
  constructor(page) {
    this.page = page;                 // store the Playwright page instance
    this.URL = 'https://ecommerce-playground.lambdatest.io/index.php?route=common/home'; // set a default URL
  }

  async goURL() {
    await this.page.goto(this.URL);   // use the page instance
  }

  async Register(userName, lastName, email, phoneNumber, password, confirmPassword) {
    await this.page.getByRole('button', { name: ' My account' }).hover();
    await this.page.getByRole('link', { name: 'Register' }).click();
    //await expect(this.URLpage.getByRole('heading', { name: 'Register Account' })).toBeVisible(); // validation registration page
    await this.page.getByRole('textbox', { name: 'First Name*' }).fill(userName);
    await this.page.getByRole('textbox', { name: 'Last Name*' }).fill(lastName);
    await this.page.getByRole('textbox', { name: 'E-Mail*' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Telephone*' }).fill(phoneNumber);
    await this.page.getByRole('textbox', { name: 'Password*' }).fill(password);
    await this.page.getByRole('textbox', { name: 'Password Confirm*' }).fill(confirmPassword);
    await this.page.getByText('I have read and agree to the').click();
  }

  async ContinueBtn() {
  await this.page.getByRole('button', { name: 'Continue' }).click();

  }

  async Logout() {
  await this.page.getByRole('link', { name: 'Continue' }).click();
  await this.page.getByRole('button', { name: ' My account' }).hover()
  await this.page.getByRole('link', { name: 'Logout', exact: true }).click();
  }


}

module.exports = { LoginDemo };
