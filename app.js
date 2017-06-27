var TwitterPackage = require('twitter');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/twitterDBS');
var a = 1;
var secret = {
  consumer_key: 'qKjOCsSCHNIKgwpIq8QORrlh9',
  consumer_secret: 'B5hDFU65gxUVCwxRLuazbYkZbN2ASlKmAgZJ5i7RFwmN5ZWszV',
  access_token_key: '290752188-EmQCY3cgrILIbALQBsJ0bDClWUXWQuAVmskfKukN',
  access_token_secret: 'AJ90q7To2OrfAw20R7U5ynvZ8seJCaSFbBZ9ywwkLjzPk'
}
var Post = mongoose.model('Post', { text: String });

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@realDonaldTrump'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
    
  

// modelo 

// segundos = segundos - 1;
// var Post = mongoose.model('Post', { text: tweet.text });

var post = new Post({ text: tweet.text });
a = a + 1;
post.save(function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log('--------------------------------------------- Salvo no banco tweet '+a+'---------------------------------');
          }
});

});

  stream.on('error', function(error) {
    console.log(error);
  });
});