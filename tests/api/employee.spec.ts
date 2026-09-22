import { test, expect} from "@playwright/test";
import { EmployeeApi } from "../../api/EmployeeApi";

test("Get user", async ({ request }) => {
    const employeeApi = new EmployeeApi(request);

    const response = await employeeApi.getUser(1);

    expect(response.status()).toBe(200);

    const body = await response.json();
    
    console.log(body);

    expect(body.id).toBe(1);
    expect(body.name).toBe('Leanne Graham');
    expect(body.username).toBe('Bret');
    expect(body.email).toBe('Sincere@april.biz');
});

test("Create user", async ({ request }) => {
    const employeeApi = new EmployeeApi(request);
    const response = await employeeApi.createUser(
        {
            name: 'Sachin',
            username: 'sachin123',
            email: 'sachin@example.com'
        }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    console.log(body);

    expect(body.name).toBe('Sachin')
    expect(body.username).toBe('sachin123')
    expect(body.email).toBe('sachin@example.com')

});

test("Update user using PUT", async ({ request }) => {
    const employeeApi = new EmployeeApi(request);
    const response = await employeeApi.updateUser(1,
        {
            name: 'Sachin_updated',
            username: 'sachinupdated',
            email: 'updated@example.com'
        }
    );
    expect(response.status()).toBe(200)
    const body = await response.json()
    console.log(body)
    expect(body.name).toBe('Sachin_updated')
    expect(body.username).toBe('sachinupdated')
    expect(body.email).toBe('updated@example.com')
});

test("Update user using PATCH", async ({ request }) => {
    const employeeApi = new EmployeeApi(request);
    const response = await employeeApi.patchUser(11,
        {
            email: 'newemail@exmple.com'
        }
    );
    expect(response.status()).toBe(200)

    const body = await response.json()
    console.log(body)
    expect(body.email).toBe('newemail@exmple.com')
});

test("Delete user", async ({ request }) => {
    const employeeApi = new EmployeeApi(request);
    const respone = await employeeApi.deleteUser(11)
    expect(respone.status()).toBe(200)
});