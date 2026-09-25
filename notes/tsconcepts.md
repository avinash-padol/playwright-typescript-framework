./ -> Look in the current folder.

Why don't we create a Page object inside every Page Object class?
"The Page object is created and managed by the Playwright Test Runner as part of the browser lifecycle. Each test receives a page fixture, and all page objects in that test should share the same page instance. Creating a new page inside each page object would break the shared browser session, leading to inconsistent behavior and making the framework harder to maintain."

Parameter Property Syntax - constructor(protected page: Page) {}
protected = accessible only inside the class and child classes
private = only inside a class and child class can not access it
normal function -> returns value, async function -> returns Promise

Why does an async function return Promise?
"Because asynchronous operations don't complete immediately. Instead of returning the final value directly, the function returns a Promise representing the future completion of that operation. The await keyword waits for that Promise to resolve before continuing execution."

async function getUser(): Promise<string> {
    return "Avinash";
}
async automatically wraps the returned value in a Promise. like -> return Promise.resolve("Avinash");

Actions like clicks etc. will be done in pages because even if some new change is done from ui we have to change only one function and not all the tests where we are doing actions like click

Test deside WHAT (login()) and Pages deside HOW (enter credentials and click login button)

Tests never directly know about locators.
Never expose locators publicly.
Expose business actions.
Tests should read like manual test cases.

type → can define unions, aliases, and object shapes
interface → mainly defines object/class contracts and can be extended

type narrowing
typeof       → primitive values
=== null     → null/undefined checks
in           → object properties

Generics
function printLength<T extends { length: number }>(value: T) {
    console.log(value.length);
}
T can be any type, but it must have a length property that is a number.

type / interface
Union types
Optional properties
null / undefined
Type narrowing
Generics
Generic constraints
any / unknown
void / never

await use(apiContext); => “provide this value to whoever depends on this fixture.”