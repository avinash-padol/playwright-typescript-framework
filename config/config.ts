import dotenv from "dotenv";

dotenv.config({
    path: 'config/env/.env.qa'
});

export const config = Object.freeze({
    baseUrl: process.env.APP_BASE_URL!,
    adminUsername: process.env.ADMIN_USERNAME!,
    adminPassword: process.env.ADMIN_PASSWORD!,
    testUserUsername: process.env.TESTUSER_USERNAME!,
    testUserPassword: process.env.TESTUSER_PASSWORD!
});