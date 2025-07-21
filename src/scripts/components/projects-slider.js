import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function projectSlider() {

  const swiper = new Swiper(".projects-slider", {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 12,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1.5
        },
        922: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3
        }
    }
  });
}
