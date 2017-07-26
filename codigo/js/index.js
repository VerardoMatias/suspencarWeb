$( document ).ready(function() {
    $('.carousel1').slick({
    	slidesToShow: 3,
    	slidesToScroll: 1,
    	asNavFor: '.slider-for',
    	dots: true,
    	focusOnSelect: true
    });

    $('.carousel2').slick({
    	infinite: false,
    	slidesToShow: 3,
    	slidesToScroll: 3
    });
});

