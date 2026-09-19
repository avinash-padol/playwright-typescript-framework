import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DashboardPage extends BasePage{

    private readonly dashboardHeading: Locator;

    constructor(page:Page){
        super(page);
        this.dashboardHeading = this.page.getByRole("heading", { name : "Dashboard"});
    }     
    
    async navigate(): Promise<void> {
        await this.page.goto("/web/index.php/dashboard/index");
    }
    
    async verifyDashboardDisplayed(): Promise<void>{
        await expect(this.dashboardHeading).toBeVisible();
    }
}