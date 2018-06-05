$(window).scroll(function () {
    var scroll = $('header#header').height()+ $('top-bar').height();
    if ($(window).scrollTop() > scroll) {
        $("header#header").css({"position": "fixed","z-index": "2"});
    } else {
        $("header#header").css({"position": "inherit"});
    }
});