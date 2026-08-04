import dotenv from "dotenv";

dotenv.config({
    path: 'config/env/.env.qa'
});

export const config = Object.freeze({
    baseUrl: process.env.APP_BASE_URL!,
    username: process.env.APP_USERNAME!,
    password: process.env.APP_PASSWORD!
});