# Playwright AT Project 🎭

Automated end-to-end testing project built with [Playwright](https://playwright.dev/) and TypeScript. This project contains automated test suites designed to validate key user flows and navigation on the ArcTouch website.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine (v18 or higher is recommended).

### 1. Clone the Repository
bash git clone https://github.com/arctouch-brunalavelli/playwright-AT-project.git cd playwright-AT-project


### 2. Install Dependencies
Install the required npm packages:
bash npm install


### 3. Install Playwright Browsers
Playwright requires its own browser binaries to run tests. Install them by running:
bash npx playwright install


---

## 🧪 Running Tests

You can run the tests using the command line or using VS Code's testing interface.

### Running via Command Line

* **Run all tests (across Chromium, Firefox, and WebKit):**
bash npx playwright test


* **Run a specific test file:**
bash npx playwright test tests/services-page.test.ts


* **Run in Headed mode (see the browser open and perform actions):**
bash npx playwright test tests/services-page.test.ts --headed


* **Run on a specific browser (e.g., Chromium only):**
bash npx playwright test tests/services-page.test.ts --project=chromium


### 📊 Interactive UI Mode
To open the interactive Playwright UI where you can step through tests, inspect locators, and view network requests:
bash npx playwright test --ui


### 📋 View Last Test Report
If your tests run and you want to inspect the generated HTML report:
bash npx playwright show-report


---

## 🛠 Project Structure

text ├── .github/ # CI/CD Workflows (configured for GitHub Actions) ├── tests/ # Folder containing all test suites │ ├── example.spec.ts # Default template tests │ └── services-page.test.ts # Web app navigation & interaction tests ├── playwright.config.ts # Playwright global configuration settings ├── package.json # Project dependencies and script shortcuts └── README.md # Project documentation


---

## 💡 Tech Stack
* **Language:** TypeScript
* **Test Runner:** Playwright Test
* **Framework:** Node.js



---

## ➕ How to Add New Tests

Follow these steps to expand the test suite with new automation flows:

### 1. Create a New Test File
Navigate to the `tests/` directory and create a new file. Ensure it ends with `.test.ts` (or `.spec.ts`) so Playwright's test runner can automatically detect it.
* Example: `tests/login-flow.test.ts`

### 2. Write the Test Structure
Open your new file and paste the basic Playwright template structure:

typescript import { test, expect } from '@playwright/test';

test('Verify successful user login', async ({ page }) => { // 1. Navigate to the website await page.goto('https://arctouch.com/');

// 2. Perform actions (e.g. click buttons, fill forms) // await page.getByRole('button', { name: 'Login' }).click();

// 3. Make assertions (verify the outcome) // await expect(page).toHaveURL(/.*dashboard/); });


### 3. (Optional) Use CodeGen to Record Your Actions
If you want Playwright to write the selectors for you dynamically while you click through the website:
npx playwright codegen https://arctouch.com/

*This opens a browser and a code recorder. Once you finish recording, copy the generated code and paste it into your test file.*

### 4. Run and Validate Your New Test
Run your specific new test locally to make sure it passes before pushing:
npx playwright test tests/login-flow.test.ts --project=chromium --headed

Step 3: Push the changes to GitHub
To update your repository homepage, save the file and run:

bash
git add README.md
git commit -m "docs: add instructions on how to create new tests"
git push