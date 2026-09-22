import { APIRequestContext } from "@playwright/test"
import { CreateUserRequest, UpdateuserRequest, PatchUserRequest } from "../test-data/userData";

export class EmployeeApi {
    constructor(private request: APIRequestContext) {}
    async getUser(userId : number){
        return await this.request.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
        );
    }

    async createUser(userData: CreateUserRequest){
        return await this.request.post(
            'https://jsonplaceholder.typicode.com/users',
            {
                data : userData
            }
        );
    }

    async updateUser(userId : number, userData : UpdateuserRequest){
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