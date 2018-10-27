import BaseRoute from './BaseRoutes/BaseRoute';

export default class LoginRoute extends BaseRoute {

    constructor() {
        super();
    }

    /* GET login form page. */
    getLoginRoute() {
        var fileStr = this._fs;
        return this._route.get('/', function (req, res) {
            let html = fileStr.readFileSync('./views/html/login.html');
            res.writeHead(200,
                {
                    'Content-Type': 'text/html',
                    'Cache-Control': 'no-cache'
                });
            res.end(html);
        });
    }
}
