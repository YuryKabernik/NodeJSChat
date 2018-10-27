import BaseRoute from './BaseRoutes/BaseRoute';
import Store from 'data-store';

export default class MessagesRoute extends BaseRoute {

    constructor() {
        super();
    }

    /* GET messages listing. */
    getMessagesRoute() {
        let store = new Store({ path: './data_storage/messages.json' });
        let messagesList = store.json();
        return this._route.get('/', function (req, res) {
            res.writeHead(200,
                {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache'
                });
            res.end(messagesList);
        });
    }
}