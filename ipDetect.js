$(document).ready(function() {
    $.getJSON('https://ipapi.co/json', function(data){
        $('#ip').text(data.ip);
    });
});

