import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import {
  HomeCardFourImage,
  HomeCardOneImage,
} from '../../components/Cards/HomeCards';
import Slider from '../../components/Slider/slider';
import ProductSlider from '../../components/productSlider/ProductSlider';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="min-w-[320px] md:min-w-[750px] lg:min-w-[1000px] max-w-full"
      style={{ backgroundColor: '#E3E6E6' }}
    >
      <HomeSlider />
      <div className="pl-4 md:pl-7 pr-4 md:pr-7">
        <div className=" grid gap-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 min-[400px]:grid-cols-2 sm:grid-cols-1 -mt-80">
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <Link to="/">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </Link>
          </HomeCardOneImage>
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <Link to="/">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </Link>
          </HomeCardOneImage>
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <Link to="/">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </Link>
          </HomeCardOneImage>
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <Link to="/">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </Link>
          </HomeCardOneImage>
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <Link to="/">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </Link>
          </HomeCardOneImage>
          <HomeCardFourImage
            title={'Electronics | Free Delivery* on First Order'}
            link={'SeeMore'}
          >
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
          </HomeCardFourImage>
          <HomeCardFourImage
            title={'Electronics | Low Prices'}
            link={'Discover More'}
          >
            <div>
              <img src="amazon-icon//mobiles.jpg" />
              <p>Mobiles</p>
            </div>
            <div>
              <img src="amazon-icon//Head2.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Tablets.jpg" />
              <p>Tablets</p>
            </div>
            <div>
              <img src="amazon-icon//camera.jpg" />
              <p>camera</p>
            </div>
          </HomeCardFourImage>
          <HomeCardFourImage
            title={'Electronics | Low Prices'}
            link={'Discover More'}
          >
            <div>
              <img src="amazon-icon//mobiles.jpg" />
              <p>Mobiles</p>
            </div>
            <div>
              <img src="amazon-icon//Head2.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Tablets.jpg" />
              <p>Tablets</p>
            </div>
            <div>
              <img src="amazon-icon//camera.jpg" />
              <p>camera</p>
            </div>
          </HomeCardFourImage>
        </div>
        <Slider title="Shop by Category">
          <Swiper
            // slidesPerView={4}
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
                slidesPerView: 6,
                spaceBetween: 25,
              },
            }}
          >
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_0.jpg'} alt="Deal category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_0.jpg'} alt="Deal category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_0.jpg'} alt="Deal category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_1.jpg'} alt="Amazon category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img
                src={'amazon-icon/category_3.jpg'}
                alt="Computers category"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_5.jpg'} alt="Mobiles category" />
            </SwiperSlide>
          </Swiper>
        </Slider>
        <Slider title="Shop by Category">
          <Swiper
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
                slidesPerView: 6,
                spaceBetween: 25,
              },
            }}
          >
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_0.jpg'} alt="Deal category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_0.jpg'} alt="Deal category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_0.jpg'} alt="Deal category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_1.jpg'} alt="Amazon category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_2.jpg'} alt="Fashion category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_2.jpg'} alt="Fashion category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img
                src={'amazon-icon/category_3.jpg'}
                alt="Computers category"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_4.jpg'} alt="Home category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_5.jpg'} alt="Mobiles category" />
            </SwiperSlide>
          </Swiper>
        </Slider>
        <Slider title="Shop by Category">
          <Swiper
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
                slidesPerView: 6,
                spaceBetween: 25,
              },
            }}
          >
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_0.jpg'} alt="Deal category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_1.jpg'} alt="Amazon category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_2.jpg'} alt="Fashion category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_2.jpg'} alt="Fashion category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img
                src={'amazon-icon/category_3.jpg'}
                alt="Computers category"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_4.jpg'} alt="Home category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_5.jpg'} alt="Mobiles category" />
            </SwiperSlide>
          </Swiper>
        </Slider>

        <div className=" grid gap-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 min-[400px]:grid-cols-2 sm:grid-cols-1 ">
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <Link to="/">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </Link>
          </HomeCardOneImage>
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <Link to="/">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </Link>
          </HomeCardOneImage>

          <HomeCardFourImage
            title={'Electronics | Free Delivery* on First Order'}
            link={'SeeMore'}
          >
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
          </HomeCardFourImage>

          <HomeCardFourImage
            title={'Electronics | Low Prices'}
            link={'Discover More'}
          >
            <div>
              <img src="amazon-icon//mobiles.jpg" />
              <p>Mobiles</p>
            </div>
            <div>
              <img src="amazon-icon//Head2.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Tablets.jpg" />
              <p>Tablets</p>
            </div>
            <div>
              <img src="amazon-icon//camera.jpg" />
              <p>camera</p>
            </div>
          </HomeCardFourImage>
        </div>
        <Slider title="Shop by Category">
          <Swiper
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
                slidesPerView: 6,
                spaceBetween: 25,
              },
            }}
          >
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_0.jpg'} alt="Deal category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_1.jpg'} alt="Amazon category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_2.jpg'} alt="Fashion category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_2.jpg'} alt="Fashion category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img
                src={'amazon-icon/category_3.jpg'}
                alt="Computers category"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_4.jpg'} alt="Home category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_5.jpg'} alt="Mobiles category" />
            </SwiperSlide>
          </Swiper>
        </Slider>
        <Slider title="Shop by Category">
          <Swiper
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
                slidesPerView: 6,
                spaceBetween: 25,
              },
            }}
          >
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_0.jpg'} alt="Deal category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_1.jpg'} alt="Amazon category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_2.jpg'} alt="Fashion category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_2.jpg'} alt="Fashion category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img
                src={'amazon-icon/category_3.jpg'}
                alt="Computers category"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_4.jpg'} alt="Home category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_5.jpg'} alt="Mobiles category" />
            </SwiperSlide>
          </Swiper>
        </Slider>
        <div className=" grid gap-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 min-[400px]:grid-cols-2 sm:grid-cols-1 ">
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <Link to="/">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </Link>
          </HomeCardOneImage>
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <Link to="/">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </Link>
          </HomeCardOneImage>

          <HomeCardFourImage
            title={'Electronics | Free Delivery* on First Order'}
            link={'SeeMore'}
          >
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
          </HomeCardFourImage>

          <HomeCardFourImage
            title={'Electronics | Low Prices'}
            link={'Discover More'}
          >
            <div>
              <img src="amazon-icon//mobiles.jpg" />
              <p>Mobiles</p>
            </div>
            <div>
              <img src="amazon-icon//Head2.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Tablets.jpg" />
              <p>Tablets</p>
            </div>
            <div>
              <img src="amazon-icon//camera.jpg" />
              <p>camera</p>
            </div>
          </HomeCardFourImage>
        </div>
        <Slider title="Shop by Category">
          <Swiper
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
                slidesPerView: 6,
                spaceBetween: 25,
              },
            }}
          >
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_0.jpg'} alt="Deal category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_1.jpg'} alt="Amazon category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_2.jpg'} alt="Fashion category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_2.jpg'} alt="Fashion category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img
                src={'amazon-icon/category_3.jpg'}
                alt="Computers category"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_4.jpg'} alt="Home category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_5.jpg'} alt="Mobiles category" />
            </SwiperSlide>
          </Swiper>
        </Slider>

        <div className=" grid gap-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 min-[400px]:grid-cols-2 sm:grid-cols-1 ">
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <Link to="/">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </Link>
          </HomeCardOneImage>
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <Link to="/">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </Link>
          </HomeCardOneImage>

          <HomeCardFourImage
            title={'Electronics | Free Delivery* on First Order'}
            link={'SeeMore'}
          >
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Headphones.jpg" />
              <p>HeadPhones</p>
            </div>
          </HomeCardFourImage>

          <HomeCardFourImage
            title={'Electronics | Low Prices'}
            link={'Discover More'}
          >
            <div>
              <img src="amazon-icon//mobiles.jpg" />
              <p>Mobiles</p>
            </div>
            <div>
              <img src="amazon-icon//Head2.jpg" />
              <p>HeadPhones</p>
            </div>
            <div>
              <img src="amazon-icon//Tablets.jpg" />
              <p>Tablets</p>
            </div>
            <div>
              <img src="amazon-icon//camera.jpg" />
              <p>camera</p>
            </div>
          </HomeCardFourImage>
        </div>
        <Slider title="Shop by Category">
          <Swiper
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
                slidesPerView: 6,
                spaceBetween: 25,
              },
            }}
          >
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_0.jpg'} alt="Deal category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_1.jpg'} alt="Amazon category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_2.jpg'} alt="Fashion category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_2.jpg'} alt="Fashion category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img
                src={'amazon-icon/category_3.jpg'}
                alt="Computers category"
              />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_4.jpg'} alt="Home category" />
            </SwiperSlide>
            <SwiperSlide className="cursor-pointer">
              <img src={'amazon-icon/category_5.jpg'} alt="Mobiles category" />
            </SwiperSlide>
          </Swiper>
        </Slider>
        <ProductSlider
          subCategoryId="656e34938ab097079167133d"
          title="Moblie"
        />
      </div>
    </div>
  );
};

export default Home;
