$(document).ready(function () {
    $("#moreinfo").on('click', function () {
        $('html, body').animate({
            scrollTop: $('#expandedAbout').offset().top + $(window).height() / 2
        }, 3000);
    });

    $("#beammeup").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 3000);
    });
});
