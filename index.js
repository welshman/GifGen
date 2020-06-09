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
if(message.content === '>fortnite') return message.channel.send("Fortnite Gift Card: "+ randomizer(5,'0A'-5,'0A'-5,'0A'-5,'0A'-5,'0A'));
});
