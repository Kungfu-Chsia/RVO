const initSwiper = function () {

  const swiper = new Swiper('.clients__swiper', {

    navigation: {
      nextEl: '.clients__button-next',
      prevEl: '.clients__button-prev',
    },

    // отключение скролла
    simulateTouch: false,

    // Бесконечная прокрутка
    loop: false,

    breakpoints: {
      320: {
        // Количество слайдов на странице
        slidesPerView: 1,
        // порядковый номер первого слайда
        initialSlide: 0,
      },
      768: {
        slidesPerView: 2,
        // Отступ между слайдами
        // spaceBetween: 30,
        initialSlide: 1,
      },
      1200: {
        slidesPerView: 3,
        // spaceBetween: 30,
        initialSlide: 1,
      },
      1366: {
        slidesPerView: 3,
        // spaceBetween: 40,
        initialSlide: 1,
      },
    },
  });

  const swiperTeam = new Swiper('.team__swiper', {

    navigation: {
      prevEl: '.team__button-prev',
      nextEl: '.team__button-next',
    },

    loop: false,
    simulateTouch: false,
    slidesPerView: 4,

    breakpoints: {
      320: {
        // Количество слайдов на странице
        slidesPerView: 1,
        // порядковый номер первого слайда
        initialSlide: 1,
      },
      768: {
        slidesPerView: 2,
        // Отступ между слайдами
        // spaceBetween: 30,
        initialSlide: 1,
      },
      1200: {
        slidesPerView: 3,
        // spaceBetween: 40,
        initialSlide: 1,
      },
      1366: {
        slidesPerView: 4,
        // spaceBetween: 40,
        initialSlide: 1,
      },
    },
  });

  const imageSlider = document.querySelector('.swiper').swiper;
  const clientsButtonPrev = document.querySelector('.clients__button-prev');
  const clientsButtonNext = document.querySelector('.clients__button-next');
  // const gamesBtn = document.querySelector('.games__btn');
  // const promoButton = document.querySelector('.promo__unlim-link');
  const swiperSlides = document.querySelectorAll('.clients__swiper-slide');

  const firstSlide = imageSlider.slides[0];
  const lastSlide = imageSlider.slides[3];

  swiperSlides.forEach(function (swiperSlide) {
    swiperSlide.tabIndex = '0';
  });

  clientsButtonNext.addEventListener('click', function (evt) {
    if (imageSlider.isEnd) {
    //  console.log("сработал end", imageSlider.isEnd);
    //  evt.preventDefault();
    //firstSlide.focus();
    // imageSlider.slideTo(firstSlide.index, 800);

    }
  });

};

export default initSwiper;
