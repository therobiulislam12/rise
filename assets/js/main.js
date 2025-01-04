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
