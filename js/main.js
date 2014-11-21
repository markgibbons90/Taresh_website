//MOBILE MENU
$(document).ready(function(){
	$('#handheld-menu').hide();

	$('#menu-button').click(function(){
		$('#handheld-menu').toggle(200);
	});

	$(window).resize(function(){
		if ($(this).width() > 767) {
			$('#handheld-menu').hide();
		}
	});
});

//SCROLLING ON PRODUCTS PAGE
$(document).ready(function(){
    //SMOOTH SCROLLING
    $('.btn-group a').click(function(e){
        e.preventDefault();

        var href = $(this).attr('href');

		$(href).animatescroll({
		'scrollSpeed': 600,
		'easing': 'easeInQuad',
		'padding': 0
		});
	});
	//SCROLL TO TOP
	$('.go-top').click(function(e){
		e.preventDefault();
		$('body, html').animate({ scrollTop: 0});
	})
});

//INSERT EMAIL
var username = "sales";
var hostname = "taresh.com";
var linktext = username + "@" + hostname ;
document.getElementById('footer-email').innerHTML = linktext;
