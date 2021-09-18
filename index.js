const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Rank Spammer is online!');
});

const replies = [
	'',
	'Няма да ранкъпнеш!',
	'Не си ниска девизия заради героите, ниска девизия си щото нямаш ръце!',
	'Спрете да ме питате тия въпроси!',
	'Във вас е проблема, за нищо не ставате',
	'Вземете се сериозно малко.',
	'Няма да ранкъпнеш!',
	'Няма Jungle Gap, тебе те gap-ват.',
	'Тоя сатър виждаш ли го...?'
];

client.on('message', sendMsg);

function sendMsg(msg) {
	const dice = Math.floor(Math.random() * replies.length);
	const exampleEmbed = new MessageEmbed().setImage('https://media.giphy.com/media/lI6jOJBGIaQwLWA9hZ/giphy.gif');
	if (msg.channel.id === process.env.spamCID && msg.content === '-nr') {
		if (dice === 0) {
			msg.reply({ embed: exampleEmbed });
		} else {
			msg.reply(replies[dice]);
		}
	}
}

// const hstucks = client.users.cache.find((user) => user.id === 'userID');

const veskoID = process.env.vID;
const repliesV = [ '', 'Няма да ранкъпнеш!', 'Героите ти не са достатъчно тежки!', 'Нямаш ръце!' ];

client.on('message', function(message) {
	const diceV = Math.floor(Math.random() * repliesV.length);
	const heavy = new MessageEmbed().setImage('https://media.giphy.com/media/jBIinYtUd1YqG0oq8P/giphy.gif');
	if (message.author.id === veskoID) {
		if (diceV === 0) {
			message.reply({ embed: heavy });
		} else {
			message.reply(repliesV[diceV]);
		}
	}
});

client.login(process.env.BOTTOKEN);
