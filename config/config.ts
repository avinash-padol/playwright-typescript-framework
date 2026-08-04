import dotenv from "dotenv";

dotenv.config({
    path: 'config/env/.env.qa'
});

export const config = Object.freeze({
    baseUrl: process.env.BASE_URL!,
    username: process.env.USERNAME!,
    password: process.env.PASSWORD!
});