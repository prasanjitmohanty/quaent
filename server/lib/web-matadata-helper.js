const metaScraper = require("metascraper");


class WebMetadataHelper {
    getMetaData(url) {
        return new Promise((resolve, reject) => {
            const MY_RULES = Object.assign(metaScraper.RULES, {
                meta: this.getMeta
            });
            metaScraper.scrapeUrl(url, MY_RULES).then((metadata) => {
                resolve(metadata);
            });
        });
    }

    getMeta($) {
        let meta = {}
        // parse all <meta> tags and attach to metdata.meta object:
        $('head meta').each(function (index, elem) {
            var $this = $(this)
                , m = {};

            // prioritize key tag by: name, http-equiv, property:
            m.name = $this.attr('name') || $this.attr('http-equiv') || $this.attr('property');
            m.content = $this.attr('content');

            // if there is a name key, add it to the meta object, otherwise discard:
            if (m.name && m.content) {
                if (meta[m.name]) {
                    meta[m.name + 's'] = meta[m.name + 's'] || [meta[m.name]]
                    meta[m.name + 's'].push(m.content)
                } else {
                    meta[m.name] = m.content;
                }
            }
        });
        return meta;
    }
}

module.exports = new WebMetadataHelper();