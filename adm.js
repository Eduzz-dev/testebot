const Discord = require("discord.js")

module.exports.run = async(client, message, args) =>{
  
  
  message.delete()
  let user = message.author
  let avatar = user.avatarURL({format: 'png', dynamic: true, size: 1024})
  
  
  
  
  let embed = new Discord.MessageEmbed()
  .setTitle("Painel de Administracão")
  .setColor("YELLOW").setTimestamp()
  .setFooter(user.tag)
  .setThumbnail(avatar)
  .addField("**Comandos**",` \`\`\ ?ban, ?unban, ?mute, ?unmute ?kick, \`\`\ `)
  
  
message.channel.send(embed)
  
  
} 