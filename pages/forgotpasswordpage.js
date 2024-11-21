class ForgotPasswordPage {

    constructor(page) {

        this.page = page;
        this.forgotPasswordButton = page.getByText('Forgot Your Password?')
        this.username = page.getByPlaceholder('username');
        this.resetButton = page.getByRole('button', { name: 'Reset Password' });
    }

    async fillUsernameAndClick() {

        await this.forgotPasswordButton.click();
        await this.username.fill("Admin");
        await this.resetButton.click();
    }


}

module.exports = ForgotPasswordPage;