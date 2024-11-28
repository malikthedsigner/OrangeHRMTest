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
        this.employeeNameOption = page.getByRole('option', { name: 'Rebecca  Harmony' }).first()
        this.showOptions = page.getByText('Rebecca  Harmony');
        this.password = page.getByRole('textbox').nth(3);
        this.confirmPassword = page.getByRole('textbox').nth(4);

        this.addButton = page.getByRole('button', { name: ' Add' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.saveButton = page.getByRole('button', { name: 'Save' });

        this.invalidEmployeeName = page.getByText('Invalid');
        this.invalidUsername = page.getByText('Should be at least 5');
        this.invalidPassword = page.getByText('Should have at least 7');
        this.unmatchingPassword = page.getByText('Passwords do not match');

        this.editButton = page.getByRole('row', { name: ' loveOfMyLife Admin Rebecca' }).getByRole('button').nth(1)


    }


    async addNewUserValid(nameOfEmployee, username, password){

        await this.userRoleDropdown.click();
        await this.userRoleAdmin.click();
        await this.employeeName.fill(nameOfEmployee)
        await this.showOptions.click()
        //await this.usernameOption.click();
        await this.statusDropdown.click();
        await this.statusDropdownEnabled.click()
        await this.username.fill(username);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
        await this.saveButton.click();
    }

    async addNewUserInvalid(nameOfEmployee, username, password, confirmPass){

        await this.userRoleDropdown.click();
        await this.userRoleAdmin.click();
        await this.employeeName.fill(nameOfEmployee)
        await this.statusDropdown.click();
        await this.statusDropdownEnabled.click()
        await this.username.fill(username);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPass);

    }

    errorReturner(){

        return [this.invalidEmployeeName, this.invalidUsername, this.invalidPassword, this.unmatchingPassword]
    }

    async editUser(){

        await this.editButton.click();
    }

    

}

module.exports = AddUserAdminPage;

