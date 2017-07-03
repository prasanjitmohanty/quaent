const searchHelper = require('./search-helper');
const shares = require('shares');

const searchText = 'What are the upcoming trends on chatbots?';
searchHelper.getArticleLinks(searchText).then(links => {
    console.log(links);
});





