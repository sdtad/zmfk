$(function(){

$('.menu-burger').on('click', function(){
	$('.menu ul').slideToggle();
});		

$('.slider__container').slick({
	infinite: true,
	arrows: false,
	dots: false,
	autoplay: true,
  	autoplaySpeed: 3000,
  	speed: 1000,
  	fade: true,
  	cssEase: 'linear'
});

});

