var Twitter = require('twit');
var twit = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var userStream = twit.stream('user', {with: 'user', replies: 'all'});

userStream.on('tweet', function(tweet) {
  twit.post('statuses/retweet/:id', {id: tweet.id}, function(err, reply) {
    console.log(err, reply);
  });
});
