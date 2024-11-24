class AddUserAdminPage {

    constructor(page) {

        this.page = page;
        this.employeeName = page.getByPlaceholder('Type for hints...')
        this.statusDropdown = page.locator('form i').nth(1);

        this.statusDropdownEnabled = page.getByRole('option', { name: 'Enabled' })
        this.statusDropdownDisabled = page.getByRole('option', { name: 'Disabled' })

        this.userRoleDropdown = page.locator('form i').first();
        this.userRoleAdmin = page.getByRole('option', { name: 'Admin' })
        this.userRoleEss = page.getByRole('option', { name: 'ESS' });

        this.username = page.getByRole('textbox').nth(2);
        this.password = page.getByRole('textbox').nth(3);
        this.confirmPassword = page.getByRole('textbox').nth(4);

        this.addButton = page.getByRole('button', { name: ' Add' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.saveButton = page.getByRole('button', { name: 'Save' });
    }


    async addNewUser(nameOfEmployee, username, password){

        await this.userRoleDropdown.click();
        await this.userRoleAdmin.click();
        await this.employeeName.fill(nameOfEmployee)
        await this.statusDropdown.click();
        await this.statusDropdownEnabled.click()
        await this.username.fill(username);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
        await this.saveButton.click();
    }


}

module.exports = AddUserAdminPage;

