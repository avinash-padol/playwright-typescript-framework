import { test, expect} from "@playwright/test";
import { EmployeeApi } from "../../api/EmployeeApi";
import { ApiAssertions } from "../../api/ApiAssertions"
import { createUsersData, updateUserData, pathUserData } from "../../test-data/userData"

test("Get user", async ({ request }) => {
    const employeeApi = new EmployeeApi(request);

    const result = await employeeApi.getUser(1);
    
    ApiAssertions.expectStatus(result.response, 200)
    expect(result.body.id).toBe(1);
    expect(result.body.name).toBe('Leanne Graham');
    expect(result.body.username).toBe('Bret');
    expect(result.body.email).toBe('Sincere@april.biz');
});

for (const user of createUsersData)
test(`Create user - ${user.username}`, async ({ request }) => {
    const employeeApi = new EmployeeApi(request);
    const result = await employeeApi.createUser(user);
    ApiAssertions.expectStatus(result.response, 201)
    expect(result.body.name).toBe(user.name)
    expect(result.body.username).toBe(user.username)
    expect(result.body.email).toBe(user.email)

});

test("Update user using PUT", async ({ request }) => {
    const employeeApi = new EmployeeApi(request);
    const result = await employeeApi.updateUser(1, updateUserData);
    ApiAssertions.expectStatus(result.response, 200)
    expect(result.body.name).toBe(updateUserData.name)
    expect(result.body.username).toBe(updateUserData.username)
    expect(result.body.email).toBe(updateUserData.email)
});

test("Update user using PATCH", async ({ request }) => {
    const employeeApi = new EmployeeApi(request);
    const result = await employeeApi.patchUser(11, pathUserData);
    ApiAssertions.expectStatus(result.response, 200)
    expect(result.body.email).toBe(pathUserData.email)
});

test("Delete user", async ({ request }) => {
    const employeeApi = new EmployeeApi(request);
    const respone = await employeeApi.deleteUser(11)
    ApiAssertions.expectStatus(respone, 200)
});