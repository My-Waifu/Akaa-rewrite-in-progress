// Load the Discord.js library.
const Discord = require('discord.js');
// Create a new Discord client
const client = new Discord.Client();
const fetch = require('node-fetch');
const {MessageAttachment} = require("discord.js");

client.on('ready', async () => {
    // Send a message to console.
    console.log(`Bot Ready !`);

    const guild = await client.guilds.cache.get('874087585717313587')
    const channel = await guild.channels.cache.get('874087586241581058')

    fetch("http://localhost:25565/api/?filetype=.jpg&category=ass&tags=none&nsfw=1&base64")
        .then(res => res.text())
        .then(body => {
            const buff = new Buffer(body, 'base64');
            const att = new MessageAttachment(buff, 'profile-image.png');
            channel.send(att);
        });

});


// Login to Discord with your app's token
client.login("NjA0Nzg5MjM4NTMzMTkzNzM4.XTzD3g.TNE-H2qrKxE2zJqUFkbAPodGS3I")