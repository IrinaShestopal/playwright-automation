import { test, expect } from '@playwright/test';

test('verify deployed demo application', async ({ page }) => {
  await page.goto('https://demo-app-for-playwright-automation.onrender.com');

  await expect(page.getByRole('heading', { name: 'Hi my love' })).toBeVisible();
});