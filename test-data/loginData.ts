import { config } from "../config/config";

export type LoginData = {
    username: string;
    password: string;
};

export const loginUsers: LoginData[] = [
    {
        username: config.adminUsername,
        password: config.adminPassword
    }
];