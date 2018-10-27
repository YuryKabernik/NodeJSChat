'use strict';

$(document).ready(function () {

    // Get the modal login form
    $.get('/login', function (response, status) {
        $('.loginWrapper').append(response);
    });
});
