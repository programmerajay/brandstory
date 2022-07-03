var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView:4,
    loop:true,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
        1280: {
            slidesPerView:4,
        }

    }

    
  });