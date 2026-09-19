import { test, expect } from '@playwright/test';

test('Verify Homepage Title', async ({ page }) => {
  // Navigate to Wikipedia
  await page.goto('https://wikipedia.org');

  // Assert that the title contains the correct brand text
  await expect(page).toHaveTitle(/Wikipedia/);
});
