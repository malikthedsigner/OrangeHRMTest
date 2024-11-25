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
    }

    async settingViewPortSize(width, height) {

        await this.page.setViewportSize({
            width,
            height,
          })
    }

    checkTimeAtWork(){

        return this.timeAtWork
    }

    checkMyActions(){

        return this.myActions ;
    }

    checkQuickLaunch(){

        return this.quickLaunch ;
    }

    checkBuzzLatestPost(){

        return this.buzzLatestPost ;
    }

    pressAdminButton(){

        return this.adminButton;
    }

    pressLeaveButton(){

        return this.leaveButton;
    }

    pressRecruitmentButton(){

        return this.recruitmentButton;
    }

    async adminSwitch(){

       await this.adminButton.click();
    }


}

module.exports = Dashboard;