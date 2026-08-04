import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

    private readonly usernameTextBox: Locator;
    private readonly passwordTextbox: Locator;
    private readonly loginButton: Locator;

    constructor (page: Page){
        super(page);
        this.usernameTextBox = this.page.getByRole('textbox', { name: 'Username'});
        this.passwordTextbox = this.page.getByRole('textbox', { name: 'Password'});
        this.loginButton = this.page.getByRole("button", { name: "Login" });
    }

    async login (username: string, password: string): Promise<void>{
        await this.fill(this.usernameTextBox, username);
        await this.fill(this.passwordTextbox, password);
        await this.click(this.loginButton);
    }


}