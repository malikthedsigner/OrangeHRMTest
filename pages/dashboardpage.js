class Dashboard {

    constructor(page) {

        this.page = page;
        this.timeAtWork = page.locator('div').filter({ hasText: /^Time at Work$/ }).first();
        this.myActions = page.locator('div').filter({ hasText: /^My Actions$/ }).first();
        this.quickLaunch = page.locator('div').filter({ hasText: /^Quick Launch$/ }).first();
        this.buzzLatestPost = page.locator('div').filter({ hasText: /^Buzz Latest Posts$/ }).first();
        this.adminButton = page.getByRole('link', { name: 'Admin' });
        this.leaveButton = page.getByRole('link', { name: 'Leave' });
        this.recruitmentButton = page.getByRole('link', { name: 'Recruitment' });

        this.tableContainer = page.locator("div[role='table']");
        this.tableRows = this.tableContainer.locator("div.oxd-table-row.oxd-table-row--with-border");
    }

    async settingViewPortSize(width, height) {

        await this.page.setViewportSize({
            width,
            height,
        })
    }

    checkTimeAtWork() {

        return this.timeAtWork
    }

    checkMyActions() {

        return this.myActions;
    }

    checkQuickLaunch() {

        return this.quickLaunch;
    }

    checkBuzzLatestPost() {

        return this.buzzLatestPost;
    }

    pressAdminButton() {

        return this.adminButton;
    }

    pressLeaveButton() {

        return this.leaveButton;
    }

    pressRecruitmentButton() {

        return this.recruitmentButton;
    }

    async adminSwitch() {

        await this.adminButton.click();
    }

    async userListReturner() {

        return await this.tableRows.count();
    }

    async getLastRow() {
        const rowCount = await this.tableRows.count();
        return await this.tableRows.nth(rowCount - 1); // Return the last row locator
    }

    async isUserInLastRow(username) {

        const lastRow = await this.getLastRow();
        return lastRow.locator(`text=${username}`);
    }



}

module.exports = Dashboard;