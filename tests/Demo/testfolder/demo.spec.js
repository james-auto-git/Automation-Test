require('dotenv').config()
const { test, expect } = require('@playwright/test');
const { LoginDemo } = require('../page object/LoginDemo');
const { Login2 } = require('../page object/Login2');
const { AddOns } = require('../page object/AddOns')

test('Customer Checkout', async ({page}) => {
const Login = new LoginDemo(page)
const UserLogginIn = new Login2(page)
const AddnewOns = new AddOns(page)
  const password = process.env.USER_PASSWORD;
  const confirmPassword = process.env.CONFIRM_PASSWORD;
const randomNum = Math.floor(Math.random() * 10000);
  const email = `Testing${randomNum}@gmail.com`;

  await Login.goURL(); 
  await Login.Register('test', 'test', email, '1224', password, confirmPassword);
  await page.screenshot({ path: `screenshots/${randomNum}-Registration.png` })
  await page.retry

  await Login.ContinueBtn()
  await expect(page.getByRole('heading', { name: ' Your Account Has Been' })).toBeVisible(); // Validate successfull registration
  await page.waitForTimeout(3000);
  await page.screenshot({ path: `screenshots/${randomNum}-Login.png` })
  await Login.Logout()
  await expect(page.getByRole('heading', { name: ' Account Logout' })).toBeVisible();

  // User Login
  await UserLogginIn.UserLogin(email, password)

  // Add Ons
  await AddnewOns.AddOn('Widgets') // other option Widgets or Modules
  await page.screenshot({ path: `screenshots/${randomNum}-AddOns.png` })


//await page.pause()

})