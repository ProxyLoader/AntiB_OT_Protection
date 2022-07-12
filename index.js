const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('AntiSpam'))
app.listen(port, () =>
console.log('Connecting')
);


const usersMap = new Map();
const LIMIT = 5
const DIFF = 5000
const blocked = 0;
const Discord = require('discord.js');
const client = new Discord.Client();
const trick = "```"
const prefix = "*"
const eTitle = "AntiBot (L7Protection)"
let protect = true;

client.on("ready", () => {

  console.log("Connecting.... Good im connected")
  
     client.user.setActivity("⚡｜" + prefix + "help")

});

client.on("message", async message =>{

  if(message.author.id == "957710600811708526"){
          const args = message.content.trim().split(/ +/);
  if(message.content.startsWith(prefix + "help")){
    const helpEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(eTitle + " | Commands")
    .setDescription(trick + " " + prefix + " protection on && off" + trick)
    message.reply(helpEmbed)
  } else if(message.content.startsWith(prefix + "protection")){
            const stat = args[1]
    if(!stat) return message.channel.send(trick + "Usage: " + prefix + "protection on && off" + trick).then(msg =>{
        setTimeout(function(){
          msg.delete()
          message.delete()
}, 1500);
      })

    
    if(stat.startsWith("on")){
      if(protect == true) return message.reply(":x: | **[L7Protection] > already enabled**").then(msg =>{
        setTimeout(function(){
          msg.delete()
          message.delete()
}, 1500);
      })

      protect = true
            message.reply(":white_check_mark: | **L7Protection set to ON mode!**").then(msg =>{
        setTimeout(function(){
          msg.delete()
          message.delete()
}, 1500);
      })
    } else if(stat.startsWith("off")){
      if(protect == false) return message.reply(":x: | **[L7Protection] already disabled [DANGER]**").then(msg =>{
        setTimeout(function(){
          msg.delete()
          message.delete()
}, 1500);
      })

            protect = false
            message.reply(":white_check_mark: | **L7Protection set to OFF mode!**").then(msg =>{
        setTimeout(function(){
          msg.delete()
          message.delete()
}, 1500);
      })


      //add more commands
    }
  }
    
  }
});

client.on("guildMemberAdd", async member =>{
  if(protect == true){
    if(member.user.bot){
      member.kick("AntiBot!")
      client.channels.cache.get(process.env.CHANNEL_ID).send(trick + "[INFO] [AntiBot] -> " + member.user.tag + " > detected! | Checks: true || UUID: " + member.user.id + trick)
    }
  } else {
    client.channels.cache.get(process.env.CHANNEL_ID).send(trick + "[WARNING] [AntiBot] -> <@" + member.user.tag + " detected! | Checking: false || UUID: " + member.user.id + trick)
  }
})

            

client.login(process.env.TOKEN)
