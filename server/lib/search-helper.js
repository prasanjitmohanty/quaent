const request = require('request-promise-native');
const cheerio = require('cheerio');
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

    search(opts) {
        
        return new Promise(
            (resolve, reject) => {
                let max = opts.max || 0
                 delete opts.max
                let urls = [];
                request({
                    method: 'GET',
                    baseUrl: 'https://duckduckgo.com',
                    uri: '/html',
                    qs: opts
                }).then((response) => {
                    //console.log(response);
                    let $ = cheerio.load(response)
                    let links = $('#links .links_main a.result__a')
                    links.each((i, elem) => {
                        if ((max > 0 && urls.length < max) || max === 0) {
                            let url = $(elem).attr('href');
                            let title = $(elem).text();
                            .result__snippet
                            url = unescape(url.substring(url.indexOf('http')));
                            urls.push({link:url,linkText:title});
                        }
                    })
                    console.log(urls);
                    resolve(urls);
                }).catch((error) => {
                    reject(error);
                });
            });
    }
}
module.exports = new SearchHelper();