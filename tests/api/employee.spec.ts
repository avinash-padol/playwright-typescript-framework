import { request, test, expect} from "@playwright/test";
import { EmployeeApi } from "../../api/EmployeeApi";
import { ApiAssertions } from "../../api/ApiAssertions"
import { createUsersData, updateUserData, pathUserData } from "../../test-data/userData"
import { AuthApi } from "../../api/AuthApi"
import { ApiContext } from "../../api//ApiContext"

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

test("Request with Authorization header", async ({ request }) =>{
    const response = await request.get("https://jsonplaceholder.typicode.com/users/1",
        {
            headers:{
                Authorization: 'Bearer dummy-token'
            }
        }
    )
    console.log(response.status())
    expect(response.status()).toBe(200)
});

test('Create authenticated API context', async () => {
    const token = 'dummy-token';
    const apiContext = await ApiContext.createAuthenticated(token)
    const response = await apiContext.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );
    expect(response.status()).toBe(200);
    await apiContext.dispose();
});

test("Login API", async ({ request })=>{
    const authApi = new AuthApi(request)
    const result = await authApi.login({
        username: 'testuser',
        password: 'password123'
    });
    expect(result.accessToken).toBe('dummy-token');
})

test("Create authenticated API context new", async ({request})=>{
    const authApi = new AuthApi(request)
    const loginresult = await authApi.login({
        username: "testuser",
        password: "password123"
    })
    const apiContext = await ApiContext.createAuthenticated(loginresult.accessToken)
    const response = await apiContext.get("https://jsonplaceholder.typicode.com/users/1")
    expect(response.status()).toBe(200)
    await apiContext.dispose()
})