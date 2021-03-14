const Discord = require('discord.js')
const client = new Discord.Client();
require('dotenv').config();

const token = process.env.DISCORD_TOKEN
const PREFIX = process.env.BOT_PREFIX

client.on('ready', () => {
    console.log('Instatus Updater Bot is online!')
})

client.on('message', msg => {
    if (!msg.content.startsWith(PREFIX)) return
    if (msg.guild.id != '805723501544603658') return msg.reply('Invalid Guild. This bot only works in the backend guild.')
    let args = msg.content.substring(PREFIX.length).split(' ')
    
})

client.login(token)