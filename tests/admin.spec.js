const AdminPage = require('../pages/adminpage');
const { test, expect } = require('@playwright/test')
const LoginPage = require('../pages/loginpage');
const DashboardPage = require('../pages/dashboardpage');
const AddUserAdminPage = require('../pages/adduseradminpage');
const exp = require('constants');
const EditUserAdminPage = require('../pages/edituseradminpage');

test.describe("Admin Test Suite", () => {


    let loginPage;
    let adminPage;
    let dashboardPage;
    let addUserAdminPage;
    let editUserAdminPage;
    // let rowCount
    // let lastRow



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

    test ("Add User with Valid Details", async ({ page }) => {

        adminPage = new AdminPage(page);
        await adminPage.addNewUser().click();
        addUserAdminPage = new AddUserAdminPage(page);
        await addUserAdminPage.addNewUserValid("Rebecca  Harmony", "loveOfMyLife", "Tester001");
        dashboardPage = new DashboardPage(page);
        await expect(await dashboardPage.assertLocator).toBeVisible;


    })

    test ("Add user with Invalid details", async({page}) => {

        adminPage = new AdminPage(page);
        await adminPage.addNewUser().click();
        addUserAdminPage = new AddUserAdminPage(page);
        await addUserAdminPage.addNewUserInvalid("QWEW ", "Qas", "popfi", "ERQa");
        const [invalidEmployeeNameError, invalidUsernameError, invalidPasswordError, unmatchingPasswordError] = addUserAdminPage.errorReturner();

        await expect(invalidEmployeeNameError).toBeVisible();
        await expect(invalidUsernameError).toBeVisible();
        await expect(invalidPasswordError).toBeVisible();
        await expect(unmatchingPasswordError).toBeVisible();

    })


     test ("Edit and Update User role", async({page}) => {

        adminPage = new AdminPage(page);
        await adminPage.addNewUser().click();
        addUserAdminPage = new AddUserAdminPage(page);
        await addUserAdminPage.addNewUserValid("Rebecca  Harmony", "loveOfMyLife4", "Tester001");
        addUserAdminPage = new AddUserAdminPage(page);
        await addUserAdminPage.editUser();
        editUserAdminPage = new EditUserAdminPage(page);
        await editUserAdminPage.changeUsername("lomlifee");
        await expect(editUserAdminPage.editedUserReturner()).toBeVisible ; 
        page.pause();

     })


     test ("Search for existing user by username", async({page}) => {

        adminPage = new AdminPage(page);
        await adminPage.searchUserByUsername("Admin")
        await expect(page.getByRole('row', { name: ' Admin Admin Pedrito' })).toBeVisible();


    })






})