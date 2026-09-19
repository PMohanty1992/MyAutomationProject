import { test, expect } from '@playwright/test';

test('Simple Proof of Concept Pass Test', async ({ page }) => {
  // Go to Wikipedia
  await page.goto('https://wikipedia.org');
  
  // Verify the page title has the word Wikipedia in it
  await expect(page).toHaveTitle(/Wikipedia/);
});
