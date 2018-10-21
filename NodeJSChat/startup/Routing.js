import routes from '../routes/index';
import users from'../routes/users';

export default class Routing {

    constructor(application = express()) {
        this._application = application;
    }

    route() {

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