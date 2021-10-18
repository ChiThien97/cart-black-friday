import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.css';

export const swiper = {
  data: {},

  methods: {
    additionalProductsSlidingMobile() {
      new Swiper('.box-products', {
        slidesPerView: 2.3,
        spaceBetween: 10,
        breakpoints: {
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 10,
          },
        },
      });
    },
  }
}
