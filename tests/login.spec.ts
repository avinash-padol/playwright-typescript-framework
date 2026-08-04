import { test, expect } from '@playwright/test';
import { config } from '../config/config';
import { LoginPage } from '../pages/LoginPage';

test('Locator Experiment', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate(config.baseUrl);
    await loginPage.login(config.username, config.password);
    await page.pause();

});