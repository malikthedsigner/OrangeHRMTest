const { test, expect } = require('@playwright/test');
const DashboardPage = require('../pages/dashboardpage');
const LoginPage = require('../pages/loginpage');
const fs = require('fs');
const exp = require('constants');
const testData = JSON.parse(fs.readFileSync('./testdata.json', 'utf-8'));


test.describe("Dasboard Test Suite", () => {

    let loginPage;
    let dashboardPage;

    test.beforeEach("Login before tests", async ({ page }) => {

        loginPage = new LoginPage(page);
        await loginPage.goto()
        const correctCredentials = testData[0];
        await loginPage.login(correctCredentials.username, correctCredentials.password);
        dashboardPage = new DashboardPage(page);
    })


    test("Verifying Dashboard", async ({ page }) => {

        const dashboardUrl = testData[5];
        await expect(page).toHaveURL(dashboardUrl.correctUrl);
    })


    test("Verifying dashboard featured", async ({ page }) => {

        await expect(dashboardPage.checkMyActions()).toBeVisible();
        await expect(dashboardPage.checkTimeAtWork()).toBeVisible();
        await expect(dashboardPage.checkQuickLaunch()).toBeVisible();
        await expect(dashboardPage.checkBuzzLatestPost()).toBeVisible();

    })

    test("Validating dashboard buttons", async ({ page }) => {

        await dashboardPage.pressAdminButton().click();
        const adminUrl = testData[6];
        await expect(page).toHaveURL(adminUrl.adminUrl);
        await page.goBack()
        await dashboardPage.pressLeaveButton().click();
        const leaveUrl = testData[7];
        await expect(page).toHaveURL(leaveUrl.leaveUrl);
        await page.goBack();
        await dashboardPage.pressRecruitmentButton().click();
        const recruitmentUrl = testData[8];
        await expect(page).toHaveURL(recruitmentUrl.recruitmentUrl);


    })



    test.only("Responsiveness Test", async ({ page }) => {

        const desktopSize = testData[2];
        await dashboardPage.settingViewPortSize(desktopSize.desktopWidth, desktopSize.desktopHeight);
        await expect(page).toBeTruthy();
        const tabletSize = testData[3];
        await dashboardPage.settingViewPortSize(tabletSize.tabletWidth, tabletSize.tabletHeight);
        await expect(page).toBeTruthy();
        const mobileSize = testData[4];
        await dashboardPage.settingViewPortSize(mobileSize.mobileWidth, mobileSize.mobileHeight);
        await expect(page).toBeTruthy();
        await page.pause()

    })





})