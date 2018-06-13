$(document).ready(function () {
    $("#moreinfo").on('click', function () {
        $('html, body').animate({
            scrollTop: $('#section3').offset().top
        }, 3000);
    });

    $("#beammeup").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 3000);
    });
});
