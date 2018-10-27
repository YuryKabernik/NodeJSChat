'use strict';
import Configuration from './startup/Configuration';
import SocketConfig from './startup/SocketConfig';
import Routing from './startup/Routing';
import Error500Handler from './handlers/Error500Handler';
import Error404Handler from './handlers/Error404Handler';

let config = new Configuration();
let app = config.appExpress;
let ioSocket = config.socket;

let socket = new SocketConfig(ioSocket);
let res = new Routing(app);

socket.run();
res.route();

new Error404Handler().handle(app);
new Error500Handler().handle(app);
