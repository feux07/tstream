require("dotenv").config();

import { Telegram, Telegraf } from "telegraf";

const {
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_ADMIN_USER,
  TELEGRAM_TARGET_CHAT_ID,
} = process.env;

const telegram = new Telegram(TELEGRAM_BOT_TOKEN);

let modeStatus = true;

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

function initializeTelegramBot() {
  bot.start((ctx) => ctx.reply("Welcome to tstream bot"));
  bot.command("startStream", (ctx) => {
    let message = `I can only serve ${TELEGRAM_ADMIN_USER}..!`;

    if (ctx.update.message.from.username === TELEGRAM_ADMIN_USER) {
      if (modeStatus) {
        message = "Streaming is already started...";
      } else {
        modeStatus = true;
        message = "Streaming is started...";
      }
    }

    return ctx.reply(message);
  });
  bot.command("stopStream", (ctx) => {
    let message = `I can only serve ${TELEGRAM_ADMIN_USER}..!`;

    if (ctx.update.message.from.username === TELEGRAM_ADMIN_USER) {
      if (!modeStatus) {
        message = "Streaming is already stopped...";
      } else {
        modeStatus = false;
        message = "Streaming is stopped...";
      }
    }

    return ctx.reply(message);
  });
  bot.launch();
  sendToUser(TELEGRAM_TARGET_CHAT_ID, `<strong>Tstream is started...</strong>`);
}

function sendToUser(to, message) {
  if (modeStatus) {
    telegram.sendMessage(to, message, {
      disable_web_page_preview: true,
      parse_mode: "HTML",
    });
  }
}

export { sendToUser, initializeTelegramBot };
