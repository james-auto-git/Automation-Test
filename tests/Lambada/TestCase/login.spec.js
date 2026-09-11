require('dotenv').config()
const { test, expect } = require('@playwright/test');
const { Login } = require('../pages/pagelogin');
const fs = require('fs');       
const path = require('path');

test('test', async ({ page }) => {
    const login = new Login(page)
     // Read all saved users in userData.json file
    const filePath = path.join(__dirname, '../fixtures/userData.json');
    const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    console.log('Loaded users:', users);
    console.log('Array length:', users.length);

    // Pick a random one in userData.json file
    const randomIndex = Math.floor(Math.random() * users.length);
    console.log('Random index:', randomIndex);
    const { email } = users[randomIndex];
    const password = process.env.USER_PASSWORD;

    console.log(`Logging in with: ${email}`);

    await login.gotoURL();
    await login.myAccountLogin(email, password);
    await expect(page.locator('#content')).toContainText('My Account');
    await expect(page.locator('#content')).toContainText('My Orders');
    await login.Logout();
    await expect(page.locator('h1')).toContainText('Account Logout');

})

