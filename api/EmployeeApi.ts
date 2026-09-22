import { APIRequestContext } from "@playwright/test"
import { CreateUserRequest, UpdateUserRequest, PatchUserRequest, UserResponse } from "../test-data/userData";

export class EmployeeApi {
    constructor(private request: APIRequestContext) {}

    async getUser(userId : number): Promise<UserResponse>{
        const respone = await this.request.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const body = respone.json();
        return body;
    }

    async createUser(userData: CreateUserRequest){
        return await this.request.post(
            'https://jsonplaceholder.typicode.com/users',
            {
                data : userData
            }
        );
    }

    async updateUser(userId : number, userData : UpdateUserRequest){
        return await this.request.put(
            `https://jsonplaceholder.typicode.com/users/${userId}`,
            {
                data: userData
            }
        );
    }

    async patchUser(userId: number, userData: PatchUserRequest){
        return await this.request.patch(
            `https://jsonplaceholder.typicode.com/users/${userId}`,
            {
                data: userData
            }
        );
    }

    async deleteUser(userId: number){
        return await this.request.delete(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
    }
}