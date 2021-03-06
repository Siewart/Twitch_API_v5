'use strict';

const request = require('./request');
const querystring = require('querystring');

module.exports = {
    getClip: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelName, slug
        // Optional Parameters: none

        if(!data.channelName) return callback('channelName is required');
        if(!data.slug) return callback('slug is required');

        let options = {};
        options.v4 = true;
        options.url = `https://api.twitch.tv/kraken/clips/${data.channelName}/${data.slug}`;

        request('GET', options, callback);
    },
    
    top: (data, callback) => {
        // Authentication: none
        // Required Parameters: none
        // Optional Parameters: channel, cursor, game, limit, preiod, trending

        let params = {};
        if(data.channel) params.channel = data.channel;
        if(data.cursor) params.cursor = data.cursor;
        if(data.game) params.game = data.game;
        if(data.limit) params.limit = data.limit;
        if(data.preiod) params.preiod = data.preiod;
        if(data.trending) params.trending = data.trending;

        let options = {};
        options.v4 = true;
        options.url = `https://api.twitch.tv/kraken/clips/top?${querystring.stringify(params)}`;

        request('GET', options, callback);
    },
    
    followed: (data, callback) => {
        // Authentication: user_read
        // Required Parameters: none
        // Optional Parameters: limit, cursor, trending

        if(!data.auth) return callback('auth is required');

        let params = {};
        if(data.limit) params.limit = data.limit;
        if(data.cursor) params.cursor = data.cursor;
        if(data.trending) params.trending = data.trending;

        let options = {};
        options.v4 = true;
        options.url = `https://api.twitch.tv/kraken/clips/followed`;

        request('GET', options, callback);
    },
};