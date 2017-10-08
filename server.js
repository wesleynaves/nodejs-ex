const TeleBot = require('telebot');
const bot = new TeleBot('388250438:AAExhlt8UD8MseWwZAluSd86Ll3iFUGOMsY');

bot.on('text', (msg) => msg.reply.text("Supppp"));

bot.start();