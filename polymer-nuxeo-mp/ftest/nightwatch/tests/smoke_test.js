module.exports = {
    'Polymer UI Smoke Test - Login Test ' : function (browser) {
        var polymerUi = browser.page.polymerui();
        polymerUi.navigate()
            .waitForElementVisible('body', 1000)
            .setValue('@username', 'Administrator')
            .setValue('@password', 'Administrator')
            .click('@submit')
            .waitForElementVisible('@myApp', 5000)
            .waitForElementVisible('@appLocation', 1000)
            .waitForElementVisible('@appHeader', 1000)
            .waitForElementVisible('@rootFolder', 1000)
            .assert.containsText('@rootFolder', 'Root Folder');
    },
    'Polymer UI Smoke Test - Add Folder Test' : function (browser) {
        var polymerUi = browser.page.polymerui();
        polymerUi.navigate()
            .waitForElementVisible('@addFolder', 1000)
            .click('@addFolder')
            .waitForElementVisible('@folderAddModal', 2000)
            .assert.containsText('@folderAddModal', 'New Folder')
            .click('@closeFolderAddModal')
    },
    'Polymer UI Smoke Test - Add Document Test' : function (browser) {
        var polymerUi = browser.page.polymerui();
        polymerUi.navigate()
            .waitForElementVisible('@addDocument', 1000)
            .click('@addDocument')
            .waitForElementVisible('@documentAddModal', 2000)
            .assert.containsText('@documentAddModal', 'New Document')
            .click('@closeDocumentAddModal');
        browser.end();
    }
};

