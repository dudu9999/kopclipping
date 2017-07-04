var TwitterPackage = require('twitter');

var mongoose = require('mongoose');

mongoose.connect('mongodb://user2:123456@ds139942.mlab.com:39942/kopteste');
//mongoose.connect('mongodb://localhost/twitterDBS');

var a = 1;
var secret = {
  consumer_key: 'qKjOCsSCHNIKgwpIq8QORrlh9',
  consumer_secret: 'B5hDFU65gxUVCwxRLuazbYkZbN2ASlKmAgZJ5i7RFwmN5ZWszV',
  access_token_key: '290752188-EmQCY3cgrILIbALQBsJ0bDClWUXWQuAVmskfKukN',
  access_token_secret: 'AJ90q7To2OrfAw20R7U5ynvZ8seJCaSFbBZ9ywwkLjzPk'
}

var Post = mongoose.model('Post', {
  owner: String, 
  id: String,
  user: String,
  text: String,
  data: Date

});

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '@whindersson'}, function(stream) {
  stream.on('data', function(tweet) {

    console.log("Id:"+tweet.id+"Usuario: "+tweet.user.name+"\nTweet: "+tweet.text);
    //console.log("Usuario: "+tweet.user.name+"\nNome Real: "+screen_name+"\nHashtags: "+tweet.entities.hashtags+"\nQuem foi mencionado:"+entities.user_mentions+"\nTweet: "+tweet.text);
    //console.log(tweet);
    //console.log(tweet.entities.hashtags[0,1]);

var post = new Post({ owner: "user2", id: tweet.id, user: tweet.user.name, text: tweet.text, data: tweet.timestamp_ms    });

post.save(function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log('--------------------------------------------- Salvo no banco tweet ---------------------------------');
          }
});

});

  stream.on('error', function(error) {
    console.log(error);
  });
});