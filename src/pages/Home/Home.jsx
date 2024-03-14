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
import Slider from '../../components/Slider/Slider';
import ProductSlider from '../../components/productSlider/ProductSlider';

const Home = () => {
  return (
    <div
      className=" min-w-[1000px] max-w-full"
      style={{ backgroundColor: '#E3E6E6' }}
    >
      <HomeSlider />
      <div className=" pl-7 pr-7">
        <div className=" grid gap-5 grid-cols-4 -mt-80">
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <a href="#">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </a>
          </HomeCardOneImage>
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <a href="#">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </a>
          </HomeCardOneImage>
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <a href="#">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </a>
          </HomeCardOneImage>
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <a href="#">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </a>
          </HomeCardOneImage>
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <a href="#">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </a>
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
            slidesPerView={6}
            modules={[Navigation]}
            spaceBetween={0}
            navigation={true}
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
            slidesPerView={6}
            modules={[Navigation]}
            spaceBetween={0}
            navigation={true}
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
            slidesPerView={6}
            modules={[Navigation]}
            spaceBetween={0}
            navigation={true}
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

        <div className=" grid gap-5 grid-cols-4 ">
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <a href="#">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </a>
          </HomeCardOneImage>
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <a href="#">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </a>
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
            slidesPerView={6}
            modules={[Navigation]}
            spaceBetween={0}
            navigation={true}
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
            slidesPerView={6}
            modules={[Navigation]}
            spaceBetween={0}
            navigation={true}
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
        <div className=" grid gap-5 grid-cols-4 ">
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <a href="#">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </a>
          </HomeCardOneImage>
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <a href="#">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </a>
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
            slidesPerView={6}
            modules={[Navigation]}
            spaceBetween={0}
            navigation={true}
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

        <div className=" grid gap-5 grid-cols-4 ">
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <a href="#">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </a>
          </HomeCardOneImage>
          <HomeCardOneImage
            title={'Try Prime FREE for 30 days & shop Ramadan deals'}
            link={'SeeMore'}
          >
            <a href="#">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/Feb24/XCM_Manual_1689585_6104577_758x608_2X._SY304_CB582986608_.jpg"
                alt=""
              />
            </a>
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
            slidesPerView={6}
            modules={[Navigation]}
            spaceBetween={0}
            navigation={true}
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
        <ProductSlider />
      </div>
    </div>
  );
};

export default Home;
