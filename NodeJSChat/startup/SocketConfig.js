import io from 'socket.io';
import Store from 'data-store';

export default class SocketConfig {

    constructor(ioSocket = io({ transports: ['websocket'], upgrade: false })) {
        this._io = ioSocket;
    }

    run() {
        let localIO = this._io;
        let date = new Date();
        let storeMessages = new Store({ path: './data_storage/messages.json' });
        let storeUsers = new Store({ path: './data_storage/users.json' });

        // для обработки нового события через socket, добавь нового обработчика socket.on() 
        localIO.sockets.on('connection', function (socket) {

            socket.on('register', function (userName) {

                let clientID = socket.client.id;
                console.log('New user: ' + userName);
                socket.userName = userName;
                storeUsers.load();
                storeUsers.set(clientID, { 'name': userName });

                localIO.emit('update users', storeUsers.json(null, 20));
            });

            socket.on('chat message', function (msg) {

                let message = '<div class="msg-container darker"><img src="img/img_avatar2.png" alt="Avatar" class="right"><strong>' + msg.user + '</strong><p>' + msg.text + '</p> <span class="time-left">' + date.getHours() + ':' + date.getUTCMinutes() + '</span></div>';
                let broadcastMessage = '<div class="msg-container"><img src="img/img_avatar2.png" alt="Avatar"><strong>' + msg.user + '</strong><p>' + msg.text + '</p> <span class="time-right">' + date.getHours() + ':' + date.getUTCMinutes() + '</span></div>';

                storeMessages.union(date.toDateString(), msg);

                socket.broadcast.emit('chat message', broadcastMessage); // отправить всем кроме меня
                socket.emit('my chat message', message); // отправить только мне
            });

            socket.on('disconnect', function () {
                let clientID = socket.client.id;
                storeUsers.del(clientID);
                socket.broadcast.emit('update users', storeUsers.json(null, 20));
                // console.log('Got disconnect! id: '+ clientID.toString());
                socket.disconnect(true);
            });
        });
    }
}
