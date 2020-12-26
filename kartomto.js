

const { error } = require('console');
const Discord = require(`discord.js`);
const bot = new Discord.Client();



bot.login(process.env.token);

      

bot.on (`ready`, () => {
   
    try {
        console.log(`Bejelentkezve mint ${bot.user.tag}!`);
        const status = `Love`; 
        bot.user.setActivity ( status, {type: 5 });
        
       
    
        
        
    }
    
    catch (err) {
        console.error(err);
    }

} );

bot.on ("message", message => {

    try {

        const args = message.content.substring(message.length).split(" ");
        var uzenet = message.content.substring().split(" ");

        uzenet.shift();
        uzenet.shift();
        uzenet.join(" ");

     
      
        
        if (message.author == bot.user) {
            return;
        }

        if(message.channel.type == "dm") {

            let dmEmbed = new Discord.MessageEmbed()
            .setTitle ("Privát üzenetet kaptam!")
            .setColor("RANDOM")
            .addField("\u200B", "\u200B")
            .addField("Üzenet küldője", `${message.author} \n ${message.author.username}`)
            .addField("\u200B", "\u200B")
            .addField("Üzenet tartalma", `${message.content}`)
            .addField("\u200B", "\u200B")
            .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/650746482168823868/792480864939278387/kartomto.png")
            .setTimestamp();

            bot.users.cache.get("352823413301051392").send(dmEmbed);

        }



        if (message.channel.id == "790608160691847200") {

            message.react("✅")
            .then(() => message.react("❌"));

        } else if (message.channel.id == "665974172807069699") {

            message.react("✅");

        }
        

        
         if (message.author.id === "352823413301051392") {

    
   
            if (message.content.startsWith("!pub")) {
   
                bot.channels.cache.get(args[1]).send(`${uzenet.join(" ")}`);
                return;
                            
                     }

             


            if (message.content.startsWith("!dm")) {  
         
                bot.users.cache.get(args[1]).send(`${uzenet.join(" ")}`);
                            
                message.channel.send(`Az üzenet sikeresen kiküldve **${bot.users.cache.get(args[1]).username}** számára.`);
             
                           return;
                        
                 } 
     
         }

     
        

        
    }

    catch(err)  {
        console.error(err);
    }

} );

// szerver join

bot.on("guildMemberAdd", guildMember => {

  try {

     if (guildMember.guild.id === "510895729351327785") {

        guildMember.send(`***Üdv a ${guildMember.guild.name} szerveren! \n Esetleg ha kíváncsi lennél a Magyar LoL Közösség szerverünkre is, itt egy meghívó, amivel felmehetsz oda is társalogni:*** \n https://discord.gg/fvYWhXp 😎`);
      

     }

  }

  catch(err) {

     console.error(err);
     
  }
      

});



