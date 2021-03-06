'use strict';
const request = require('request');
let index = require('../index');

module.exports = (method, data, callback) => {
    require('request').debug = index.debug;

    let clientID = index.clientID;
    if(!clientID || clientID === '') return callback('No client id specified');
    
    let options = {
        url: data.url,
        method: method,
        form: data.form,
        headers: {
            'Client-ID': clientID,
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Content-Type': 'application/json',
            'Authorization': data.auth || ''
        }
    };

    // Headers for v4 API (clips and video upload)
    if(data.v4) options.headers.Accept = 'application/vnd.twitchtv.v4+json';
    if(data.content_length) {
        options.encoding = null;
        options.headers.content_length = data.content_length;
    }

    if(options.headers.Authorization != '' && options.headers.Authorization.indexOf('OAuth') === -1) {
        options.headers.Authorization = 'OAuth ' + data.auth;
    }

    request(options, (err, res, body) => {
        if(err) return callback(err);
        try {
            if(body.length === 0) return callback({ statusCode: res.statusCode });
            let response = JSON.parse(body);
            callback(null, response);
        }
        catch(err) {
            callback(err);
        }
    });
};