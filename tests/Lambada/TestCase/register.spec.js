require('dotenv').config()
const { test, expect } = require('@playwright/test');
const { RegisterAccount } = require('../pages/pageregister');
const fs = require('fs');
const path = require('path');

test('test', async ({ page }) => {
    const reg = new RegisterAccount(page)
    const randomNum = Math.floor(Math.random() * 999) + 1;
    const email = `test${randomNum}@lambadatest.com`;
    const password = process.env.USER_PASSWORD;
    const confirmpassword = process.env.CONFIRM_PASSWORD;

    await reg.gotoURL()
    await reg.register('fntest', 'lntest', email, '123', password, confirmpassword)
    await expect(page.locator('h1')).toContainText('Your Account Has Been Created!');

    const filePath = path.join(__dirname, '../fixtures/userData.json');

    // Read existing users or start with empty array
    let users = [];
    if (fs.existsSync(filePath)) {
        users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }

    // Add new email to the array
    users.push({ email });
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    console.log(`Saved email: ${email}`);
});