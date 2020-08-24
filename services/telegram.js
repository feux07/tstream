require("dotenv").config();

import { Telegram, Telegraf } from "telegraf";


const { TELEGRAM_BOT_TOKEN } = process.env;

const telegram = new Telegram(TELEGRAM_BOT_TOKEN);



const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)


function initializeTelegramBot(){
  bot.start((ctx) => ctx.reply('Welcome to tstream bot'))
  bot.launch()
}

function sendToUser(to, message) {

  telegram.sendMessage(to, message, {disable_web_page_preview: true, parse_mode:"HTML"});
  
}

export { sendToUser, initializeTelegramBot };