$(function () {
    var socket = io();
    
    $('form').submit(function () {
        var message = $('#m').val();
        var userName = $('#name').text();
        if (userName) {
            if (message) {
                socket.emit('chat message', { 'user': $('#name').text(), 'text': message });
                $('#m').val('');
                return false;
            } else {
                console.error('Message is required');
            }
        } else {
            document.getElementById('id01').style.display = 'block';
        }
        return false;
    });
    
    socket.on('my chat message', function (msg) {
        var msgs_container = $('#messages');
        msgs_container.append($('<li>').html(msg));
        msgs_container.scrollTop(msgs_container.scrollTop() + 300);
    });

    socket.on('chat message', function (msg) {
        var msgs_container = $('#messages');
        msgs_container.append($('<li>').html(msg));
        msgs_container.scrollTop(msgs_container.scrollTop() + 300);
    });
});
