const { Telegraf } = require("telegraf");
const TOKEN = "6482655195:AAHJDNmd7JwSuP9SkLwSWU-PzSO4g17uNPw";
const bot = new Telegraf(TOKEN);

const web_link =
  "https://6649b5eb977ec68b32152040--lovely-dango-aa3e18.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome:)))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
