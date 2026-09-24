import { APIRequestContext } from "@playwright/test"
import { LoginRequest, LoginResponse } from "../test-data/authData"

export class AuthApi {
    constructor(private request: APIRequestContext){}

    async login(credential: LoginRequest): Promise<LoginResponse>{
        // Real API call will be added later
        
        return {
            accessToken: 'dummy-token'
        }
    }
}