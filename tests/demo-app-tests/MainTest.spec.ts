import { test, expect } from '@playwright/test';

test('verify app heading', async ({ page }) => {
  await page.goto('https://demo-app-for-playwright-automation.onrender.com');

  await expect(page.getByRole('heading', { name: 'Hi my love' })).toBeVisible();
});

test('verify click button', async ({ page }) => {
  await page.goto('https://demo-app-for-playwright-automation.onrender.com'); 
  
  await page.getByRole('button', { name: 'Click me!', exact: true }).click();

  await expect(page.locator('#message')).toContainText('How are you?!');
});