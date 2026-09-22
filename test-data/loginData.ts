import { config } from "../config/config";
export type LoginData = {
    username: string;
    password: string;
};

export const loginUsers: LoginData[] = [
    {
        username: config.adminPassword,
        password: config.adminUsername
    },
    {
        username: config.testUserUsername,
        password: config.testUserPassword
    }
];