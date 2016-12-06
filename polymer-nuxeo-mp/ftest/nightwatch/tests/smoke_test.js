module.exports = {
    'Polymer UI Smoke Test' : function (browser) {
        var polymerUi = browser.page.polymerui();
        polymerUi.navigate()
            .waitForElementVisible('body', 1000)
            .setValue('@username', 'Administrator')
            .setValue('@password', 'Administrator')
            .click('@submit')
            .waitForElementVisible('@rootfolder', 10000)
            .assert.containsText('@rootfolder', 'Root Folder');
        browser.end();
    }
}