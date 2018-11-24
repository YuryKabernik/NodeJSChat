var io = require('socket.io-client');
var assert = require('assert');
var expect = require('expect');
var app = require('../starter.js').app;
var Store = require('data-store');

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
var storeMessages = new Store({ path: './data_storage/messages.json' });
var storeUsers = new Store({ path: './data_storage/users.json' });

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
        storeMessages.clear();
        storeUsers.clear();
        done();
    });


    it('Test event:"update users" when client emits event:"register". \n Parameter "userName" != chatUser2.name', function (done) {

        sockets[0].on('update users', function (userName) {
            expect(chatUser2.name).not.toBe(userName, '');
            done();
        });

        sockets[0].emit('register', chatUser1.name);
    });

    it('Test event:"update users" when client emits event:"register". \n Parameter "userName" == chatUser2.name', function (done) {

        sockets[0].on('update users', function (users) {
            var usersList = JSON.parse(users);
            var keys = Object.keys(usersList);
            keys.forEach(function (key) {
                expect(usersList[key].name).toBe(chatUser2.name, `Expected: ${chatUser2.name} = Actual: ${usersList[key].name}`);
            });
        });
        done();
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

    it('Test event:"chat message" with my message result.', function (done) {

        sockets[0].on('my chat message', function (msg) {
            let message = '<div class="msg-container darker"><img src="img/img_avatar2.png" alt="Avatar" class="right"><strong>' + chatUser3.name + '</strong><p>' + chatUser3.msg + '</p> <span class="time-left">' + date.getHours() + ':' + date.getUTCMinutes() + '</span></div>';
            expect(message).toBe(msg, `Expected: ${message} = Actual: ${msg}`);
            done();
        });
        CreateSocket(1)
        sockets[0].emit('chat message', { user: chatUser3.name, text: chatUser3.msg });

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
