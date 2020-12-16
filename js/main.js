$(function(){
	$('.slider__box').slick({
		prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-arrow.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-arrow.png"></button>',
		responsive: [
			{
				breakpoint: 700,
				settings: {
					arrows: false,
				}
			}
		]
	});


	$('.footer__slider').slick({
		arrows: false,
		dots: true,
		infinite: false,
		centerMode: true,
		centerPadding: '26%',
		responsive: [
			{
				breakpoint: 700,
				settings: {
					// centerPadding: '0',
				}
			}
		]
	});
});