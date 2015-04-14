define(function(require, exports, module) {
  var SlideData = {
    userId: '109813050055185479846',
    albumId: '6013105701911614529',
    picasaUrl: 'https://picasaweb.google.com/data/feed/api/user/',
    queryParams: '?alt=json&hl=en_US&access=visible&fields=entry(id,media:group(media:content,media:description,media:keywords,media:title))',
    defaultImage: 'http://placeimg.com/364/364/any'
  };

  SlideData.getUrl = function() {
    return 'http://placeimg.com/364/364/any';
  };

  SlideData.parse = function() {
    var urls = [];
      for (var i = 0; i < 10; i++) {
        urls.push('http://placeimg.com/364/364/any');
      }
    return urls;
  };

  module.exports = SlideData;
});
