var io = require('socket.io-client');
var assert = require('assert');
var expect = require('expect');
var app = require('../starter.js').app;

var socketUrl = 'http://localhost:3000/';

var chatUser1 = { name: 'Tom', msg: 'My name is Tom.' };
var chatUser2 = { name: 'Sally', msg: 'My name is Sally.' };
var chatUser3 = { name: 'Dana', msg: 'My name is Dana.' };

var options = {
    'reconnection delay': 0
    , 'reopen delay': 0
    , 'force new connection': true
}

var date = new Date();

describe('Suite of unit tests', function () {

    var sockets = [];

    beforeEach(function () {

        sockets[0] = io.connect(socketUrl, options);

        sockets[0].on('connect', function () {
            // console.log(`Socket ${sockets[0].id} is created. `);
        });
        sockets[0].on('disconnect', function () {
            // console.log(`Socket ${sockets[0].id} is disconnected. `);
        });

    });

    afterEach(function (done) {

        for (let index = 0; index < sockets.length; index++) {
            // Cleanup
            if (sockets[index].connected) {
                // console.log('disconnecting...');
                sockets[index].disconnect();
            } else {
                // There will not be a connection unless you have done() in beforeEach, socket.on('connect'...)
                // console.log('no connection to break...');
            }
        }

        done();
    });


    it('Test event:"new user" when client emits event:"register". \n Parameter "userName" != chatUser2.name', function (done) {

        sockets[0].on('new user', function (userName) {
            expect(chatUser2.name).not.toBe(userName, '');
            done();
        });

        sockets[0].emit('register', chatUser1.name);

    });

    it('Test event:"new user" when client emits event:"register". \n Parameter "userName" == chatUser2.name', function (done) {

        sockets[0].on('new user', function (userName) {
            expect(chatUser2.name).toBe(userName, `Expected: ${chatUser2.name} = Actual: ${userName}`);
            done();
        });
        CreateSocket(1)
        sockets[1].emit('register', chatUser2.name);

    });

    it('Test event:"chat message" with broadcastMessage result.', function (done) {

        sockets[0].on('chat message', function (msg) {
            let broadcastMessage = '<div class="msg-container"><img src="img/img_avatar2.png" alt="Avatar"><strong>' + chatUser2.name + '</strong><p>' + chatUser2.msg + '</p> <span class="time-right">' + date.getHours() + ':' + date.getUTCMinutes() + '</span></div>';
            expect(broadcastMessage).toBe(msg, `Expected: ${broadcastMessage} = Actual: ${msg}`);
            done();
        });
        CreateSocket(1)
        sockets[1].emit('chat message', { user: chatUser2.name, text: chatUser2.msg });

    });

    function CreateSocket(num = 1) {

        for (let index = sockets.length - 1; index <= num; index++) {
            sockets[index] = io.connect(socketUrl, options);

            sockets[index].on('connect', function () {
                console.info(`Socket ${sockets[index].id} is created. `);
            });
            sockets[index].on('disconnect', function () {
                // console.log(`Socket ${sockets[index].id} is disconnected. `);
            });
        }
    };
});
