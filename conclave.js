'use strict';

//init modules
const ConclaveBot = require('discord-bot-base');
const ImgurSesh = require('imgur-search');
const GiphySesh = require('giphy-api');

//init env vars
var discordVars = require('./config/discord.js');
var imgurVars = require('./config/imgur.js');
var giphyVars = require('./config/giphy.js');

//init Discord bot
//var ccbot = new ConclaveBot.Bot('dev', true,)
