import { test as base } from "@playwright/test";
import { APIRequestContext } from "@playwright/test";
import { AuthApi } from "../api/AuthApi";
import { ApiContext } from "../api/ApiContext";

type ApiFixtures = {
    authenticatedRequest: APIRequestContext
}

export const test = base.extend<ApiFixtures>({
    authenticatedRequest: async({ request }, use) =>{
        const authApi = new AuthApi(request);
        const loginResult = await authApi.login({
            username: "testuser",
            password: "password123"
        });
        const apiContext = await ApiContext.createAuthenticated(loginResult.accessToken);
        await use(apiContext);
        await apiContext.dispose();
    }
});

export { expect } from '@playwright/test';