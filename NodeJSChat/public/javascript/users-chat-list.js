$(function () {
    var socket = io();

    socket.on('new user', function (userName) {
        $('#chat-members').append($("<li id='user' class='list-group-item'>").text('Name: ' + userName));
    });

    socket.on('disconnected user', function (listOfUsers) {
        var list = [''];
        list = listOfUsers;
        $('#chat-members').empty();
        list.map(function (name) {
            $('#chat-members').append($("<li id='user' class='list-group-item'>").text('Name: ' + name));
        });

    });

    socket.on('update users', function (users) {
        var usersList = JSON.parse(users);
        var keys = Object.keys(usersList);
        var chat_members_container = $('#chat-members');
        chat_members_container.empty();
        // console.info(users);
        // console.info(keys);
        keys.map(function (key) {
            // console.info(users[key]);
            chat_members_container.append($("<li id='user' class='list-group-item'>").text('Name: ' + usersList[key].name));
        });
    });
});