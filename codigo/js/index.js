$( document ).ready(function() {
	// $('.carousel1').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.slider-for',
	// 	dots: true,
	// 	focusOnSelect: true
	// });

	// $('.carousel2').slick({
	// 	infinite: false,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 3
	// });
	$(".carousel1").slick({
		autoplay:true,
		autoplaySpeed:10000,
		speed:600,
		slidesToShow:1,
		slidesToScroll:1,
		pauseOnHover:false,
		dots:true,
		pauseOnDotsHover:true,
		cssEase:'linear',
		draggable:false,
		prevArrow:'<button class="PrevArrow"></button>',
		nextArrow:'<button class="NextArrow"></button>'
	});

	$(".carousel2").slick({
		autoplay:true,
		autoplaySpeed:10000,
		speed:600,
		slidesToShow:1,
		slidesToScroll:1,
		pauseOnHover:false,
		dots:true,
		pauseOnDotsHover:true,
		cssEase:'linear',
		draggable:false,
		prevArrow:'<button class="PrevArrow"></button>',
		nextArrow:'<button class="NextArrow"></button>'
	});
});

