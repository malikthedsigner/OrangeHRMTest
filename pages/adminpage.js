class AdminPage {

    constructor(page) {

        this.page = page;
        this.adminButton = page.getByRole('link', { name: 'Admin' });
        this.usernameSearch = page.getByRole('textbox').nth(1);
        this.userRoleDropdown = page.locator('.oxd-select-text').first();
        this.employeeName = page.getByPlaceholder('Type for hints...')
        this.employeeStatus = page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text');
        this.resetButton = page.getByRole('button', { name: 'Reset' });
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.addUserButton = page.getByRole('button', { name: ' Add' });
        this.editUser = page.getByRole('row', { name: ' Admin Admin mandaDeepika' }).getByRole('button').nth(1);

        this.deleteUser = page.getByRole('row', { name: ' Admin Admin mandaDeepika' }).getByRole('button').first();
        this.deleteModal = page.locator('div').filter({ hasText: '×Are you Sure?The selected' }).nth(2);
        this.confirmDelete = page.getByRole('button', { name: ' Yes, Delete' });
        this.cancelDelete = page.getByRole('button', { name: 'No, Cancel' });

    }


}