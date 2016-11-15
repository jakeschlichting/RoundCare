$( document ).ready(function() {
    $('.nav-button').click(function(){
       $('.main-nav').toggle();
        $('.nav-button i.fa').toggleClass("fa-bars");
        $('.nav-button i.fa').toggleClass("fa-times");
        $('header').toggleClass("dark");
    });

    if ($(window).width() > 768) {
        $('.icon').hover(function(){
            var item = $(this).attr("id");
            $('.' + item).toggle();
            $('.hover-instruct').toggle();
        })
    }
    else {

    }

});