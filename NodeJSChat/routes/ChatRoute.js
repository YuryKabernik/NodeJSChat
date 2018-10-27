import BaseRoute from './BaseRoutes/BaseRoute';

export default class ChatRoute extends BaseRoute {

    constructor() {
        super();
    }

    /* GET login form page. */
    getChatRoute() {
        var fileStr = this._fs;
        return this._route.get('/', function (req, res) {
            res.send('respond with a chat');
        });
    }
}
