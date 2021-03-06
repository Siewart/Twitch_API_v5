'use strict';

const request = require('./request');
const querystring = require('querystring');

module.exports = {
    getMetadata: (data, callback) => {
        // Authentication: none
        // Required Parameters: collectionID
        // Optional Parameters: none

        if(!data.collectionID) return callback('collectionID is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/collections/${data.collectionID}`;

        request('GET', options, callback);
    },

    getCollection: (data, callback) => {
        // Authentication: none
        // Required Parameters: collectionID
        // Optional Parameters: include_all_items

        if(!data.collectionID) return callback('collectionID is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/collections/${data.collectionID}/items`;

        request('GET', options, callback);
    },

    getByChannel: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelID
        // Optional Parameters: limit, cursor, containing_item

        if(!data.channelID) return callback('channelID is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/channels/${data.channelID}/collections`;

        request('GET', options, callback);
    },

    create: (data, callback) => {
        // Authentication: collections_edit
        // Required Parameters: channelID, title
        // Optional Parameters: limit, cursor, containing_item

        if(!data.auth) return callback('auth is required');
        if(!data.channelID) return callback('channelID is required');
        if(!data.title) return callback('title is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/channels/${data.channelID}/collections`;
        options.form = { tile: data.title };

        request('POST', options, callback);
    },

    update: (data, callback) => {
        // Authentication: collections_edit
        // Required Parameters: collectionID, title
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');
        if(!data.collectionID) return callback('collectionID is required');
        if(!data.title) return callback('title is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/collections/${data.collectionID}`;
        options.form = { tile: data.title };

        request('PUT', options, callback);
    },

    createThumbnail: (data, callback) => {
        // Authentication: collections_edit
        // Required Parameters: collectionID, itemID
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');
        if(!data.collectionID) return callback('collectionID is required');
        if(!data.itemID) return callback('itemID is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/collections/${data.collectionID}/thumbnail`;
        options.form = { item_id: data.itemID };

        request('PUT', options, callback);
    },

    delete: (data, callback) => {
        // Authentication: collections_edit
        // Required Parameters: collectionID
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');
        if(!data.collectionID) return callback('collectionID is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/collections/${data.collectionID}`;

        request('DELETE', options, callback);
    },

    addItem: (data, callback) => {
        // Authentication: collections_edit
        // Required Parameters: collectionID, videoID
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');
        if(!data.collectionID) return callback('collectionID is required');
        if(!data.videoID) return callback('videoID is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/collections/${data.collectionID}/items`;
        options.form = { id: data.videoID, type: 'video' };

        request('POST', options, callback);
    },

    delItem: (data, callback) => {
        // Authentication: collections_edit
        // Required Parameters: collectionID, itemID
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');
        if(!data.collectionID) return callback('collectionID is required');
        if(!data.itemID) return callback('itemID is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/collections/${data.collectionID}/items/${data.itemID}`;

        request('DELETE', options, callback);
    },

    moveItem: (data, callback) => {
        // Authentication: collections_edit
        // Required Parameters: collectionID, itemID, position
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');
        if(!data.collectionID) return callback('collectionID is required');
        if(!data.itemID) return callback('itemID is required');
        if(!data.position) return callback('position is required');

        let options = {};
        options.url = `https://api.twitch.tv/kraken/collections/${data.collectionID}/items/${data.itemID}`;
        options.form = { position: data.position };

        request('PUT', options, callback);
    }
};