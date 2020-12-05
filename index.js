const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online


const active = new Map();
let ops = {
  active: active
};


const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
const db = require("quick.db");
const mention = new Map();

client.prefix = config.prefix;

client.on("message", async (message, member) => { 
    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
      let embed = new Discord.MessageEmbed()
      .setTitle('King Administrator')
      .setColor('YELLOW')
      .setDescription(`Olá meu prefixo é ${config.prefix} \nMeu Criador é <@599361452528369666>  \nFui programado(a) em JavaScript.`)
     message.channel.send(embed)
    }
    if(!message.content.startsWith(config.prefix)) return; 
  
   let ops ={
    mention: active
   };

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args, ops);
    } catch (err) {
    console.error('Erro:' + err);
 
let user = message.author
let avatar = user.avatarURL({format: 'png', dynamic: true, size: 1024})


    let embed = new Discord.MessageEmbed()
    .setTitle("<:Smoothreview:752915909890539711> | Comando Invalido")
    .setColor("YELLOW").setTimestamp()
    .setDescription(`**<:warn:752915973480382474>  Esse Comando não Existe, Verifique \`\`\  ?ajuda \`\`\** `)
    .setFooter(user.tag)
    .setThumbnail(avatar)
      
    message.channel.send(embed)
      
}
});



client.on("ready", () => {
  let activities = [
      `Criador Eduzz`,
      `Em Breve Top.gg talvez .-.`,
      `Meu Prefixo é ${config.prefix}`,
      `Estou em ${client.guilds.cache.size} Servidores e Assisto ${client.users.cache.size} Usúarios!`
    
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "STREAMING"
      }), 1000 * 60); 
  client.user
      .setStatus("dnd")
      .catch(console.error);
console.log(`BOT Iniciado em ${client.guilds.cache.size} Servidores e Assisto ${client.users.cache.size} Usúario!`)
});


client.login(`NzU2MzAwNDM5MjY3NDQyNzE4.X2P1rA.oVt4FPgKRns3DA4th5mDLbOWpx4`); //Ligando o Bot caso ele consiga acessar o token
 