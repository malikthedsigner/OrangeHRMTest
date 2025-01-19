class EditUserAdminPage {

    constructor(page) {

        this.page = page;
        this.userRole = page.locator('form i').first();
        this.employeeName = page.getByPlaceholder('Type for hints...')

        this.statusDropdown = page.locator('form i').nth(1);
        this.statusDropdownEnabled = page.getByRole('option', { name: 'Enabled' })
        this.statusDropdownDisabled = page.getByRole('option', { name: 'Disabled' })

        this.userRoleAdmin = page.getByRole('option', { name: 'Admin' })
        this.userRoleEss = page.getByRole('option', { name: 'ESS' });
        this.username = page.getByRole('textbox').nth(2);

        this.passwordCheck = page.locator('label').filter({ hasText: 'Yes' }).locator('i');
        this.password = page.getByRole('textbox').nth(3);
        this.confirmPassword = page.getByRole('textbox').nth(4);

        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.saveButton = page.getByRole('button', { name: 'Save' });

        this.editedUser = page.getByRole('row', { name: ' loveOfMyLife4 Admin Rebecca' })
    }

    async changeUsername(newName){

        await this.username.fill(newName);
        await this.saveButton.click();
    }

    editedUserReturner(){

        return this.editedUser
    }
}

module.exports = EditUserAdminPage;