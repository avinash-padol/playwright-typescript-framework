import { test, expect } from '../../fixtures/baseFixture';

test('Dashboard is displayed', async ({ dashboardPage }) => {
    await dashboardPage.navigate();
    await dashboardPage.verifyDashboardDisplayed();
});