import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  await page.getByRole('link', { name: 'Register' }).click();
  await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible();
  await page.getByRole('textbox', { name: 'First Name*' }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).fill('testjames');
  await page.getByRole('textbox', { name: 'First Name*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name*' }).fill('test');
  await page.getByRole('textbox', { name: 'Last Name*' }).press('Tab');
  await page.getByRole('textbox', { name: 'E-Mail*' }).fill('test@test.com');
  await page.getByRole('textbox', { name: 'E-Mail*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Telephone*' }).press('End');
  await page.getByRole('textbox', { name: 'Telephone*' }).press('PageDown');
  await page.getByRole('textbox', { name: 'Telephone*' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'Telephone*' }).press('End');
  await page.getByRole('textbox', { name: 'Telephone*' }).press('NumLock');
  await page.getByRole('textbox', { name: 'Telephone*' }).fill('12345');
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('test123');
  await page.getByRole('textbox', { name: 'Password*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password Confirm*' }).fill('test1234');
  await page.getByText('I have read and agree to the').click();
  await page.getByRole('button', { name: 'Continue' }).click();

})