import { APIRequestContext, request } from "@playwright/test"

export class ApiContext{
    static async createAuthenticated(token: string): Promise<APIRequestContext>{
        return await request.newContext({
            extraHTTPHeaders:{
                Authentiction: `Bearer ${token}`
            }
        });
    }
}