const { Telegraf } = require("telegraf");
const TELEGRAM_BOT_TOKEN = "6482655195:AAHJDNmd7JwSuP9SkLwSWU-PzSO4g17uNPw";
const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

const web_link = "https://lovely-dango-aa3e18.netlify.app/";

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
