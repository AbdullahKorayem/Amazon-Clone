// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Slider from "../Slider/slider";
import { useEffect, useState } from "react";
import {
  getProductsByCategoryId,
  getProductsBySubCategoryId,
} from "../../firestore/firestore";
import { ProductCard } from "./../Cards/ProductCard";
import { useContext } from "react";
import { langContext } from "../../contexts/lang";
import { Link } from "react-router-dom";
const ProductSliderVthree = ({ CategoryId, title }) => {
  const [data, setData] = useState([]);
  const { lang } = useContext(langContext);

  useEffect(() => {
    async function fetch() {
      const res = await getProductsByCategoryId(CategoryId);
      setData(res);
    }
    fetch();
  }, []);
  return (
    <>
      <Slider title={title}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}>
          {data.map((slide) => {
            return (
              <SwiperSlide className="cursor-pointer" key={slide.id}>
                {/* <Link to={"/office-supplies"}> */}
                  <img className=" h-56 w-52 " src={slide.thumbnail} alt="" />
                {/* </Link> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Slider>
    </>
  );
};
export default ProductSliderVthree;
