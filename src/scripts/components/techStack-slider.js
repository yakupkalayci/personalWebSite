import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function techStackSlider() {
  const swiper = new Swiper(".techStack-slider", {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
  });
}
