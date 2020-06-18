$(document).ready(function() {
    //Select
    $('.selectpicker').selectpicker();

    //Header top
    var clon= $('header .head-up').clone();
    var clon2= $('header .head-up').clone();
    $(clon2).find('.sol').remove();
    $(clon).find('.sag').remove();
    $('header .head-down .collapse').append(clon);
    $('header .head-down .collapse').prepend(clon2);

    //slider-popular
    $('#slider-popular .slideshow').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots:false,
        draggable:false,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    //slider-customer
    $('#slider-customer .slideshow').slick({
        centerPadding: '0',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:false,
        draggable:false,
        responsive:[
        {
            breakpoint:992,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint:768,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    });

});
