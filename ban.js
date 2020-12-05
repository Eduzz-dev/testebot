const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Sem Permissão")
 let valor = args[0]
 if(!valor) return message.channel.send("Mencione o Usúario")
        const member = message.mentions.members.first()
      var reason = args.slice(1).join(" ");
      
     let embed = new Discord.MessageEmbed()
     .addTitle('Banimento')
     .addColor('YELLOW')
     .addField('Usuario:', ` ${member} `)
     .addField('Banido:', ` ${reason} `)
     .addField('Por:',` ${message.author.username} `)
await member.ban();
    
     message.channel.send(embed)
      }
  
  
 