$(document).ready(function () {

    $('.rollover .cell2').hover(function () {
        var img = $(this).children('img');
        img.hide();
        img.siblings('.imageText').show();




    }, function () {

        var img = $(this).children('.imageText');
        img.hide();
        img.siblings('img').show();

    });

    $("body").css("display", "none");

    $("body").fadeIn(2000);

    $("a").click(function (event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }

    if ($('audio').length > 0) {
        $('audio')[0].play();
    }


    $('video').click(function () {
        if ($('audio').length > 0) {
            $('audio')[0].pause();
        }

    });

    $('audio').click(function () {
        if ($('video').length > 0) {
            $('video')[0].pause();
        }

    });

});
