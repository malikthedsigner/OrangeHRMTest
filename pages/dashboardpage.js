class Dashboard {

    constructor(page) {

        this.page = page;
        this.timeAtWork = page.locator('div').filter({ hasText: /^Time at Work$/ }).first();
        this.myActions = page.locator('div').filter({ hasText: /^My Actions$/ }).first();
        this.quickLaunch = page.locator('div').filter({ hasText: /^Quick Launch$/ }).first();
        this.buzzLatestPost = page.locator('div').filter({ hasText: /^Buzz Latest Posts$/ }).first();
    }

    async setViewPortSize(width, height) {

        await this.page.setViewPortSize({ width, height });
    }


}

module.exports = Dashboard;