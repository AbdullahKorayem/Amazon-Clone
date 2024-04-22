import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import { HomeCardOneImage } from '../../components/Cards/HomeCards';
import Slider from '../../components/Slider/slider';
import ProductSlider from '../../components/productSlider/ProductSlider';
import { Link } from 'react-router-dom';
import ProductSliderVthree from '../../components/productSlider/ProductSliderV3';
import PagePlaceholder from '../../components/Placeholder/PagePlaceholder';
import { useContext, useEffect, useState } from 'react';
import { allCategoriesContext } from '../../contexts/allCategories';
import { getAllCategories } from '../../firestore/firestore';
import { Spinner } from 'flowbite-react';
import { useTranslation } from 'react-i18next';
import ServiceUnavailable from './../Service-Unavailable/ServiceUnavailable';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/slices/User';
import { dirContext } from '../../contexts/direction';

const Home = () => {
  const { categories, setCategories } = useContext(allCategoriesContext);
  const { dir } = useContext(dirContext);
  const [isLoading, setIsLoading] = useState(true);
  const { i18n, t } = useTranslation();
  const activeLocale = i18n.resolvedLanguage;
  const dispatch = useDispatch();
  const User = localStorage.getItem('UserUid');
  useEffect(() => {
    dispatch(fetchUser(User));
    document.title = 'Amazon : Home';
    setIsLoading(true);
    async function fetch() {
      try {
        if (categories.length === 0) {
          const Allcategries = await getAllCategories();
          setCategories(Allcategries);
          if (Allcategries.length === 0) {
            setTimeout(() => {
              setIsLoading(false);
            }, 1000);
          }
        } else {
          setIsLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetch();
  }, []);
  return (
    <div
      className="min-w-[320px] md:min-w-[750px] lg:min-w-[1000px] max-w-full"
      style={{ backgroundColor: '#E3E6E6' }}
    >
      {isLoading ? (
        <PagePlaceholder />
      ) : (
        <>
          <HomeSlider />
          <div className="  pl-4 md:pl-7 pr-4 md:pr-7">
            <div className=" grid gap-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 min-[400px]:grid-cols-1  -mt-80">
              <Link to={`/${categories[0]?.link}`}>
                <HomeCardOneImage title={categories[0]?.link}>
                  {!categories[0] && (
                    <div className="flex justify-center items-center">
                      <Spinner color="failure" />
                    </div>
                  )}
                  {categories[0] && (
                    <img
                      className=" h-72 w-72"
                      src={categories[0]?.thumbnails}
                      alt={categories[0]?.name}
                    />
                  )}
                </HomeCardOneImage>
              </Link>
              <Link to={`/${categories[1]?.link}`}>
                <HomeCardOneImage title={categories[1]?.link}>
                  {!categories[1] && (
                    <div className="flex justify-center items-center">
                      <Spinner color="failure" />
                    </div>
                  )}
                  {categories[1] && (
                    <img
                      className=" h-72 w-72"
                      src={categories[1]?.thumbnails}
                      alt={categories[1]?.link}
                    />
                  )}
                </HomeCardOneImage>
              </Link>
              <Link to={`/${categories[2]?.link}`}>
                <HomeCardOneImage title={categories[2]?.link}>
                  {!categories[2] && (
                    <div className="flex justify-center items-center">
                      <Spinner color="failure" />
                    </div>
                  )}
                  {categories[2] && (
                    <img
                      className=" h-72 w-72"
                      src={categories[2]?.thumbnails}
                      alt={categories[2]?.link}
                    />
                  )}
                </HomeCardOneImage>
              </Link>
              <Link
                to={`/${categories[3]?.link}`}
                className="lg:hidden xl:block"
              >
                <HomeCardOneImage title={categories[3]?.link}>
                  {!categories[3] && (
                    <div className="flex justify-center items-center">
                      <Spinner color="failure" />
                    </div>
                  )}
                  {categories[3] && (
                    <img
                      className=" h-72 w-72"
                      src={categories[3]?.thumbnails}
                      alt={categories[3]?.link}
                    />
                  )}
                </HomeCardOneImage>
              </Link>
            </div>
            <div className=" grid gap-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 min-[400px]:grid-cols-1  ">
              <Link to={`/${categories[4]?.link}`}>
                <HomeCardOneImage title="laptops">
                  {!categories[4] && (
                    <div className="flex justify-center items-center">
                      <Spinner color="failure" />
                    </div>
                  )}
                  {categories[4] && (
                    <img
                      className=" h-72 w-72"
                      src={categories[4]?.thumbnails}
                      alt={categories[4]?.link}
                    />
                  )}
                </HomeCardOneImage>
              </Link>
              <Link to={`/${categories[5]?.link}`}>
                <HomeCardOneImage title="headphones">
                  {!categories[5] && (
                    <div className="flex justify-center items-center">
                      <Spinner color="failure" />
                    </div>
                  )}
                  {categories[5] && (
                    <img
                      className=" h-72 w-72"
                      src={categories[5]?.thumbnails}
                      alt={categories[5]?.link}
                    />
                  )}
                </HomeCardOneImage>
              </Link>
              <Link to={`/${categories[7]?.link}`}>
                <HomeCardOneImage title={categories[7]?.link}>
                  {!categories[7] && (
                    <div className="flex justify-center items-center">
                      <Spinner color="failure" />
                    </div>
                  )}
                  {categories[7] && (
                    <img
                      className=" h-72 w-72"
                      src={categories[7]?.thumbnails}
                      alt={categories[7]?.link}
                    />
                  )}
                </HomeCardOneImage>
              </Link>
              <Link
                to={`/${categories[6]?.link}`}
                className="lg:hidden xl:block"
              >
                <HomeCardOneImage title={categories[6]?.link}>
                  {!categories[6] && (
                    <div className="flex justify-center items-center">
                      <Spinner color="failure" />
                    </div>
                  )}
                  {categories[6] && (
                    <img
                      className=" h-72 w-72"
                      src={categories[6]?.thumbnails}
                      alt={categories[6]?.link}
                    />
                  )}
                </HomeCardOneImage>
              </Link>
            </div>
            <Slider title="discover_amazon">
              <Swiper
                className="mx-6"
                // slidesPerView={4}
                modules={[Navigation]}
                spaceBetween={0}
                navigation={true}
                dir="rtl"
                breakpoints={{
                  400: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  700: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  750: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                  800: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                  900: {
                    slidesPerView: 5,
                    spaceBetween: 25,
                  },
                  1000: {
                    slidesPerView: 6,
                    spaceBetween: 25,
                  },
                }}
              >
                <SwiperSlide className="cursor-pointer">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886076_200x200_1X._CB577290887_.jpg"
                    alt="Deal category"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886082_200x200_1X._CB577290887_.jpg"
                    alt="Deal category"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img
                    src={
                      'https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886075_200x200_1X._CB577290887_.jpg'
                    }
                    alt="Deal category"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img
                    src={
                      'https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886064_200x200_1X._CB577290887_.jpg'
                    }
                    alt="Amazon category"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img
                    src={
                      'https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5900023_200x200_1X._CB577651073_.jpg'
                    }
                    alt="Computers category"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img
                    src={
                      'https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886066_200x200_1X._CB577290887_.jpg'
                    }
                    alt="Mobiles category"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img
                    src={
                      'https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886069_200x200_1X._CB577290887_.jpg'
                    }
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img
                    src={
                      'https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886073_200x200_1X._CB577290887_.jpg'
                    }
                    alt="Mobiles"
                  />
                </SwiperSlide>
                <SwiperSlide className="cursor-pointer">
                  <img
                    src={
                      'https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Outbound/XCM_Manual_1616427_5886071_200x200_1X._CB577290887_.jpg'
                    }
                    alt="Mobiles category"
                  />
                </SwiperSlide>
              </Swiper>
            </Slider>

            <ProductSliderVthree
              CategoryId={'6562f3891cf9fca552f8c5ac'}
              title={'shop_office_supplies'}
              link={'/office-supplies'}
            />

            <ProductSliderVthree
              CategoryId={'65527c8c376a52ea210d970a'}
              title={'personal_care_essentials'}
              link={'/personal-care'}
            />

            <div className=" grid gap-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 min-[400px]:grid-cols-2 sm:grid-cols-1 ">
              <Link to={`/${categories[8]?.link}`}>
                <HomeCardOneImage title="moblie">
                  {!categories[8] && (
                    <div className="flex justify-center items-center">
                      <Spinner color="failure" />
                    </div>
                  )}
                  {categories[8] && (
                    <img
                      className=" h-72 w-72"
                      src={categories[8]?.thumbnails}
                      alt={categories[8]?.link}
                    />
                  )}
                </HomeCardOneImage>
              </Link>
              <Link to={`/${categories[1]?.link}`}>
                <HomeCardOneImage title={categories[1]?.link}>
                  {!categories[1] && (
                    <div className="flex justify-center items-center">
                      <Spinner color="failure" />
                    </div>
                  )}
                  {categories[1] && (
                    <img
                      className=" h-72 w-72"
                      src={categories[1]?.thumbnails}
                      alt={categories[1]?.link}
                    />
                  )}
                </HomeCardOneImage>
              </Link>
              <Link to={`/${categories[6]?.link}`}>
                <HomeCardOneImage title={categories[6]?.link}>
                  {!categories[6] && (
                    <div className="flex justify-center items-center">
                      <Spinner color="failure" />
                    </div>
                  )}
                  {categories[6] && (
                    <img
                      className=" h-72 w-72"
                      src={categories[6]?.thumbnails}
                      alt={categories[6]?.link}
                    />
                  )}
                </HomeCardOneImage>
              </Link>
              <Link
                to={`/${categories[5]?.link}`}
                className="lg:hidden xl:block"
              >
                <HomeCardOneImage title="headphones">
                  {!categories[5] && (
                    <div className="flex justify-center items-center">
                      <Spinner color="failure" />
                    </div>
                  )}
                  {categories[5] && (
                    <img
                      className=" h-72 w-72"
                      src={categories[5]?.thumbnails}
                      alt={categories[5]?.link}
                    />
                  )}
                </HomeCardOneImage>
              </Link>
            </div>
            <Slider title="category_title">
              <Swiper
                className="mx-6"
                modules={[Navigation]}
                spaceBetween={0}
                navigation={true}
                breakpoints={{
                  400: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  700: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  750: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                  800: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                  900: {
                    slidesPerView: 5,
                    spaceBetween: 25,
                  },
                  1000: {
                    slidesPerView: 5,
                    spaceBetween: 25,
                  },
                }}
              >
                {categories.map((cat, i) => {
                  return (
                    <SwiperSlide key={i} className="cursor-pointer">
                      <Link to={`/${cat.link}`}>
                        <img
                          className="w-40 h-40"
                          src={cat.thumbnails}
                          alt={cat.name}
                        />
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Slider>

            <ProductSlider
              subCategoryId="656e34938ab097079167133d"
              title="moblie"
            />
            <ProductSlider
              subCategoryId="65527fdca8299445e5fe5e87"
              title="headphones"
            />
            <ProductSlider
              subCategoryId="65694e7b244db28213810d49"
              title="amazon_products"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
