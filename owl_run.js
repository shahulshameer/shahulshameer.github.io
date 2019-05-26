$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:1500,
        autoplaySpeed:1500,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                autoplayHoverPause:false
            },
            550:{
                items:2
            },
            950:{
                items:3
            }
            
        }
    });
    

        });