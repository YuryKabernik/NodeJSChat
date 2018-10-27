import io from 'socket.io';

export default class SocketConfig {

    constructor(ioSocket = io({ transports: ['websocket'], upgrade: false })) {
        this._io = ioSocket;
    }

    run() {

    }
}