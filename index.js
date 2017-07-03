const searchHelper = require('./search-helper');

const searchText = 'What are the upcoming trends on chatbots?';
searchHelper.getArticleLinks(searchText).then(links => {
    console.log(links);
});





