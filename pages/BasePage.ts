import { Locator, Page } from "@playwright/test";

export class BasePage{

    constructor(protected page: Page){ // not public because anyone can manipulate it that breaks encapsulation
    }

    async navigate(url: string): Promise<void>{ // normal function returns value, async returns Promise

        await this.page.goto(url);

    }

    async click(locator: Locator): Promise<void>{
        await locator.click();
    }

    async fill(locator: Locator, text: string){
        await locator.fill(text);
    }

    async getText(locator: Locator): Promise<string>{
        return await locator.innerText(); // we can remove await, as we are returning Promise
    }

    async isVisible(locator: Locator): Promise<boolean>{
        return await locator.isVisible(); // we can remove await, as we are returning Promise
    }
}
