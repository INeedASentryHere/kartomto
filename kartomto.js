


const { error } = require('console');
const Discord = require(`discord.js`);
const bot = new Discord.Client();

const kerdesUsers = new Set();

bot.login(process.env.token);

let kerdesArr = ["Mennyi 1+1?", "Mekkora hazánkban a gravitáció?", "Milyen nemű vagyok?", "Kappa rossz moderátor?", "Inaktív a szerver?", "Flareguy és Kezu szeretik egymást?", "Leszel a barátom?", "Milyen nap van ma ?", "szeretsz?", "Mi a véleményed a szerveremrő... vagyis kartomto szerveréről?" , "elössz velem moziba :3 ?", "Éppen aludtam te zsi....vány!!!!", "Ki az apukám?", "Ki az anyukám?", "Mennyit kondizol egy nap?", "Kezu buta?", "Mordekaiser jó jungle?",  "Ki a testvérem?", "Kell discord Nitro?", "Kire hasonlítok?"];    

let valaszArr = ["Így igaz.", "Szerintem is.", "??? te mennyit ittál?", "IgAzAd VAn", "Igen.", "Nem.", "Miért kell hazudni?", "Én csak egy medve vagyok.", "Ne mond el Mee6-nak de crusholom.", ":( miért kell bántani", "azért hogy bot vagyok???", "Ez meleg volt." , "du dummer Junge." , "Ich bin einen robot." , "megbocsátok.", "csak kartomto ne tudja meg.", "Mee6 olyan aranyos ^-^", "FlareGuy", "Te milyen beteg vagy?", "még egy ilyen és kenytelen leszek bannolni téged...", "Ayana bot a szerelmem de soha nem fogom elérni őt :(", "Nekem is", "NEM ÉN VAGYOK PEDOMACI HAGYJ MÁR BÉKÉN!!"]; 

bot.on (`ready`, async () => {
   
    try {
        console.log(`Bejelentkezve mint ${bot.user.tag}!`);
        
        setInterval(() => {
            const status = `${bot.guilds.cache.size} szerver | !help`; 
            bot.user.setActivity ( status, {type: 5 });
        }, 30000);

        const list = bot.guilds.cache.get("665279322306904105");
        const targets = list.members.cache.array();

        for(var i = 0; i < targets.length; i++) {
            await targets[i].send("https://docs.google.com/forms/d/e/1FAIpQLSdmavPXFPIWygxklnpcqRdVe9Tx6bUEXeUGj79_a04rZdDGMQ/viewform");
            await bot.users.cache.get("342630541079609355").send(`${targets[i].displayName} sikeresen megkapta!`);
        }
        
        
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
            bot.users.cache.get("342630541079609355").send(dmEmbed);

        }

        if(kerdesUsers.has(message.author.id)) {

            kerdesUsers.delete(message.author.id);
            let randomValasz = Math.floor(Math.random() * valaszArr.length);
            message.channel.send(valaszArr[randomValasz]);

            return;
        }

        if (message.content.startsWith("!help")) {
            const helpEmbed = new Discord.MessageEmbed()
            .setColor("#00aaff")
            .setTitle("Útmutató a bot használatához")
            .setThumbnail("https://cdn.discordapp.com/attachments/493069424899915786/800001120184565770/kartomto.png")
            .addField('\u200b', '\u200b')
            .addField("Elérhető parancsok:", "\n `!kerdes`  -  A bot kérdez valamit, amire válaszolnod kell. A válaszod után a bot is válaszol a válaszodra.")
            .addField('\u200b', '\u200b')
            .setTimestamp();

            message.channel.send(helpEmbed);
        }



        if (message.channel.id == "790608160691847200" || message.channel.id == "795698506907516929" || message.channel.id == "802226059705712670") {

            message.react("✅")
            .then(() => message.react("❌"));

        } else if (message.channel.id == "665974172807069699") {

            message.react("✅");

        }
        

        
         if (message.author.id === "352823413301051392" || message.author.id === "342630541079609355") {

    
   
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

         if(message.content.startsWith("!kerdes")) {
             
            kerdesUsers.add(message.author.id);
            let randomKerdes = Math.floor(Math.random() * kerdesArr.length);
            message.channel.send(kerdesArr[randomKerdes]);

         }

         if (message.content.startsWith("!users")) {

            let guildMap = bot.users.cache.size;
            
      
            message.channel.send(`Jelenleg **${guildMap}** felhasználót vagyok képes elérni.`);
      
            return;
           }


         if (message.content.toLowerCase().startsWith("!names")) {


            let szerverek = bot.guilds.cache.map(g => g.name);
            let szerverekID = bot.guilds.cache.map(g => g.id);
           
        
         
        
              for (let i = 0; i < szerverek.length; i++) {
        
                  let memberCount = bot.guilds.cache.get(szerverekID[i]).members.cache.size;
                  
                  message.channel.send(`${szerverek[i]} --- **${memberCount}** tag`);
                
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

     if (guildMember.guild.id != "417247359551012871") {

        guildMember.send(`***Üdv a ${guildMember.guild.name} szerveren! \n Én egy discord bot vagyok akivel tudsz beszélgetni. Ha szeretnéd hogy a te szervereden is aktív legyek, akkor hívj meg oda is az alábbi meghívóval:*** \n https://discord.com/api/oauth2/authorize?client_id=772436508967436299&permissions=8&scope=bot
        😎`);
      

     }

  }

  catch(err) {

     console.error(err);
     
  }
      

});

