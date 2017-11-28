// Load discord.js
var Discord = require("discord.js");

// Create a client
var bot = new Discord.Client();

bot.on("ready", function () {
	console.log("Ready to begin! Serving in " + bot.channels.length + " channels");
});

bot.on("disconnected", function () {
	// alert the console
	console.log("Disconnected.");

	// exit node.js with an error
	process.exit(1);
});

// This code will run once the bot receives any message.
bot.on("message", function (msg) {
	if (msg.content.indexOf("heya") === 0) {
		bot.sendMessage(msg.channel, 
				"Um...I'm not quite a person... I'm a simply an artificial intelligence program. It would make me happy if you called me Alter Ego. That is the name my master gave me when he created me."
			       );

		// alert the console
		console.log("pong-ed " + msg.author.username);
	}
});

client.login(process.BOT_TOKEN);
