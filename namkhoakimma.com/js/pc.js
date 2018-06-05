

$('.list-avt img').hover(function(){
	var data = $(this).attr('data-hover');
	$('.box-bn').each(function(){
		$(this).removeClass('active-box');
	})
	$('#'+data).addClass('active-box');
});


$('.box-tab-pp ul li').hover(function(){
	var box = $(this).attr('box');
	$('.box-inner').each(function(){
		$(this).removeClass('active-box');
	});

	$('#'+box).addClass('active-box');
});


$(window).scroll(function () {
    var scroll = $('header#header').height()+ $('nav#nav-bar').height();
    if ($(window).scrollTop() > scroll) {
        $("header#scroll").css({"display": "block","z-index": "2"});
    } else {
        $("header#scroll").css({"display": "none", "top": "inherit"});
    }
});

// detail

