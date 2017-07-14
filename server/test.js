// const qualityAlgorithm = require('./lib/content-quality-algorithm');
//  qualityAlgorithm.getQualityScorePoints('https://chatbotsmagazine.com/trends-driving-the-chatbot-growth-77b78145bac').then(totalScore => {
//       console.log('Total Score' + totalScore);
//     });

const searchHelper = require('./lib/search-helper');
searchHelper.search({
  q: 'chatbots',
  max: 10
});

