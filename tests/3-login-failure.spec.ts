import { test, expect } from '@playwright/test';
import { link } from 'fs';

test('Wrong password', async ({page}) => {
  await page.goto('https://automationexercise.com/');

  await expect(page).toHaveTitle(/Automation/);

  await page.getByRole('link', { name: 'Signup / Login' }).click();
  await page.locator('[data-qa="login-email"]').click();
  await page.locator('[data-qa="login-email"]').fill('sundayxample@it.com');

  await page.locator('[data-qa="login-password"]').click();
  await page.locator('[data-qa="login-password"]').fill('wrong_password');

  await page.getByRole('button', {name: 'Login'}).click();

  await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
});
