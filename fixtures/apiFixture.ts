import { test as base } from "@playwright/test";
import { APIRequestContext } from "@playwright/test";
import { AuthApi } from "../api/AuthApi";
import { ApiContext } from "../api/ApiContext";
import { EmployeeApi } from "../api/EmployeeApi";
import { config } from "../config/config";

type ApiFixtures = {
    authenticatedRequest: APIRequestContext;
    employeeApi : EmployeeApi;
};

export const test = base.extend<ApiFixtures>({
    authenticatedRequest: async({ request }, use) =>{
        const authApi = new AuthApi(request);
        const loginResult = await authApi.login({
            username: config.apiPassword,
            password: config.apiPassword
        });
        const apiContext = await ApiContext.createAuthenticated(loginResult.accessToken);
        await use(apiContext);
        await apiContext.dispose();
    },

    employeeApi: async({ authenticatedRequest }, use) =>{
        const employeeApi = new EmployeeApi(authenticatedRequest);

        await use(employeeApi);
    }
});

export { expect } from '@playwright/test';