import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import http from 'http';
import socket from 'socket.io';

export default class Configuration {

    constructor() {
        if (this._app === null || this._app === undefined) {

            this._app = express();

            // socket setup
            this._server = http.createServer(this._app);
            this._io = socket(this._server);
            this._server.listen(3000);

            // view engine setup
            this._app.set('views', path.join('./', 'views'));
            this._app.set('view engine', 'pug');

            // uncomment after placing your favicon in /public
            this._app.use(favicon('public' + '/img/img_avatar2.png'));
            this._app.use(logger('dev'));
            this._app.use(bodyParser.json());
            this._app.use(bodyParser.urlencoded({ extended: false }));
            this._app.use(cookieParser());
            this._app.use(express.static('./' + 'public'));
        }
    }

    get appExpress() {
        return this._app;
    }

    get socket() {
        return this._io;
    }
}