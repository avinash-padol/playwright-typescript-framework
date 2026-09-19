import { test, expect } from '../../fixtures/baseFixture';
import { config } from '../../config/config';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
/*
 - this {page} is coming from - import { test, expect } from '@playwright/test';
 - but after we rmove this import it is coming from - import { test, expect } from '../fixtures/baseFixture';
 - '../fixtures/baseFixture'; it also contains playwright fixtures and our CUSTOM FIXTURES
 - Due to this below test is not giving any error after removing its import
*/
// test('Login and verify dashboard', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.navigate(config.baseUrl);
//     await loginPage.login(config.username, config.password);
//     const dashboardPage = new DashboardPage(page);
//     await dashboardPage.verifyDashboardDisplayed();

// });

// test("Login and verify dashboard with fixtures", async ({ loginPage, page })=>{
//     await loginPage.navigate(config.baseUrl);
//     await loginPage.login(config.username, config.password);
//     const dashboardPage = new DashboardPage(page);
//     await dashboardPage.verifyDashboardDisplayed();
// });

/*
    - added Dashboard fixture
    - Both page objects use the same Playwright { page } fixture.
*/

test('Login verify dashboard with fixtures for ${user.username}', async ({ loginPage, dashboardPage }) => {
    await loginPage.navigate();
    await loginPage.login(config.username, config.password);
    await dashboardPage.verifyDashboardDisplayed();
});
