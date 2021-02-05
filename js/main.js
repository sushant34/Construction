$('.project-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayHoverPause:true,
    responsiveClass:true,

    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
            
            

        },
        1200:{
            items:3
            
        }
    }
})
$('.brand-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
            

        },
        1000:{
            items:5
        }
    }
})
$('.testomonial-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayHoverPause:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.banner-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayHoverPause:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(window).scroll(function(){
    if($(this).scrollTop()>150)
    {
        $(".scroll").show();
    }
    else{

        $(".scroll").hide();
    }

})
function myFunction(x) {
  x.classList.toggle("change");
}

AOS.init({
    delay:100,
    offset:200,
   
});

$(".plus").click(function(){
    $(".dropdown-menu").css("display", "block");
});




