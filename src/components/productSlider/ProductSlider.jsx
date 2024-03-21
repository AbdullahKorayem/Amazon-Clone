// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Slider from '../Slider/slider';
import { useEffect, useState } from 'react';
import { getProductsBySubCategoryId } from '../../firestore/firestore';
import { ProductCard } from './../Cards/ProductCard';
import { useContext } from 'react';
import { langContext } from '../../contexts/lang';

const ProductSlider = () => {
  const [data, setData] = useState([]);
  const { lang } = useContext(langContext);

  useEffect(() => {
    async function fetch() {
      const res = await getProductsBySubCategoryId('656e34938ab097079167133d');
      setData(res);
    }
    fetch();
  }, []);
  return (
    <>
      <Slider title="Mobiles">
        <Swiper
          slidesPerView={5}
          modules={[Navigation]}
          spaceBetween={0}
          navigation={true}
        >
          {data.map(slide => {
            return (
              <SwiperSlide className="cursor-pointer" key={slide.id}>
                <ProductCard
                  id={slide.id}
                  name={slide[lang].title}
                  image={slide.thumbnail}
                  description={slide[lang].description}
                  price={slide.price}
                  rate={slide.rating}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Slider>
    </>
  );
};
export default ProductSlider;
