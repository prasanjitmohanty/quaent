  const express = require('express');
  const cors = require('cors');
  const searchHelper = require('./lib/search-helper');



  const app = express();
  app.use(cors());

  app.set('port', (process.env.PORT || 5000));

  app.get('/', function (request, response) {
    response.send('Hello QUAENT!')
  });

  app.get('/search/:searchText', function (req, res) {
    //const searchText = 'What are the upcoming trends on chatbots?';
    const searchText = req.params['searchText'];
    console.log(searchText);
    searchHelper.search({
      q: searchText,
      max: 10
    }).then(links => {
      res.json(links);
    });
    // Hard coding for simplicity. Pretend this hits a real database

  });

  app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
  });








