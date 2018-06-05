var Main={
	open_menu:function(open){
		if(open==0){
			$(".navbar-primary,.navbar-right").show();
			$(".toogle-menu,.navbar-right").attr("onclick","Main.open_menu(1)");}
			else{
				$(".navbar-primary,.navbar-right").hide();
				$(".toogle-menu,.navbar-right").attr("onclick","Main.open_menu(0)");
			}
		},
	}



$(window).scroll(function () {
	var scroll = $('header#header-mb').height()+ $('header#header-mb__time').height();
	if ($(window).scrollTop() > scroll) {
		$("header#header-scroll-mb").css({"display": "block","z-index": "2"});

	} else {
		$("header#header-scroll-mb").css({"display": "none", "top": "inherit"});
	}
});