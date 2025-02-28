$(function(){
	$('.navigation-btn').on('click', function(){
		$('.navigation ul').slideToggle();
	});	


	$('.slider').slick({
		infinite: true,
		arrows: false,
		dots: true,
		autoplay: true,
		  autoplaySpeed: 4000,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear'
	});

	$('.map-content').on('click', function(){
		$('.map-container').toggleClass('open');
	});

	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
});

