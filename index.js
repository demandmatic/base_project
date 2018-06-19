'use strict';

const Hapi = require('hapi')
const Config = require('./src/config/setting')
const Routes = require('./src/routes')
const mongoose = require("mongoose")

// Create a server with a host and port
const server = Hapi.server({
    port: Config.get("hapi:conf:port")
});

// Add the route
server.route(Routes);

// Start the server
async function start() {
    try {
        mongoose.connect(Config.get('db:mongo:server'), Config.get('db:mongo:config'), function (err) {
            if (err) console.error(err);
            process.exit(1);
        });
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
};

start();