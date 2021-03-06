'use strict';

const request = require('./request');
const querystring = require('querystring');

module.exports = {
    getAll: (data, callback) => {
        // Authentication: none
        // Required Parameters: none
        // Optional Parameters: limit, offset

        let params = {};
        if(data.limit) params.limit = data.limit;
        if(data.offset) params.offset = data.offset;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/teams`;

        request('GET', options, callback);
    },

    getTeam: (data, callback) => {
        // Authentication: none
        // Required Parameters: team
        // Optional Parameters: none

        if(!data.team) return callback('team is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/teams/${data.team}`;

        request('GET', options, callback);
    }
};