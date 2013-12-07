twitter-community-bot
=====================

A little Twitter bot based on the old [@oberlin](https://twitter.com/oberlin) community account.

Background
=========

Back in the good old days (circa 2008-2010), I was in college and there was a great little community Twitter account at [@oberlin](https://twitter.com/oberlin). This account, when you tweeted at it, would retweet your message – making it really easy to broadcast to everyone in the community. As I understand it, the account was automated by [Yahoo Pipes](http://pipes.yahoo.com/pipes/), but over time it fell into disrepair.

I keep thinking back to those days, and about how nothing better has really emerged as a good way to organize groups on Twitter. Hashtags are great, but they are ephemeral and people have to actively choose to follow them. Twitter Community Bot is my little attempt to bring back the magic.  

Functionality
============

Twitter Community Bot takes over a Twitter account. When other Twitter users mention this account, Community Bot retweets the tweets. 

That's it. But I'm open to [other suggestions about how it might work](https://github.com/ahhrrr/twitter-community-bot/issues).

Deployment
=======

Want to set up a community bot for your community? Just follow these steps:


Setting up a Twitter Application
---------

1. Set up and log into a Twitter account that your bot will use.
2. [Go to "My Applications"](https://dev.twitter.com/apps) on the Twitter Developers portal, logging in if necessary.
3. Click "Create a new application."
4. Give the application a name, description, and website, agree to the "Developer Rules of the Road," and fill in the CAPTCHA.
5. Under the "Settings" tab, in the "Application Type" section, check "Read, Write and Access direct messages," then at the bottom of the page, click "Update this Twitter application's settings."
6. Back on the "Details" tab, click the "Create my access token" button at the bottom of the page.
7. Take note of the Consumer Secret, Consumer Key, Access Token, and Access Token Secret – we'll need these in a minute.

Deploying your bot to Heroku
--------

1. [Set up an account on Heroku, and configure your computer](https://devcenter.heroku.com/articles/quickstart).
2. Clone the twitter-community-bot git repository to your computer:

  ```
  git clone git@github.com:ahhrrr/twitter-community-bot.git
  ```
3. Create a new Heroku app for your bot, and give it a name:
  ```
  heroku apps:create NAME
  ```
4. Add configuration variables to your Heroku app:
  ```
  heroku config:add TWITTER_CONSUMER_KEY=***
  heroku config:add TWITTER_CONSUMER_SECRET=***
  heroku config:add ACCESS_TOKEN=***
  heroku config:add ACCESS_TOKEN_SECRET=***
  ```

5. Ensure you have at least one web dyno running:
  ```
  heroku ps:scale web=1
  ```
6. Push to Heroku.

  ```
  git push heroku master
  ```

Development Setup
==========

1. [Install Node.js](http://nodejs.org/download/).
2. Clone the twitter-community-bot git repository to your computer:

  ```
  git clone git@github.com:ahhrrr/twitter-community-bot.git
  ```

3. Install required Node modules:

  ```
  npm install
  ```

4. Run the server:

  ```
  npm start
  ```

