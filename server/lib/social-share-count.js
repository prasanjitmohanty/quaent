const request = require('request-promise-native');
const async = require('async');
const sociare = require('sociare-counter');

class SocialShareCount {

    getShareCount(url, callback) {
        async.parallel([
            (callback) => {
                this.getFBShareCount(url, callback);
            },
            (callback) => {
                this.getOtherPlatformShareCount(url, callback);
            },

        ], (err, results) => {
            console.log(results);
            var totalCount = results.reduce((sum, value)=> {
                return sum + value;
            }, 0);

            callback(null, totalCount);
        });
    }

    getFBShareCount(url, callback) {
        let baseUrl = `http://graph.facebook.com/?id=${url}`;
        request({
            method: 'GET',
            uri: baseUrl,
            json: true,
        }).then((response) => {
            callback(null, response.share.share_count);
        }).catch((error) => {
            callback(null, 0);
        });
    }

    getOtherPlatformShareCount(url, callback) {
        sociare.getCounts(url, {
            networks: ['linkedin', 'pinterest']
        }).then((counts) => {
            callback(null, counts['linkedin'] + counts['pinterest']);
        });

    }
}
module.exports = new SocialShareCount();