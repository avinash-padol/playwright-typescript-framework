import { test, expect } from '@playwright/test';
import { config } from '../config/config';

test('has title', async ({ page }) => {
  await page.goto(config.baseUrl);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto(config.baseUrl);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("Print config", ()=>{
    console.log(config.baseUrl);
    console.log(config.username);
});
