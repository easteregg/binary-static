﻿var URL = require('../../url');

module.exports = {

    "assetIndex": function (browser) {
        browser
            .url(browser.launch_url + URL.CHARTS.LIGHT_CHARTS)
            .waitForElementVisible('body', 5000)
        .end();
    },
};