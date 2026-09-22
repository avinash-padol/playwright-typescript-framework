import { APIResponse } from "@playwright/test"

export interface ApiResponse<T>{
    response: APIResponse,
    body: T
}