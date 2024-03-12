// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import "swiper/css/effect-coverflow"; // Add this line if you want to use the coverflow effect

const HomeSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        loop={true}
        pagination={false}
        navigation={true}
        modules={[Navigation]}
        className="h-96 w-[100%]">
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/51o1bUHGeSL._SX1500_.jpg"
            className=" w-[100%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/81aB2eZU4uL._SX3000_.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/71BilrW6qXL._SX3000_.jpg"
            className="w-[100%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://m.media-amazon.com/images/I/71VArHmQTFL._SX3000_.jpg" />
        </SwiperSlide>
      </Swiper>
      <div className=" h-72 bg-gradient-to-b from-red-800"></div>
    </>
  );
};

export default HomeSlider;
