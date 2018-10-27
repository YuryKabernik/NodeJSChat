import express from 'express';
import IndexRoute from '../routes/IndexRoute';
import UsersRoute from '../routes/UsersRoute';
import ChatRoute from '../routes/ChatRoute';
import LoginRoute from '../routes/LoginRoute';
import MessagesRoute from '../routes/MessagesRoute';

export default class Routing {

    constructor(application = express()) {
        this._application = application;
    }

    route() {

        this._application.use('/', new IndexRoute().getIndexRoute());
        this._application.use('/users', new UsersRoute().getUsersRoute());
        this._application.use('/chat', new ChatRoute().getChatRoute());
        this._application.use('/login', new LoginRoute().getLoginRoute());
        this._application.use('/messages', new MessagesRoute().getMessagesRoute());

        // catch 404 and forward to error handler
        this._application.use(function (req, res, next) {
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
        });
    }
}
