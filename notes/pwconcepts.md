Lazy Evaluation.

The Locator searches again when needed. No stale element.

We'll discuss why, but I recommend initializing locators in the constructor because:

It makes object initialization explicit.
It's easier for Java developers to understand.
It keeps all setup in one place.
It becomes very useful when page objects receive additional dependencies later (API clients, helper classes, config, etc.).

Should Page Objects Contain Assertions?

Priority	Locator	Example
1	getByRole()	Buttons, links, checkboxes, menus
2	getByLabel()	Input fields
3	getByPlaceholder()	Search boxes
4	getByText()	Labels, messages
5	getByTestId()	If the app provides test IDs
6	locator() with CSS	Complex or non-semantic elements
7	XPath	Only when the above options aren't practical
XPath can be use when we have
1.Complex tables
2.SVG elements
3.Legacy applications with poor HTML
4.Relationships like "following sibling"

What is a Fixture?
A fixture is simply:
An object created before the test starts and automatically provided to the test.

Playwright builds the fixture dependency tree based on what the test requests.
Fixtures are a convenient place to construct objects and inject their dependencies.

Aserttions 
Page specific assertions can be kept in pages and business level assertions can be kept in tests.
Keeping assertions in page - Page Object can encapsulate page-specific knowledge.
Assertions in test - That means the test knows something about the page's implementation.

Playwright builds the fixture dependency tree based on what the test requests.

test scope vs worker scope fixture
Test Scope Test-scoped = one instance per test.
Create
  ↓
Test starts
  ↓
Test executes
  ↓
Test finishes
  ↓
Destroy

Worker Scope Worker-scoped = one instance per worker, shared by the tests running on that worker.
Create
  ↓
Worker starts
  ↓
Test 1
  ↓
Test 2
  ↓
Test 3
  ↓
...
  ↓
Worker finishes
  ↓
Destroy

Authentication Fixture & storageState
One-time authentication
        ↓
Save authenticated browser state
        ↓
Tests reuse that state
        ↓
Start directly on authenticated application

playwright.config.ts

        Projects
           │
     ┌─────┴─────┐
     ▼           ▼
  setup       authenticated
     │           │
  login      dashboard
             admin
             PIM

A Playwright Project is a logical group of tests with its own configuration.
Project: setup
    → creates authentication state

Project: chromium
    → runs authenticated application tests