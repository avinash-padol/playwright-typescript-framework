export interface User{
    id?:number;
    name: string;
    username: string;
    email: string;
}

export interface CreateUserRequest{
    name: string;
    username: string;
    email: string;
}

export interface UpdateUserRequest{
    name: string;
    username: string;
    email: string;
}

export interface PatchUserRequest{
    name?: string;
    username?: string;
    email?: string;
}

export interface UserResponse{
    id: number;
    name: string;
    username: string;
    email: string;
}

export const createUserData: CreateUserRequest = {
    name: "Sachin",
    username: "sachin123",
    email: "sachin@example.com"
}

export const updateUserData: UpdateUserRequest = {
    name: "Sachin_updated",
    username: "sachinupdated",
    email: "updated@example.com"
}

export const pathUserData: PatchUserRequest = {
    email: "newemail@exmple.com"
}