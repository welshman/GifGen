const Discord = require('discord.js'); 
const client = new Discord.Client();

client.login(process.env.token);

client.on ('ready', async () =>{
	console.log(`Bot Is Online`)
})

client.on('message', message => { 
    function randomizer(length, letter) {

var randomizer = '';
if (letter.indexOf('0') > -1) randomizer += '0123456789';
if (letter.indexOf('A') > -1) randomizer += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
if (letter.indexOf('a') > -1) randomizer += 'abcdefghijklmnopqrstuvwxyz';
var results = '';


for (var i = length; i > 0; --i) 
{
results += randomizer[Math.floor(Math.random() * randomizer.length)];

}

return results;

}
if(message.content === '>help') return message.channel.send("https://raw.githubusercontent.com/welshman/GifGen/master/help.txt");
if(message.content === '>discord') return message.channel.send("https://discord.gg/SuFN7eD");
if(message.content === '>IMVU') return message.channel.send("IMVU Gift Card: "+ randomizer(10,'0A'));
if(message.content === '>webkinz') return message.channel.send("Webkinz Gift Card: "+ randomizer(8,'0A'));
if(message.content === '>gamekit') return message.channel.send("Gamekit Gift Card: "+ randomizer(8,'0A'));
if(message.content === '>itunes') return message.channel.send("iTunes Gift Card: "+ randomizer(16,'0A'));
if(message.content === '>netflix') return message.channel.send("Netflix Gift Card: LEQ"+ randomizer(1,'0')+ randomizer(1,'A')+ randomizer(6,'0'));
if(message.content === '>fortnite') return message.channel.send("Fortnite Gift Card: "+ randomizer(5,'0A')+ "-"+ randomizer(5,'0A')+ "-"+ randomizer(5,'0A')+ "-"+  randomizer(5,'0A')+ "-"+ randomizer(5,'0A'));
if(message.content === '>xbox') return message.channel.send("Xbox Gift Card: "+ randomizer(5,'0A')+ "-"+ randomizer(5,'0A')+ "-"+ randomizer(5,'0A')+ "-"+  randomizer(5,'0A')+ "-"+ randomizer(5,'0A'));
if(message.content === '>roblox') return message.channel.send("Roblox Gift Card: "+ randomizer(3,'0')+ " "+ randomizer(3,'0')+ " "+ randomizer(4,'0'));
if(message.content === '>minecraft') return message.channel.send("Minecraft Gift Card: "+ randomizer(4,'0A')+ "-"+ randomizer(4,'0A')+ "-"+ randomizer(4,'0A'));
if(message.content === '>psn') return message.channel.send("PSN Gift Card: "+ randomizer(4,'0A')+ "-"+ randomizer(4,'0A')+ "-"+ randomizer(4,'0A'));
if(message.content === '>paypal') return message.channel.send("Paypal Gift Card: "+ randomizer(4,'0A')+ "-"+ randomizer(4,'0A')+ "-"+ randomizer(4,'0A'));
if(message.content === '>ebay') return message.channel.send("Ebay Gift Card: "+ randomizer(5,'0A')+ "-"+ randomizer(5,'0A'));
if(message.content === '>googleplay') return message.channel.send("Google Play Gift Card: "+ randomizer(4,'0A')+ "-"+ randomizer(4,'0A')+ "-"+ randomizer(4,'0A')+ "-"+ randomizer(4,'0A')+ "-"+ randomizer(4,'0A'));
if(message.content === '>steam1') return message.channel.send("Steam Gift Card: "+ randomizer(5,'0A')+ "-"+ randomizer(5,'0A')+ "-"+ randomizer(5,'0A'));
if(message.content === '>steam2') return message.channel.send("Steam Gift Card: "+ randomizer(4,'0A')+ "-"+ randomizer(6,'0A')+ "-"+ randomizer(5,'0A'));
if(message.content === '>amazon1') return message.channel.send("Amazon Gift Card: "+ randomizer(4,'0A')+ "-"+ randomizer(6,'0A')+ "-"+ randomizer(5,'0A'));
if(message.content === '>amazon2') return message.channel.send("Amazon Gift Card: "+ randomizer(4,'0A')+ "-"+ randomizer(6,'0A')+ "-"+ randomizer(4,'0A'));
});
