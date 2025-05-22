import { test, expect } from '@playwright/test';
import { link } from 'fs';

test('Create account already created', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  await expect(page).toHaveTitle(/Automation/);

  await page.getByRole('link', { name: 'Signup / Login' }).click();

  await page.locator('[data-qa="signup-name"]').click();
  await page.locator('[data-qa="signup-name"]').fill('Jhon');

  await page.locator('[data-qa="signup-email"]').click();
  await page.locator('[data-qa="signup-email"]').fill('sundayxample@it.com');

  await page.getByRole('button', { name: "Signup"}).click();

  await expect(page.getByText('Email Address already exist!')).toBeVisible();
});
