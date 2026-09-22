import { test, expect} from "@playwright/test";
import { EmployeeApi } from "../../api/EmployeeApi";
import { ApiAssertions } from "../../api/ApiAssertions"

test("Get user", async ({ request }) => {
    const employeeApi = new EmployeeApi(request);

    const result = await employeeApi.getUser(1);
    
    ApiAssertions.expectStatus(result.response, 200)
    expect(result.body.id).toBe(1);
    expect(result.body.name).toBe('Leanne Graham');
    expect(result.body.username).toBe('Bret');
    expect(result.body.email).toBe('Sincere@april.biz');
});

test("Create user", async ({ request }) => {
    const employeeApi = new EmployeeApi(request);
    const result = await employeeApi.createUser(
        {
            name: 'Sachin',
            username: 'sachin123',
            email: 'sachin@example.com'
        }
    );

    ApiAssertions.expectStatus(result.response, 201)

    const body = result.body;

    console.log(body);

    expect(result.body.name).toBe('Sachin')
    expect(result.body.username).toBe('sachin123')
    expect(result.body.email).toBe('sachin@example.com')

});

test("Update user using PUT", async ({ request }) => {
    const employeeApi = new EmployeeApi(request);
    const result = await employeeApi.updateUser(1,
        {
            name: 'Sachin_updated',
            username: 'sachinupdated',
            email: 'updated@example.com'
        }
    );
    ApiAssertions.expectStatus(result.response, 200)
    const body = result.body
    console.log(body)
    expect(body.name).toBe('Sachin_updated')
    expect(body.username).toBe('sachinupdated')
    expect(body.email).toBe('updated@example.com')
});

test("Update user using PATCH", async ({ request }) => {
    const employeeApi = new EmployeeApi(request);
    const result = await employeeApi.patchUser(11,
        {
            email: 'newemail@exmple.com'
        }
    );
    ApiAssertions.expectStatus(result.response, 200)

    const body = await result.body
    console.log(body)
    expect(body.email).toBe('newemail@exmple.com')
});

test("Delete user", async ({ request }) => {
    const employeeApi = new EmployeeApi(request);
    const respone = await employeeApi.deleteUser(11)
    ApiAssertions.expectStatus(respone, 200)
});