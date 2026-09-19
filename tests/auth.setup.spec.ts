import { test as setup } from "@playwright/test";
import { config } from "../config/config"

const authFile = 'playwright/.auth/user.json';

setup("authentication", async ({ page })=>{
    await page.goto(config.baseUrl);
    await page.getByRole("textbox", { name: "Username" }).fill(config.username);
    await page.getByRole("textbox", { name: "Password" }).fill(config.password);
    await page.getByRole("button",  {name: "Login" }).click();
    await page.getByRole("heading", { name: "Dashboard"}).waitFor();
    await page.context().storageState({ path: authFile });
});