require("dotenv").config();

const Twit = require("twit");

import { sendToUser, initializeTelegramBot } from "./services/telegram";
import { getStream, constructTweetUrl } from "./services/twitter";

const { TELEGRAM_TARGET_CHAT_ID, TWITTER_SEARCH_TEXTS } = process.env;

initializeTelegramBot();

const stream = getStream(TWITTER_SEARCH_TEXTS);

stream.on("tweet", function (tweet) {
  let text = tweet.full_text ? tweet.full_text : tweet.text;

  if (!text.includes("RT")) {
    console.log(JSON.stringify(tweet));

    sendToUser(
      TELEGRAM_TARGET_CHAT_ID,
      `<strong>Content</strong> \n\n${text}\n\n\n<strong>Link</strong>\n\n${constructTweetUrl(
        tweet
      )}`
    );
  }
});
