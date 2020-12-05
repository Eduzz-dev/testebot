const Discord = require("discord.js")

module.exports.run = async(client, message, args) =>{
  
  
  message.delete()
  let user = message.author
  let avatar = user.avatarURL({format: 'png', dynamic: true, size: 1024})
  
  
  
  
  let embed = new Discord.MessageEmbed()
  .setTitle("<:Smoothreview:752915909890539711> Painel de Ajuda")//oxi, e bdb n viado
  .setColor("YELLOW").setTimestamp()
  .setFooter(user.tag)
  .setThumbnail(avatar)
  .addField("**<a:seta3:755497207729356921> Comandos de Adminstração**",` \`\`\ ?adm \`\`\ `)
  .addField("**<a:seta3:755497207729356921> Comandos de de Diversão**",` \`\`\ ?diversao \`\`\ `)
  .addField("**<a:seta3:755497207729356921> Comandos Normais **", ` \`\`\ ?normais \`\`\ `)
  
  
message.channel.send(embed)
  
  
}