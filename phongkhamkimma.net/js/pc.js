

$('ul.box-left li').hover(function(){
	var box = $(this).attr('box');
	var data = $(this).attr('data-hover');
	$('.box-inner').each(function(){
		$(this).removeClass('active');
	});

	$('#'+box).addClass('active');
	$('li').each(function(){
		$(this).removeClass('active-box');
	});

	$('#'+data).addClass('active-box');
});


