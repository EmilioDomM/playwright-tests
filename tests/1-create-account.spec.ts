import { test, expect } from '@playwright/test';
import { link } from 'fs';

test('Create Account', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  await expect(page).toHaveTitle(/Automation/);

  await page.getByRole('link', { name: 'Signup / Login' }).click();

  await page.locator('[data-qa="signup-name"]').click();
  await page.locator('[data-qa="signup-name"]').fill('Jhon');

  await page.locator('[data-qa="signup-email"]').click();
  await page.locator('[data-qa="signup-email"]').fill('sundayxample@it.com');

  await page.getByRole('button', { name: "Signup"}).click();

  await page.getByText("Mr.").click();

  await page.locator('[data-qa="password"]').click();
  await page.locator('[data-qa="password"]').fill('password123');

  await page.locator('[data-qa="first_name"]').click();
  await page.locator('[data-qa="first_name"]').fill("Jhon");

  await page.locator('[data-qa="last_name"]').click();
  await page.locator('[data-qa="last_name"]').fill("Cena");  

  await page.locator('[data-qa="address"]').click();
  await page.locator('[data-qa="address"]').fill("xxxxxx");  

  await page.locator('[data-qa="state"]').click();
  await page.locator('[data-qa="state"]').fill("xxxxx"); 
  
  await page.locator('[data-qa="city"]').click();
  await page.locator('[data-qa="city"]').fill("xxxx");  

  await page.locator('[data-qa="zipcode"]').click();
  await page.locator('[data-qa="zipcode"]').fill("98273");  

  await page.locator('[data-qa="mobile_number"]').click();
  await page.locator('[data-qa="mobile_number"]').fill("7362589104");

  await page.getByRole('button', { name: "Create Account"}).click();

  await expect(page.getByRole('heading', { name: 'Account Created!'})).toBeVisible();

  await page.locator('[data-qa="continue-button"]').click();

  await expect(page).toHaveURL('https://automationexercise.com/');
  await expect(page.getByText(' Logged in as Jhon')).toBeVisible();
});
