// Slider 
jQuery(document).ready(function ($) {
  $(".rise-most-popular-product-container").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: $("#rise-most-popular-prev-arrow"),
    nextArrow: $("#rise-most-popular-next-arrow"),
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".rise-single-product-preview-image").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: $("#rise-single-product-prev-arrow"),
    nextArrow: $("#rise-single-product-next-arrow"),
    asNavFor: ".rise-single-product-thumbs",
    adaptiveHeight: true,
  });

  // Initialize the thumbnails slider
  $(".rise-single-product-thumbs").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    asNavFor: ".rise-single-product-preview-image",
    focusOnSelect: true,
    infinite: false,
  });
});

// Cart Opening
$(document).ready(function () {
  $(".rise-main-header-cart").on("click", function () {
    const $cartPos = $(".rise-cart-pos");
    if ($cartPos.hasClass("active")) {
      $cartPos.removeClass("active").addClass("fade-out");
      setTimeout(() => {
        $cartPos.css("display", "none").removeClass("fade-out");
      }, 300);
    } else {
      $cartPos.css("display", "block");
      setTimeout(() => {
        $cartPos.addClass("active");
      }, 10);
    }
  });

  // Close cart on close icon click
  $(".rise-cart-close-icon").on("click", function () {
    const $cartPos = $(".rise-cart-pos");
    $cartPos.removeClass("active").addClass("fade-out");
    setTimeout(() => {
      $cartPos.css("display", "none").removeClass("fade-out");
    }, 300);
  });
});

// Hamburger or mobile menu
$(document).ready(function () {
  $(".rise-main-header-hamburger").on("click", function () {
    $(".rise-mobile-menu").addClass("active");
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest(".rise-mobile-menu-area").length &&
      !$(e.target).closest(".rise-main-header-hamburger").length
    ) {
      $(".rise-mobile-menu").removeClass("active");
    }
  });

  $(".rise-mobile-menu-close-icon").on('click', function(e){
    $(".rise-mobile-menu").removeClass("active");
  });
});

$(document).ready(function () {
  $('.dropdown > a').on('click', function (e) {
      e.preventDefault(); 
      const $parent = $(this).parent(); 
      const $dropdown = $parent.find('.rise-main-header-dropdown');

      $dropdown.toggleClass('active');

      $(this).find('.icon').toggleClass('rotate');

      $('.dropdown .rise-main-header-dropdown').not($dropdown).removeClass('active');
      $('.dropdown .icon').not($(this).find('.icon')).removeClass('rotate');
  });
});
