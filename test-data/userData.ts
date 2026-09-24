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

export const createUsersData: CreateUserRequest[] = [
    {
        name: "Sachin",
        username: "sachin123",
        email: "sachin@example.com"
    },
    {
        name: 'Rahul',
        username: 'rahul123',
        email: 'rahul@example.com'
    },
    {
        name: 'Amit',
        username: 'amit123',
        email: 'amit@example.com'
    }
]

export const updateUserData: UpdateUserRequest = {
    name: "Sachin_updated",
    username: "sachinupdated",
    email: "updated@example.com"
}

export const patchUserData: PatchUserRequest = {
    email: "newemail@exmple.com"
}