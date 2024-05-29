const { Telegraf } = require("telegraf");
const TELEGRAM_BOT_TOKEN = "7181085962:AAFwtwS7S6BrmgWV3AICpgObAB5iGgPyUfA";
const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

const web_link = "https://app.spxswap.com";

bot.start((ctx) => {
  const id = ctx.msg.from.id;
  console.log('id',id);
  ctx.reply("Welcome:)))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  });
});

bot.launch();
