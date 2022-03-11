$(".header .close-btn").click(function(){
    $(".header .nav").animate({
        right: "-85%"
    } ,300)
})
$(".header .menu-btn").click(function(){
    $(".header .nav").animate({
        right: 0
    } ,300)
})
