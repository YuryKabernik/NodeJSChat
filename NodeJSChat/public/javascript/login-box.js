$(function () {

    var socket = io();

    // When the user clicks anywhere outside of the modal, close it
    $('#login').on('click', function () {
        document.getElementById('id01').style.display = 'block';
    });

    $('#login-enter').on('click', function () {
        var user = $('#userName').val();
        if (user) {

            $('.user-name').html('<div class="alert alert-success" role="alert"><p>Your name: <span id="name">' + user + '</span></p></div>');
            $('.user-name').css('display', 'block');

            document.getElementById('id01').style.display = 'none';
            document.getElementById('login').innerText = 'Relogin';
            
            socket.emit('register', user);
            
            return false;
        } else {
            $('#userName').css('border', '#f44336');
        }

    });
});
