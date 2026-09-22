import { test as setup } from "@playwright/test";
import { config } from "../config/config"
import { loginUsers } from "../test-data/loginData"

const authFile = 'playwright/.auth/user.json';

for (const user of loginUsers) {
    setup(`Authentication ${user.username}`, async ({ page }) => {
        await page.goto(config.baseUrl);
        await page.getByRole("textbox", { name: "Username" }).fill(user.username);
        await page.getByRole("textbox", { name: "Password" }).fill(user.password);
        await page.getByRole("button", { name: "Login" }).click();
        await page.getByRole("heading", { name: "Dashboard" }).waitFor();
        await page.context().storageState({ path: `playwright/.auth/${user.username}.json` });
    });
}