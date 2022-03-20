$(".header .close-btn").click(function() {
    $(".header .nav").animate({
            right: "-85%",
        },
        300
    );
});
$(".header .menu-btn").click(function() {
    $(".header .nav").animate({
            right: 0,
        },
        300
    );
});

$(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    animateOut: "slideOutDown",
    animateIn: "flipInX",
    lazyLoad: true,

    autoplay: true,
    responsive: {
        0: {
            items: 1,
        },
        480: {
            items: 1,
        },
        768: {
            items: 2,
        },

        1000: {
            items: 3,
        },
        1200: {
            items: 4,
        },
        1600: {
            items: 5,
        },
        1800: {
            items: 6,
        },
    },
});

$(".counter").each(function() {
    var $this = $(this),
        countTo = $this.attr("data-count");

    $({ countNum: $this.text() }).animate({
            countNum: countTo,
        },

        {
            duration: 3000,
            easing: "linear",
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            },
        }
    );
});
var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});

$(".wrapper-programs").click(function() {
    if (window.innerWidth >= 750) {
        $(".wrapper-programs").removeClass("expanded");
        $(".wrapper-programs").each(function() {
            if ($(this).attr("data-clicked") === "true ") {
                $(this).addClass("rightpos")
                index1 = $(this).index();
                setTimeout(function() {
                    $(".wrapper-programs:nth-child(" + (index1 + 1) + ")").removeClass("rightpos")
                }, 1000)
            }
        })
        $(".wrapper-programs").attr("data-clicked", "false ");
        $(this).addClass("expanded")
        $(this).attr("data-clicked", "true ");
        clearTimeout(timer01);
        clearTimeout(timer02);
        clearTimeout(timer03);
        clearTimeout(timer04);
        loop.check_index = $(this).index();
        loop();

    }
})
let timer01;
let timer02;
let timer03;
let timer04

function loop() {
    if (window.innerWidth >= 750) {
        $(".wrapper-programs").each(function() {
            if ($(this).attr("data-clicked") === "true ") {
                check_index = $(this).index();
            }
        })

        $(".wrapper-programs").each(function() {

            if ($(this).attr("data-clicked") === "true " && check_index != 8) {
                let ind = $(this).index() + 2
                const runTimer02 = () => {
                    timer02 = window.setTimeout(function() {

                        $(".wrapper-programs").removeClass("expanded")
                        $(".wrapper-programs:nth-child(" + (ind - 1) + ")").addClass("rightpos")
                        setTimeout(function() {
                            $(".wrapper-programs:nth-child(" + (ind - 1) + ")").removeClass("rightpos")
                        }, 1000)
                        $(".wrapper-programs:nth-child(" + ind + ")").addClass("expanded")
                        $(".wrapper-programs:nth-child(" + (ind - 1) + ")").attr("data-clicked", "false ")
                        $(".wrapper-programs:nth-child(" + ind + ")").attr("data-clicked", "true ")

                        timer04 = setTimeout(loop, 5000)

                    }, 5000);
                }
                runTimer02()

            } else if ($(this).attr("data-clicked") === "true " && check_index === 8) {


                const runTimer01 = () => {
                    timer01 = window.setTimeout(function() {
                        $(".wrapper-programs").removeClass("expanded")
                        $(".wrapper-programs:nth-child(9)").addClass("rightpos")
                        setTimeout(function() {
                            $(".wrapper-programs:nth-child(9)").removeClass("rightpos")
                        }, 1000)
                        $(".wrapper-programs:nth-child(1)").addClass("expanded")
                        $(".wrapper-programs:nth-child(9)").attr("data-clicked", "false ")
                        $(".wrapper-programs:nth-child(1)").attr("data-clicked", "true ")

                        timer03 = setTimeout(loop, 5000)
                    }, 5000);
                }
                runTimer01()
            }
        })
    }
}
loop()