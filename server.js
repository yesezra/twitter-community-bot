var Twitter = require('twit');
var twit = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var userStream = twit.stream('user', { with: 'user', replies: 'all' });

userStream.on('tweet', function(tweet) {
  console.log('Received mention! id: ' + tweet.id_str);
  retweetById(tweet.id_str);
});

var retweetById = function(idStr) {
  twit.post('statuses/retweet/:id', {id: idStr}, function(err, reply) {
    console.log("retweeted id:" + idStr);
    console.log(err);
    console.log(reply);
  });
};

