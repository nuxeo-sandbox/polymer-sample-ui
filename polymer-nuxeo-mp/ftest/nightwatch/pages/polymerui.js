module.exports = {
    url: 'http://127.0.0.1:8080/nuxeo/polymerui',
    elements: {
        myApp: {
            selector: 'my-app'
        },
        appLocation: {
            selector: 'my-app::shadow app-drawer-layout'
        },
        appHeader: {
            selector: 'my-app::shadow app-drawer-layout app-header-layout'
        },
        rootFolder: {
            selector: 'my-app::shadow app-drawer-layout app-header-layout my-root::shadow h1.folder-title'
        },
        addFolder: {
            selector: 'my-app::shadow app-drawer-layout app-header-layout my-root::shadow div.folder-list paper-button'
        },
        folderAddModal: {
            selector: 'my-app::shadow app-drawer-layout app-header-layout my-root::shadow paper-dialog#folderAdder add-folder::shadow div.title'
        },
        closeFolderAddModal: {
            selector: 'my-app::shadow app-drawer-layout app-header-layout my-root::shadow paper-dialog#folderAdder div.buttons paper-button'
        },
        addDocument: {
            selector: 'my-app::shadow app-drawer-layout app-header-layout my-root::shadow div.file-list paper-button'
        },
        documentAddModal: {
            selector: 'my-app::shadow app-drawer-layout app-header-layout my-root::shadow paper-dialog#documentAdder add-file::shadow div#fileUpload'
        },
        documentCreateForm: {
            selector: 'my-app::shadow app-drawer-layout app-header-layout my-root::shadow paper-dialog#documentAdder add-file::shadow form#form'
        },
        createFormInput: {
            selector: 'my-app::shadow app-drawer-layout app-header-layout my-root::shadow paper-dialog#documentAdder add-file::shadow form#form input'
        },
        createButton: {
            selector: 'my-app::shadow app-drawer-layout app-header-layout my-root::shadow paper-dialog#documentAdder add-file::shadow form#form paper-button#fileCreate'
        },
        documentContainer: {
            selector: 'my-app::shadow app-drawer-layout app-header-layout my-root::shadow div.file-list'
        },
        closeDocumentAddModal: {
            selector: 'my-app::shadow app-drawer-layout app-header-layout my-root::shadow paper-dialog#documentAdder div.buttons paper-button'
        },
        username: {
            selector: '//input[@id="username"]',
            locateStrategy: 'xpath'
        },
        password: {
            selector: '//input[@id="password"]',
            locateStrategy: 'xpath'
        },
        submit: {
            selector: '//input[@class="login_button"]',
            locateStrategy: 'xpath'
        }
    }
};