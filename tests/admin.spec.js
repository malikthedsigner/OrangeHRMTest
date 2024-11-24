const AdminPage = require('../pages/adminpage');
const { test, expect } = require('@playwright/test')
const LoginPage = require('../pages/loginpage');

test.describe("Admin Test Suite", () => {


    let loginpage;
    let adminpage;


    test.beforeEach("Login to App", async ({ page }) => {

        loginpage = new LoginPage(page);

    })

        




})