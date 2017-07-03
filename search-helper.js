const phantomjs = require('phantomjs-prebuilt');
const webdriverio = require('webdriverio');
const wdOpts = { desiredCapabilities: { browserName: 'phantomjs' } };
const dummyData = [{
    link: 'https://venturebeat.com/2016/04/13/3-trends-driving-the-chatbot-revolution/',
    linkText: '3 trends driving the chatbot revolution | VentureBeat ...',
    snippet: ''
},
{
    link: 'https://www.forbes.com/sites/tomaslaurinavicius/2016/12/04/ux-trends-2017/',
    linkText: 'UX Trends 2017: Experts Bet On AI, Chatbots And VR - Forbes',
    snippet: ''
},
{
    link: 'https://chatbotsmagazine.com/trends-driving-the-chatbot-growth-77b78145bac',
    linkText: 'Trends Driving the Chatbot Growth - Chatbots Magazine',
    snippet: ''
},
{
    link: 'http://tomtunguz.com/bot-use-cases/',
    linkText: 'Five Questions About The Future of Chatbots',
    snippet: ''
},
{
    link: 'http://gadgets.ndtv.com/apps/news/reliance-jio-demos-chatbots-inside-jio4gvoice-app-at-mwc-2017-1667134',
    linkText: 'Reliance Jio Demos Chatbots Inside Jio4GVoice App at MWC 2017 ...',
    snippet: ''
},
{
    link: 'https://www.engadget.com/2017/01/29/upcoming-trends-in-artificial-intelligence-in-2017/',
    linkText: 'Public Access - Upcoming Trends in Artificial Intelligence in ...',
    snippet: ''
},
{
    link: 'https://aitrends.com/big-data/att-facebooks-upcoming-f8-expect-chatbots-ai-announcements/',
    linkText: 'At Facebooks Upcoming F8, Expect Chatbots & AI ... - AI Trends',
    snippet: ''
},
{
    link: 'https://www.re-work.co/blog/virtual-assistants-chatbots-experts-roundtable-advancements-future-predictions',
    linkText: 'REWORK | Blog - What Can We Expect For Chatbots in 2017 ...',
    snippet: 'What Can We Expect For Chatbots in 2017 & Beyond? ... I would see social trends ... Upcoming Events.'
},
{
    link: 'http://www.insider-trends.com/what-chatbots-mean-for-retail/',
    linkText: 'What Chatbots Mean for Retail | Insider Trends',
    snippet: ''
},
];

class SearchHelper {

    /**
     * @param  {} callback
     */
    getArticleLinks(searchText) {

        let searchQuery = searchText.split(' ').join('+');
        let base_url = `https://duckduckgo.com/q=${searchQuery}`;
        return new Promise(
            (resolve, reject) => {
                try {
                    // phantomjs.run('--webdriver=4444').then(program => {
                    //     let searchResults = [];
                    //     webdriverio.remote(wdOpts).init()
                    //         .url(base_url)
                    //         .elements('.result__a').getAttribute('href').then(links => {
                    //             links.forEach((lnk) => {
                    //                 searchResults.push({
                    //                     link: lnk,
                    //                     linkText: '',
                    //                     snippet: ''
                    //                 })
                    //             });
                    //         }).elements('.result__a').getText().then(linkTexts => {
                    //             for (let idx = 0; idx < searchResults.length; idx++) {
                    //                 searchResults[idx].linkText = linkTexts[idx];
                    //             }
                    //         }).elements('.result__snippet').getHTML().then(linkSnippets => {
                    //             for (let idx = 0; idx < searchResults.length; idx++) {
                    //                 searchResults[idx].snippet = linkSnippets[idx];
                    //             }
                    //             program.kill();
                    //             resolve(searchResults);// quits PhantomJS 
                    //         })
                    // });

                    resolve(dummyData);

                } catch (error) {
                    reject('Not able to get article Links: ' + error);
                }
            });
    }
}
module.exports = new SearchHelper();