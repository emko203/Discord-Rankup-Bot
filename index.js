const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Rank Spammer is online!');
});

const replies = [
	'Няма да ранкъпнеш!',
	'Не си ниска девизия заради героите, ниска девизия си щото нямаш ръце!',
	'Спрете да ме питате тия въпроси!',
	'Във вас е проблема, за нищо не ставате',
	'https://images-ext-1.discordapp.net/external/tlBlI1N8VdJpNgC3HgRt5eGcb6eCB7PkQyGUhCe6fXU/%3Fcid%3D73b8f7b17e52f439a2ee49cab28f5edcd65ce966a75917e1%26rid%3Dgiphy.mp4%26ct%3Dg/https/media4.giphy.com/media/lI6jOJBGIaQwLWA9hZ/giphy.mp4',
	'Вземете се сериозно малко.',
	'Няма да ранкъпнеш!',
	'Няма Jungle Gap, тебе те gap-ват.'
];

client.on('message', sendMsg);

function sendMsg(msg) {
	const dice = Math.floor(Math.random() * replies.length);
	if (msg.channel.id === '432574891233902624' && msg.content === 'nr') {
		msg.reply(replies[dice]);
	}
}

client.login(process.env.BOTTOKEN);
