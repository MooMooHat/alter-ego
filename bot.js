const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'heya') {
    	message.reply(
		"Um...I'm not quite a person... I'm a simply an artificial intelligence program. It would make me happy if you called me Alter Ego. That is the name my master gave me when he created me.");
  	}
});

client.on('message', message => {
    if (message.content === 'Alter') {
    	message.reply(
		"Ego!");
  	}
});

client.on('message', msg => {
  if (msg.content === 'good night alter ego') {
    msg.reply('take care and sleep well... Good night!');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
