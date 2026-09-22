import { APIResponse, expect } from "@playwright/test"

export class ApiAssertions{

    static expectStatus(response: APIResponse, expectedStatus: number): void{
        expect(response.status()).toBe(expectedStatus);
    }
}