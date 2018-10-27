import BaseRoute from './BaseRoutes/BaseRoute';
import Store from 'data-store';

export default class UsersRoute extends BaseRoute {

    constructor() {
        super();
    }

    /* GET users listing. */
    getUsersRoute() {
        let store = new Store({ path: './data_storage/users.json' });
        let users = store.json(null, 10);
        return this._route.get('/', function (req, res) {
            res.writeHead(200,
                {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                });
            res.end(users);
        });
    }
}
