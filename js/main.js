
$(function (){
    // navbar
    $(window).scroll(function(){
        // console.log($(window).scrollTop()); 
        if($(window).scrollTop() >= 300){
            $(".navbar").addClass("navbar-bg");
            $(".nav-item a").css('color' ,' #777');
        }else{
            $(".navbar").removeClass("navbar-bg");
            $(".nav-item a").css('color' ,' #fff')
        }
    })

    //works
    $(".works .box").hover(function(){
        $(this).addClass("box-text")
    },function(){
        $(this).removeClass("box-text")

    })

   // counter
   $(".counter").counterUp({
    delay: 20,
    time: 1000
});
})