const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginpage');
const ForgotPasswordPage = require('../pages/forgotpasswordpage');
const fs = require('fs');

const testData = JSON.parse(fs.readFileSync('./testdata.json', 'utf-8'));


test.describe("Login Test Suite", () => {

    let loginPage;
    let forgotPasswordPage;

    test.beforeEach("Load login page", async ({ page }) => {

        loginPage = new LoginPage(page);
        await loginPage.goto();

    })


    test("Login with correct credentials", async ({ page }) => {

        const correctCredentials = testData[0];
        const correctUrlData = testData[2];
        await loginPage.login(correctCredentials.username, correctCredentials.password);
        await expect(page).toHaveURL(correctUrlData.correctUrl);

    })

    test("Login with Incorrect credentials", async ({ page }) => {

        const incorrectCredentials = testData[1];
        await loginPage.login(incorrectCredentials.username, incorrectCredentials.password);
        await expect(page.locator("div[role='alert']")).toBeVisible();


    })

    test("login with empty credentials", async ({ page }) => {

        await loginPage.login('', '');
        await expect(page.getByText('Required').first()).toBeVisible();
        await expect(page.getByText('Required').nth(1)).toBeVisible();


    })


    test("Forgot password & reset", async ({ page }) => {


        forgotPasswordPage = new ForgotPasswordPage(page)
        await forgotPasswordPage.fillUsernameAndClick();
        await expect(page.getByRole('heading', { name: 'Reset Password link sent' })).toBeVisible();

    })


})