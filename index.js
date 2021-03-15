const Discord = require('discord.js')
const bot = new Discord.Client();
require('dotenv').config();
const { InstatusClient } = require('instatus.ts')
const client = new InstatusClient({
    key: `${process.env.INSTATUS_API_KEY}`
})

const token = process.env.DISCORD_TOKEN
const PREFIX = process.env.BOT_PREFIX

bot.on('ready', () => {
    console.log('Instatus Updater Bot is online!')
})

bot.on('message', msg => {
    if (!msg.content.startsWith(PREFIX)) return
    if (msg.guild.id != '805723501544603658') return msg.reply('Invalid Guild. This bot only works in the backend guild.')
    let args = msg.content.substring(PREFIX.length).split(' ')
    
})

bot.login(token)