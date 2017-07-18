 var TwitterPackage = require('twitter');
  var mongoose = require('mongoose');

mongoose.connect('mongodb://user2:123456@ds139942.mlab.com:39942/kopteste');

//mongoose.connect('mongodb://localhost/twitterDBS');

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
  text: [{type:String, unique:true}],
  data: Date,
});

var owner = "user2";

var Twitter = new TwitterPackage(secret);


  

Twitter.stream('statuses/filter', {track: '@realDonaldTrump'}, function(stream) {
  stream.on('data', function(tweet) {


          ///console.log('--------------------------------------------- Salvo no banco tweet ---------------------------------');




 
	//var post = new Post({ owner: owner, id: tweet.id, user: tweet.user.name, text: tweet.text, data: tweet.timestamp_ms });
    //console.log("\nId:"+tweet.id+"\nUsuario: "+tweet.user.name+"\nTweet: "+tweet.text);


post.save(function (err) {
if (err) {
          console.log(err);
        } else {
          console.log('\n\n\n--------------------------------------------- Salvo no banco tweet ---------------------------------\n'+post);
       }
      });
  
    });
  
    stream.on('error', function(error) {
      console.log(error);
    });
  
  });