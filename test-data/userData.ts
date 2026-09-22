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