const { test, expect } = require('@playwright/test');

test('Customer Checkout', async ({page}) => {

await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
await page.getByRole('button', { name: ' My account' }).click();
await page.getByRole('link', { name: 'Register', exact: true }).click();
await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible(); // validate registration page
await console.log('Verification successfully')


await page.pause()

})