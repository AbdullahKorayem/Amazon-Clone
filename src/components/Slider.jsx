// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="slider.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider3.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
