$(document).ready(function(){
    $('.properties-container').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: $('#next'),
        prevArrow: $('#previous'),
    });
});

$(document).ready(function(){
    $('.clients').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('#rightArrow'),
        prevArrow: $('#leftArrow'),
    });
});