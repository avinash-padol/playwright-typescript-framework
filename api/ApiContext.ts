import { APIRequestContext, request } from "@playwright/test"

export class ApiContext{
    static async createAuthenticated(token: string): Promise<APIRequestContext>{
        //this below request is instance of APIRequest which gives newContext and APIRequestContext
        //And the request we get in test is instance of APIRequestContext which do not have newContext
        return await request.newContext({
            extraHTTPHeaders:{
                Authorization: `Bearer ${token}`
            }
        });
    }
}