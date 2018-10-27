import routes from '../routes/index';
import users from'../routes/users';

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

        app.use('/', routes);
        app.use('/users', users);

        // catch 404 and forward to error handler
        app.use(function (req, res, next) {
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
        });
    }
}