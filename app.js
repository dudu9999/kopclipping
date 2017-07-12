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
  data: Date,
  nota: String

});
var owner = "user2";

var Twitter = new TwitterPackage(secret);


  

Twitter.stream('statuses/filter', {track: '@whindersson'}, function(stream) {
  stream.on('data', function(tweet) {

var PosNegFunction =  function(){
  if (tweet.text == "merda" || tweet.text == "puta" || tweet.text == "idiota") {
    nota = "tweet Malefico"
  }else{
    nota = "tweet Benefico"
  }
}
    PosNegFunction();
var post = new Post({ owner: owner, id: tweet.id, user: tweet.user.name, text: tweet.text, data: tweet.timestamp_ms, nota: nota    });
   

    //console.log("\nId:"+tweet.id+"\nUsuario: "+tweet.user.name+"\nTweet: "+tweet.text);


console.log(post);
post.save(function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log('--------------------------------------------- Salvo no banco tweet ---------------------------------');
           // console.log(post);
          }
});

});

  stream.on('error', function(error) {
    console.log(error);
  });
});