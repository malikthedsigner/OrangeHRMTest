class LoginPage {

    constructor(page) {

        this.page = page;
        this.usernameField = page.getByPlaceholder('Username');
        this.passwordField = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator("div[role='alert']");
        this.forgetPasswordButton = page.getByText('Forgot Your Password?');
    }


    async goto() {

        await this.page.goto('/');
    }


    async login(username, password) {

        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();

    }

}


module.exports = LoginPage;