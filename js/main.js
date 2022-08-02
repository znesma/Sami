//slow down the speed of header video
document.querySelector('video').playbackRate = 0.5;

$(function (){
    // navbar
    $(window).scroll(function(){
        // console.log($(window).scrollTop()); 
        if($(window).scrollTop() >= 500){

            $(".navbar").addClass("navbar-bg");
            $(".navbar-brand img").attr("src" , "img/الشركة_السعودية_للصناعات_العسكرية.png").width("20%");
            $(".nav-item a").css('color' ,' #777');
        }else{

            $(".navbar").removeClass("navbar-bg");
            $(".navbar-brand img").attr("src" , "img/Slogo.png").width("60%");
            $(".nav-item a").css('color' ,' #fff');

        }
    })

    // add active class by JQuery

    $('.navbar ul li ').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

    });

    //works
    $(".works .box").hover(function(){
        $(this).addClass("box-text")
    },function(){
        $(this).removeClass("box-text")

    },500)

    // counter
    $(".counter").counterUp({
        delay: 40,
        time: 2000
    });

    // Scroll to top
    $(window).scroll(function () {

        if($(window).scrollTop() >= 1000) {

            $('.scroll').fadeIn(200);
        } else {
            $('.scroll').fadeOut(2000);
        }

    });

    // click on the scroll button

    $('.scroll').on("click", function (e) {
        e.preventDefault();

        $('html, body').animate({

            scrollTop:0
            
        }, 500);
        
        $('.navbar ul li').removeClass('active');
        $('.navbar .home').addClass('active');
        
    });


})