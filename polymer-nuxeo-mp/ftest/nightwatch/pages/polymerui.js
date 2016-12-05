module.exports = {
    url: 'http://127.0.0.1:8080/nuxeo/polymerui',
    elements: {
        rootfolder: {
            selector: '//*[@id="container"]/h1',
            locateStrategy: 'xpath'
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