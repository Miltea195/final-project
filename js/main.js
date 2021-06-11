$(document).ready(function(){
    $('.team__slider').slick({
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: $('.arrow-prev'),
        nextArrow: $('.arrow-next'),
        slidesToShow: 3,
        slidesToScroll: 1,
        waitForAnimate: false,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // pauseOnFocus: true,
        // pauseOnHover: true,
    });
})
$(document).ready(function(){
    $('.hero__slider').slick({
        infinite: false,
        dots: true,
        arrows: false,
        // appendDots:$('.numbs__dots'),
        slidesToShow: 1,
        slidesToScroll: 1,
    });
})
$(function() {

    // scrollTop
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1800);
        return false;
    });
    

    // Collapse
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    })
})
var acc = document.getElementsByClassName("accordion");
var i;