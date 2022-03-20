$(".header .close-btn").click(function () {
  $(".header .nav").animate(
    {
      right: "-85%",
    },
    300
  );
});
$(".header .menu-btn").click(function () {
  $(".header .nav").animate(
    {
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

$(".counter").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },

    {
      duration: 3000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
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

