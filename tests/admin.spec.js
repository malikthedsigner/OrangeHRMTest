const AdminPage = require('../pages/adminpage');
const { test, expect } = require('@playwright/test')
const LoginPage = require('../pages/loginpage');
const DashboardPage = require('../pages/dashboardpage');
const AddUserAdminPage = require ('../pages/adduseradminpage');

test.describe("Admin Test Suite", () => {


    let loginPage;
    let adminPage;
    let dashboardPage;
    let addUserAdminPage;


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

    test ("Add User with Valid Details", async ({page}) => {

        adminPage = new AdminPage(page);
        await adminPage.addNewUser().click();
        addUserAdminPage = new AddUserAdminPage(page);
        await addUserAdminPage.addNewUserValid("Rebecca  Harmony","Testrrrrr","Tester001");
        adminPage = new AdminPage(page);
        await expect(addUserAdminPage.userListReturner()).toHaveText("Testrrrrr", { timeout: 60000 });
        

    })






})