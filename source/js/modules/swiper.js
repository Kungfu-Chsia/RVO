const initSwiper = function () {

  const swiper = new Swiper('.clients__swiper', {

    navigation: {
      nextEl: '.clients__button-next',
      prevEl: '.clients__button-prev',
    },

    // отключение скролла
    simulateTouch: false,

    // Бесконечная прокрутка
    loop: true,

    breakpoints: {
      320: {
        // Количество слайдов на странице
        slidesPerView: 1,
        // порядковый номер первого слайда
        initialSlide: 2,
      },
      768: {
        slidesPerView: 2,
        // Отступ между слайдами
        spaceBetween: 30,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
        initialSlide: 0,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 40,
        initialSlide: 0,
      },
    },
  });

  // const swiperFeedback = new Swiper('.feedback__swiper', {

  //   navigation: {
  //     prevEl: '.feedback__button-prev',
  //     nextEl: '.feedback__button-next',
  //   },

  //   loop: false,
  //   simulateTouch: false,
  //   slidesPerView: 1,

  // });

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

  // gamesBtn.addEventListener('keydown', function (evt) {
  //   if (!evt.shiftKey && evt.key === 'Tab') {
  //     evt.preventDefault();
  //     clientsButtonPrev.focus();
  //     console.log('gamesBtn',clientsButtonPrev);
  //   }
  // });


  clientsButtonPrev.addEventListener('keydown', function (evt) {
    if (evt.shiftKey && evt.key === 'Tab') {
      evt.preventDefault();
      gamesBtn.focus();
      console.log('clientsButtonPrev',gamesBtn);
    }
  });


  clientsButtonNext.addEventListener('keydown', function (evt) {
    if (!evt.shiftKey && evt.key === 'Tab') {
      evt.preventDefault();
      firstSlide.focus();
      imageSlider.slideTo(firstSlide.index, 800);
      console.log('clientsButtonNext',firstSlide);
    }
  });


  firstSlide.addEventListener('keydown', function (evt) {
    if (evt.shiftKey && evt.key === 'Tab') {
      evt.preventDefault();
      clientsButtonNext.focus();
      console.log('firstSlide',clientsButtonNext);
    }
  });


  lastSlide.addEventListener('keydown', function (evt) {
    if (!evt.shiftKey && evt.key === 'Tab') {
      evt.preventDefault();
      promoButton.focus();
      console.log('lastSlide',promoButton);
    }

    // promoButton.addEventListener('keydown', function (event) {
    //   if (event.shiftKey && event.key === 'Tab') {
    //     event.preventDefault();
    //     lastSlide.focus();
    //     console.log('promoButton',lastSlide);
    //   }
    // });
  });

};

export default initSwiper;
