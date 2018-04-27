const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Command: :help");
    console.log("Connected")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n !GML-bot \n !fabriquant \n !embed");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === prefix + "GML-bot"){
        message.reply("Création du bot le 23/04/18");
        console.log("Commande effectué");
    }    

    if (message.content === prefix + "fabriquant"){
        message.reply(" Ce bot a été créé par GML royaleTV !");
        console.log("Commande effectué");
    }
    
    if (message.content === prefix + "embed"){
        var embed = new Discord.RichEmbed()
            .setTitle("EMBED")
            .setDescription("Ceci est un embed")
            .addField(".help","Page d'aide", true)
            .addField("Embed01","Embed 01 ! :) Suivez les tuto de [GML royale](https://www.youtube.com/channel/UCRgNiHBtGrGn3fvFngSAGpQ?view_as=subscriber)", true)
            .setColor("0xFF0000")
            .setFooter("Bon moment parmis nous ! :)")
        message.channel.sendEmbed(embed);
        }        

});
