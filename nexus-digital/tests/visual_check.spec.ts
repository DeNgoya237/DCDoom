import { test, expect } from '@playwright/test';

test('verify homepage and profile', async ({ page }) => {
  // Desktop View
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/DENGOYA Digitals/);
  await page.screenshot({ path: 'homepage_desktop.png', fullPage: true });

  // Mobile View
  await page.setViewportSize({ width: 375, height: 667 });
  await page.reload();
  await page.screenshot({ path: 'homepage_mobile.png', fullPage: true });

  // Profile Page
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:3000/auth');
  await page.screenshot({ path: 'profile_desktop.png', fullPage: true });
});
