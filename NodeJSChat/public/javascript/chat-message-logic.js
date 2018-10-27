$(function () {
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
});
