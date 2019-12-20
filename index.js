const Discord = require('discord.js');
const bot = new Discord.Client();
/*const axios = require('axios');*/
/*var request = require("request");*/

/*const TOKEN = "";*/

var version = '1.0.0';

var prefix = 'scs!';




bot.on('ready', () => {
  console.log('A bot elérhető!');

  setInterval(function () {

    let statuses = [
      'SCS Hungary weboldal',
      'SCS Hungary facebook',
      'SCS Blog',
      'World of Truck event',
      'TruckersMP Szerverek'
    ]
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, { type: 'WATCHING' });
  }, 5000)


})






bot.on('message', async (message) => {






  if (message.content === prefix + 'parancsok' || message.content === prefix + 'help') {
    const parancsok = new Discord.RichEmbed()
    .setColor('#009510')
    .setTitle('SCS Hungary')
    .setURL('https://scshungary.blogspot.com/')
    .setThumbnail('https://cdn.discordapp.com/attachments/657582495293767681/657582592048103445/logo.png')
    .setDescription('Ez itt a SCS Hungary hivatalos Discord botja!')
    .addField('Parancsok', 'scs!xmas \n scs!social \n scs!partnerek' , true)
    .setFooter('Verzió: ' + version);
    message.react('✅');
    message.channel.send(parancsok);
  }




  if (message.content === prefix + 'social') {
    const social = new Discord.RichEmbed()
    .setColor('#009510')
    .setTitle('SCS Hungary')
    .setURL('https://scshungary.blogspot.com/')
    .setThumbnail('https://cdn.discordapp.com/attachments/657582495293767681/657582592048103445/logo.png')
    .setDescription('Ez itt a SCS Hungary hivatalos Discord botja!')
      .addField('Facebook', 'https://www.facebook.com/scshungary/', false)
      .addField('Weboldal', 'https://scshungary.blogspot.com/', false)
      .setFooter('Verzió:' + version);
    message.react('✅');
    message.channel.send(social);
  }



  if (message.content === prefix + 'partnerek') {
    const partner = new Discord.RichEmbed()
    .setColor('#009510')
    .setTitle('SCS Hungary')
    .setURL('https://scshungary.blogspot.com/')
    .setThumbnail('https://cdn.discordapp.com/attachments/657582495293767681/657582592048103445/logo.png')
    .setDescription('Ez itt a SCS Hungary hivatalos Discord botja!')
    .addField('Truckin Radio', 'http://truckinradio.ml/' , false)
    .addField('Simulator TWO', 'https://simulatortwo.ga/', false)
    .addField('Yellow Angels', 'http://yellowangels.ga/', false)
    .addField('Szeretnél partner lenni?', 'Írj nekünk a facebook oldunknak privát üzenetben, és megbeszéljük a dolgokat.')
    .setFooter('Verzió: ' + version);
    message.react('✅');
    message.channel.send(partner);
  }





  if (message.content === 'Sziasztok' || message.content === 'Csáó' || message.content === 'csáó' || message.content === 'sziasztok') {

    let randomtext = [
      ' szia neked is!',
      ' helló! 😎',
      ' szia. Hogy vagy?',
      ' Szia. Látom fázol. Tessék itt egy tűz: 🔥',
      ' Legyen hó, legyen hó még sose volt hasonló... ❄️❄️',
      ' Nem kell hó, nem kell hó... vigyázz repül a sárgolyóóóó! ❄️❄️',
      ' Nem kell hó, nem kell hó... sárban is megy a szánkó! ❄️❄️'
    ]
    let randomkiiras = randomtext[Math.floor(Math.random() * randomtext.length)];
    message.reply(randomkiiras)

  }









  if (message.content === 'Boldog karácsonyt!') {
    message.reply('neked is boldog karácsonyt! :christmas_tree:  :christmas_tree: :christmas_tree: ');
  }




 
 
 if (message.content === prefix + 'xmas') {

    message.react('✅');
    const xmas = new Discord.RichEmbed()
      .setColor('#009510')
      .setTitle('SCS Hungary')
      .setURL('https://scshungary.blogspot.com/')
      .setThumbnail('https://cdn.discordapp.com/attachments/657582495293767681/657582592048103445/logo.png')
      .setDescription('Ez itt a SCS Hungary hivatalos Discord botja!')
      .addField('World of Truck | Christmas Grand Griving 2019', 'Jobb adni, mint kapni. Ez egy nagy igazság, amelyet sok tapasztalat alapján lehet megtanulni, és mindenki számára előny. Ez az oka annak, hogy ebben az évben valami nagyon új és különleges dolgot csinálunk a 2019. évi Christmas Grand Giving eseményünkön az Euro Truck Simulator 2 és az American Truck Simulator játékunkban.', false)
      .addField('Személyes cél','12 vagy annál több ajándék fuvar leszállítása után kapsz: \n - World of Truck teljesítményt azaz achievement-et. \n - Magát a logót ami a karácsonyi zokni, benne tele finomságokkal. \n - Karácsony témájú, Metál festésű festés csomag.',true)
      .addField('Közösségi célok','- Minden 200 csillag elérése után egyedi közösségi jutalmakat kapunk. \n - Az 1000 csillagos mérföldkő után a közösség további 2 külön jutalmat kap.',true)
      .setImage('https://1.bp.blogspot.com/--K7M91akcjI/Xfes9UVFfmI/AAAAAAAAA3c/Q3rBAlmWPT0h19LTiCvi_xJ9p6PcgZK6ACLcBGAsYHQ/s1600/Sock.jpg')
      .setFooter('Verzió:' + version);

    message.channel.send(xmas);
  }




});


bot.login(process.env.BOT_TOKEN);
