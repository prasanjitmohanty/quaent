const request = require('request-promise-native');
const cheerio = require('cheerio');

class ReadabilityScore {

    getScore(url,callback) {
        console.log(`https://www.webpagefx.com/tools/read-able/check.php?tab=Test+By+Url&uri=${url}`);
            request({
                    method: 'GET',
                    baseUrl: `https://www.webpagefx.com/tools/read-able/check.php?tab=Test+By+Url&uri=${url}`,
                    uri: '/html'
                }).then((response) => {
                    console.log(response);
                    let $ = cheerio.load(response)
                     //Flesch Kincaid Reading Ease
                    let fleschScore = $('th:contains("Flesch Kincaid Reading Ease")').text();
                    console.log(fleschScore);
                    callback(null,parseInt(fleschScore));
                }).catch((error) => {
                    console.log(error);
                    callback(error,0);
                });
    }
}
module.exports = new ReadabilityScore();