import dotenv from "dotenv";

const environment = process.env.ENV || "qa";

dotenv.config({
    path: `config/env/.env.${environment}`,
    override: false
});

export const config = Object.freeze({
    baseUrl: process.env.APP_BASE_URL!,
    adminUsername: process.env.ADMIN_USERNAME!,
    adminPassword: process.env.ADMIN_PASSWORD!,
    testUserUsername: process.env.TESTUSER_USERNAME1!,
    testUserPassword: process.env.TESTUSER_PASSWORD1!,
    apiUsername: process.env.API_USERNAME!,
    apiPassword: process.env.API_PASSWORD!
});