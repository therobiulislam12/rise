jQuery(document).ready(function ($) {
  $(".rise-shop-product-container").slick({
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

  // Initialize the main preview image slider
  $(".rise-single-product-preview-image").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Add arrows if needed
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: ".rise-single-product-thumbs", // Sync with thumbnails
    fade: true, // Optional, for a smooth fade effect
  });

  // Initialize the thumbnails slider
  $(".rise-single-product-thumbs").slick({
    dots: true,
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    verticalSwiping: true,
    arrows: true,
    asNavFor: ".rise-single-product-preview-image", // Sync with main slider
    focusOnSelect: true

    // slidesToShow: 4, 
    // slidesToScroll: 1, 
    // vertical: true, 
    // focusOnSelect: true, 
    // arrows: true, 
    // infinite: false, 
  });
});
