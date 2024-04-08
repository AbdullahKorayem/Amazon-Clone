// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Slider from '../Slider/slider';
import { useContext } from 'react';
import { allProductsContext } from '../../contexts/allProducts';
import { Link } from 'react-router-dom';
const ProductSliderVthree = ({ CategoryId, title, link }) => {
  const { allProducts } = useContext(allProductsContext);

  const result = allProducts.filter(product => {
    return product.categoryId === CategoryId;
  });
  return (
    <>
      <Slider title={title}>
        <Swiper
          className="mx-6"
          modules={[Navigation]}
          spaceBetween={0}
          navigation={true}
          dir="ltr"
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {result.map(slide => {
            return (
              <SwiperSlide className="cursor-pointer" key={slide.id}>
                <Link to={link}>
                  <img className=" h-56 w-52 " src={slide.thumbnail} alt="" />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Slider>
    </>
  );
};
export default ProductSliderVthree;
