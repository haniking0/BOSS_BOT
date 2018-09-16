const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'B'




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`BOSS_BOT|Bhelp`,"http://twitch.tv/S-F")
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start Time] ${new Date()}`);
  console.log('ARE YOU READY?')
  console.log('LETS GO BOT ONLINE!!')
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
});





client.on("message", message => {
      if (message.content === "Bping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Pong:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});









client.login(process.env.BOT_TOKEN);
