const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help")
    console.log("Connectedç")
});

bot.login("NDM4MzA0MTY0MDg3MzMyODY2.DcDH4A.O6HqRLNa5tk48hHD1AOCLx52LqI");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
});
