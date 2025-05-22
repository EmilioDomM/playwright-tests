import { test, expect } from '@playwright/test';
import { link } from 'fs';

test('Login', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation/);

  await page.getByRole('link', { name: 'Signup / Login' }).click();
  await page.locator('[data-qa="login-email"]').click();
  await page.locator('[data-qa="login-email"]').fill('sundayxample@it.com');

  await page.locator('[data-qa="login-password"]').click();
  await page.locator('[data-qa="login-password"]').fill('password123');

  await page.getByRole('button', {name: 'Login'}).click();

  await expect(page).toHaveURL('https://automationexercise.com/');
  await expect(page.getByText(' Logged in as Jhon')).toBeVisible();

  await page.getByRole('link', { name: ' Delete Account' }).click();

  await expect(page.getByRole('heading', { name: 'Account Deleted!' })).toBeVisible();

});

