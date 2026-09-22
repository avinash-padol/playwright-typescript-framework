import { test, expect } from '../../fixtures/baseFixture';

// test('Dashboard is displayed', async ({ dashboardPage }) => {
//     await dashboardPage.navigate();
//     await dashboardPage.verifyDashboardDisplayed();
// });

test.describe('Dashboard Tests', () => {
    test.describe.configure({ mode: 'parallel'})

    test.beforeEach(async ({ dashboardPage }) => {
        await dashboardPage.navigate();
    });

    test('Dashboard is displayed', async ({ dashboardPage }, testInfo) => {
        console.log(`Project: ${testInfo.project.name} | Test: ${testInfo.title}`)
        await dashboardPage.verifyDashboardDisplayed();
    });

    test('Time at work displayed on dashboard', async ({ dashboardPage }, testInfo) => {
        console.log(`Project: ${testInfo.project.name} | Test: ${testInfo.title}`)
        await dashboardPage.verifyTimeAtWorkDisplayed();
    });
});