var TwitterPackage = require('twitter');

var secret = {
  consumer_key: 'qKjOCsSCHNIKgwpIq8QORrlh9',
  consumer_secret: 'B5hDFU65gxUVCwxRLuazbYkZbN2ASlKmAgZJ5i7RFwmN5ZWszV',
  access_token_key: '290752188-EmQCY3cgrILIbALQBsJ0bDClWUXWQuAVmskfKukN',
  access_token_secret: 'AJ90q7To2OrfAw20R7U5ynvZ8seJCaSFbBZ9ywwkLjzPk'
}

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@G1‏'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
