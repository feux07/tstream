require("dotenv").config();

import Twit from "twit";

const {
  TWITTER_API_KEY,
  TWITTER_API_KEY_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET,
} = process.env;

const T = new Twit({
  consumer_key: TWITTER_API_KEY,
  consumer_secret: TWITTER_API_KEY_SECRET,
  access_token: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

function getStream(track) {
  return T.stream("statuses/filter", { track, tweet_mode: "extended" });
}

function constructTweetUrl(tweet) {
  return (
    "https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str
  );
}

export { getStream, constructTweetUrl };
