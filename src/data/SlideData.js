define(function(require, exports, module) {
    var SlideData = {
        userId: '109813050055185479846',
        albumId: '6013105701911614529',
        picasaUrl: 'https://picasaweb.google.com/data/feed/api/user/',
        queryParams: '?alt=json&hl=en_US&access=visible&fields=entry(id,media:group(media:content,media:description,media:keywords,media:title))',
        defaultImage: 'https://placekitten.com/g/364/364'
    };

    SlideData.getUrl = function() {
        return SlideData.picasaUrl + SlideData.userId + '/albumid/' + SlideData.albumId + SlideData.queryParams;
    };

    SlideData.parse = function(data) {
        var urls = [];
        data = JSON.parse(data);
        var entries = data.feed.entry;
        for (var i = 0; i < entries.length; i++) {
            var media = entries[i].media$group;
            urls.push(media.media$content[0].url);
        }
        return urls;
    };

    module.exports = SlideData;
});
