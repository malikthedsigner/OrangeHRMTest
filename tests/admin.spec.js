const AdminPage = require('../pages/adminpage');
const { test, expect } = require('@playwright/test')
const LoginPage = require('../pages/loginpage');
const DashboardPage = require('../pages/dashboardpage');
const AddUserAdminPage = require('../pages/adduseradminpage');

test.describe("Admin Test Suite", () => {


    let loginPage;
    let adminPage;
    let dashboardPage;
    let addUserAdminPage;
    let rowCount
    let lastRow



    test.beforeEach("Login to App", async ({ page }) => {

        loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("Admin", "admin123");
        dashboardPage = new DashboardPage(page);
        await dashboardPage.adminSwitch();

    })


    test("Admin Verification", async ({ page }) => {

        adminPage = new AdminPage(page)
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");
    })

    test.only("Add User with Valid Details", async ({ page }) => {

        adminPage = new AdminPage(page);
        await adminPage.addNewUser().click();
        addUserAdminPage = new AddUserAdminPage(page);
        await addUserAdminPage.addNewUserValid("Rebecca  Harmony", "Testrrrrrr", "Tester001");
        dashboardPage = new DashboardPage(page);
        await dashboardPage.getLastRow();
        const initialRowCount = await dashboardPage.userListReturner();
        await expect(dashboardPage.userListReturner()).toEqual(initialRowCount + 1);
        await expect(await dashboardPage.isUserInLastRow("Testrrrrrr")).toBeVisible();
        //await console.log(dashboardPage.isUserInLastRow("Testerrrrrr"));
        await page.pause();


})






})