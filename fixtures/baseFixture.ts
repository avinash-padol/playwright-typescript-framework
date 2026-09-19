import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type MyFixture = {

    loginPage: LoginPage;
    dashboardPage: DashboardPage;

};

/*
     - Both page objects use the same Playwright { page } fixture for that test.
     - "Create the required fixture for this test, provide it to the test, then clean it up."
*/
//"Extend the base test with fixtures described by MyFixtures."
export const test = base.extend<MyFixture>({
    loginPage: async ({ page }, use) =>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    dashboardPage: async ({ page }, use) =>{
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    }
});

export { expect } from '@playwright/test';
