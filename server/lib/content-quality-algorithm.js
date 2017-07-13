const phantomjs = require('phantomjs-prebuilt');
const webdriverio = require('webdriverio');
const wdOpts = { desiredCapabilities: { browserName: 'phantomjs' } };

class ContentQualityAlgorithm {
     getQualityScorePoints(url) {

        return new Promise(
            (resolve, reject) => {
                try {
                    phantomjs.run('--webdriver=4444').then(program => {
                        let totalPoints = 0;
                        webdriverio.remote(wdOpts).init()
                        //Get Social share count
                            .url('https://sharescount.com/')
                            .waitForExist('#url-input')
                            .element('#url-input')
                            .setValue(url)
                            .click('input[value="Count Shares"]')
                            .waitForText('.url-card-total span:nth-child(2)',15000)
                            .element('.url-card-total span:nth-child(2)')
                            .getText().then((totalCount) => {
                                console.log('totalCount :' + totalCount)
                                resolve(totalPoints);
                                program.kill();
                            })
                    });

                } catch (error) {
                    reject('Not able to get article Links: ' + error);
                }
            });
    }

}

module.exports = new ContentQualityAlgorithm();