const { test, expect } = require('@playwright/test');
const DashboardPage = require('../pages/dashboardpage');
const LoginPage = require('../pages/loginpage');
const fs = require('fs');
const testData = JSON.parse(fs.readFileSync('./testdata.json', 'utf-8'));


test.describe("Dasboard Test Suite", () => {

    let loginPage;
    let dashboardPage;

    test.beforeEach("Login before tests", async ({ page }) => {

        loginPage = new LoginPage(page);
        await loginPage.goto()
        const correctCredentials = testData[0];
        await loginPage.login(correctCredentials.username, correctCredentials.password);
    })


    test("Verifying Dashboard", async ({ page }) => {

        dashboardPage = new DashboardPage(page);
        const correctUrlData = testData[2];
        await expect(page).toHaveURL(correctUrlData.correctUrl);

    })
})