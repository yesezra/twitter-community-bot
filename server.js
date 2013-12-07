var Twitter = require('twit');
var twit = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Nothing to see here. Move along.');
});

app.listen(process.env.PORT);
console.log("Express is running on port " + process.env.PORT);

var userStream = twit.stream('user', { with: 'user', replies: 'all' });

userStream.on('tweet', function(tweet) {
  console.log('Received mention! id: ' + tweet.id_str);
  retweetById(tweet.id_str);
});

var retweetMentionsFromTimelineSince = function(sinceId) {
  twit.get('statuses/mentions_timeline', {since_id: sinceId}, function (err, reply) {
    for (var i = reply.length - 1 ; i >= 0; i--) {
      retweetById(reply[i].id_str);
    }
  });
};


var findLastRetweet = function(callback) {
  twit.get('statuses/user_timeline', {}, function(err, reply) {
    var mostRecentRetweetId;
    reply.forEach(function(element, index, array) {
      if (element.retweeted) {
        mostRecentRetweetId = element.id_str;
        return false;
      }
    });

    callback(mostRecentRetweetId);
  });
};

var retweetById = function(idStr) {
  twit.post('statuses/retweet/:id', {id: idStr}, function(err, reply) {
    console.log("retweeted id:" + idStr);
    console.log(err);
    console.log(reply);
  });
};

findLastRetweet(function(lastRetweetId) {
  retweetMentionsFromTimelineSince(lastRetweetId);
});
