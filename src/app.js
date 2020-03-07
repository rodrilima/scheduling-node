require('dotenv/config')
const express = require('express');
const routes = require('./routes')
const nunjucks = require('nunjucks');
const path = require('path');

class App {
    constructor () {
        this.server = express();
        this.isDev = process.env.NODE_ENV !== 'production';

        this.middlewares();
        this.views();
        this.routes();
    }
    middlewares() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: false }))
    }
    views(){
        nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
            watch: this.isDev,
            express: this.server,
            autoescape: true
        })
        this.server.use(express.static(path.resolve(__dirname, 'public')))
        this.server.set('view engine', 'njk');
    }
    routes() {
        this.server.use(routes);
    }
}

module.exports = new App().server;