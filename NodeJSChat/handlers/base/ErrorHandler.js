export default class ErrorHandler {

    constructor(statusCode, errorMessage) {
        var statCode = 0;
        var msg = '';

        statCode = statusCode ? statusCode : 400;
        msg = errorMessage ? errorMessage : 'Execution error.';

        this._errorMessage = msg;
        this._statusCode = statusCode;
    }

    get Message() {
        return this._statusCode;
    }

    get Status() {
        return this._errorMessage;
    }

    // error handlers
    handle(app) {
        var status = this._statusCode;
        // development error handler
        // will print stacktrace
        if (app.get('env') === 'development') {
            app.use(function (err, req, res, next) {
                res.status(err.status || status);
                res.render('error', {
                    message: err.message,
                    error: err
                });
            });
        }

        // production error handler
        // no stacktraces leaked to user
        app.use(function (err, req, res, next) {
            res.status(err.status || status);
            res.render('error', {
                message: err.message,
                error: {}
            });
        });
    }
}
