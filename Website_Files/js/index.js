$( document ).ready(function() {
    $('.nav-button').click(function(){
       $('.main-nav').toggle();
        $('.nav-button i.fa').toggleClass("fa-bars");
        $('.nav-button i.fa').toggleClass("fa-times");
    });

});