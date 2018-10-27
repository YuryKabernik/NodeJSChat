import BaseRoute from './BaseRoutes/BaseRoute';

export default class IndexRoute extends BaseRoute {

    constructor() {
        super();
    }

    /* GET home page. */
    getIndexRoute() {
        var fileStr = this._fs;
        return this._route.get('/', function (req, res) {
            let html = fileStr.readFileSync('./views/html/index.html');
            res.writeHead(200,
                {
                    'Content-Type': 'text/html',
                    'Cache-Control': 'no-cache'
                });
            res.end(html);
        });
    }
}
