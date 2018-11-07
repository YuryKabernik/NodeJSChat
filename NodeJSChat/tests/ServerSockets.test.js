var io = require('socket.io-client');
var assert = require('assert');
var expect = require('expect');
var app = require('../starter.js').app;

var socketUrl = 'http://localhost:3000/';

var chatUser1 = { name: 'Tom' };
var chatUser2 = { name: 'Sally' };
var chatUser3 = { name: 'Dana' };

var options = {
    'reconnection delay': 0
    , 'reopen delay': 0
    , 'force new connection': true
}

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
