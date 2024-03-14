import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Slider = ({ children, title }) => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">{title}</div>
      {children}
    </div>
  );
};

export default Slider;
