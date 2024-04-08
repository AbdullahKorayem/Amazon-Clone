// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Slider from '../Slider/slider';
import { ProductCard } from './../Cards/ProductCard';
import { useContext } from 'react';
import { langContext } from '../../contexts/lang';
import { allProductsContext } from '../../contexts/allProducts';
import { useTranslation } from 'react-i18next';
import { Spinner } from 'flowbite-react';

const ProductSlider = ({ subCategoryId, title }) => {
  const { i18n, t } = useTranslation();
  const activeLocale = i18n.resolvedLanguage;
  const { allProducts } = useContext(allProductsContext);
  const { lang } = useContext(langContext);
  const result = allProducts.filter(
    product => product.subCategoryId === subCategoryId
  );

  return (
    <>
      <Slider title={t(title)}>
        <Swiper
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
          }}
        >
          {result.map(slide => {
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
