'use strict';

//init modules
const ConclaveBot = require('discord.js');
const ImgurSesh = require('imgur-search');
const GiphySesh = require('giphy-api');

//init env vars
var discordVars = require('./bot/config/disconfig.js');
var imgurVars = require('./bot/config/imgur.js');
var giphyVars = require('./bot/config/giphy.js');

//init Discord bot
