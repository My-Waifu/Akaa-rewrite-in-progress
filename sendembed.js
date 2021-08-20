// Load the Discord.js library.
const Discord = require('discord.js');
// Create a new Discord client
const client = new Discord.Client();
const fetch = require('node-fetch');
const {MessageAttachment} = require("discord.js");

client.on('ready', async () => {
    // Send a message to console.
    console.log(`Bot Ready !`);

    //get guild id
    const guild = await client.guilds.cache.get('874087585717313587')
    //get channel id
    const tempChannel = await guild.channels.cache.get('874087586241581058')
    const embedChannel = await guild.channels.cache.get('874087621054332969')

    fetch("http://localhost:25565/api/?filetype=.jpg&category=ass&tags=none&nsfw=1&base64")
        .then(res => res.text())
        .then(async body => {
            const buff = new Buffer(body, 'base64');
            const att = new MessageAttachment(buff, 'profile-image.png');
            tempChannel.send(att).then(e => {
                const ImageLink = e.attachments.first().proxyURL;
                const t = new Discord.MessageEmbed().setColor('RANDOM').setTitle("test").setImage(ImageLink).setTimestamp();
                embedChannel.send(t);
                e.delete
            });


        });


});


// Login to Discord with your app's token
client.login("XXX")