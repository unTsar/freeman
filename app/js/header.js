$( document ).ready(function() {
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $("#menu").toggleClass("hidden");
        $("body").toggleClass("fixed");
        
        $(".dropdown").children("ul").slideUp(250);
        $(".dropdown").removeClass("opened")
    });
    $(".dropdown").click(function(){
        $(this).children("ul").slideToggle(250);
        $(this).toggleClass("opened");
        $(".dropdown").not(this).children("ul").slideUp(250);
        $(".dropdown").not(this).removeClass("opened")
    });
});