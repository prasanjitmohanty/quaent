const searchHelper = require('./search-helper');
const metadataHelper = require('./web-matadata-helper');
const async = require('async');


class SearchFacade {
    search(searchText) {
        return new Promise((resolve, reject) => {
            searchHelper.search({
                q: searchText,
                max: 10
            }).then(links => {
                async.map(links, metadataHelper.getMetaData,  function (err, results){
                   let filteredData = results.filter((result)=>{
                        return result.url;
                    })
                    resolve(filteredData);
                });
            });
        });
    }
}

module.exports = new SearchFacade();