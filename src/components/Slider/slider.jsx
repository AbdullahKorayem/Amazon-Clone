import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Shop by Category</div>
      <Swiper
        slidesPerView={5}
        modules={[Navigation]}
        spaceBetween={10}
        navigation={true}
      >
        <SwiperSlide className="cursor-pointer">
          <img src={'category_0.jpg'} alt="Deal category" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <img src={'category_1.jpg'} alt="Amazon category" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <img src={'category_2.jpg'} alt="Fashion category" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <img src={'category_2.jpg'} alt="Fashion category" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <img src={'category_3.jpg'} alt="Computers category" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <img src={'category_4.jpg'} alt="Home category" />
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <img src={'category_5.jpg'} alt="Mobiles category" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
