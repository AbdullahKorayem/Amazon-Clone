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
import { Link, useLoaderData } from 'react-router-dom';
import { getAllCategories } from './../../firestore/firestore';

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div
      className="min-w-[320px] md:min-w-[750px] lg:min-w-[1000px] max-w-full"
      style={{ backgroundColor: '#E3E6E6' }}
    >
      <HomeSlider />
      <div className="pl-4 md:pl-7 pr-4 md:pr-7">
        <div className=" grid gap-5 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 min-[400px]:grid-cols-2 sm:grid-cols-1 -mt-80">
          <Link to={`/${categories[0]?.link}`}>
            <HomeCardOneImage title={categories[0]?.name}>
              <img
                className=" h-72 w-72"
                src={categories[0]?.thumbnails}
                alt={categories[0]?.name}
              />
            </HomeCardOneImage>
          </Link>
          <Link to={`/${categories[1]?.link}`}>
            <HomeCardOneImage title={categories[1]?.name}>
              <img
                className=" h-72 w-72"
                src={categories[1]?.thumbnails}
                alt={categories[1]?.name}
              />
            </HomeCardOneImage>
          </Link>
          <Link to={`/${categories[2]?.link}`}>
            <HomeCardOneImage title={categories[2]?.name}>
              <img
                className=" h-72 w-72"
                src={categories[2]?.thumbnails}
                alt={categories[2]?.name}
              />
            </HomeCardOneImage>
          </Link>
          <Link to={`/${categories[3]?.link}`}>
            <HomeCardOneImage title={categories[3]?.name}>
              <img
                className=" h-72 w-72"
                src={categories[3]?.thumbnails}
                alt={categories[3]?.name}
              />
            </HomeCardOneImage>
          </Link>
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
          <Link to={`/${categories[4]?.link}`}>
            <HomeCardOneImage title={categories[4]?.name}>
              <img src={categories[4]?.thumbnails} alt={categories[4]?.name} />
            </HomeCardOneImage>
          </Link>
          <Link to={`/${categories[5]?.link}`}>
            <HomeCardOneImage title={categories[5]?.name}>
              <img
                className=" h-72 w-72"
                src={categories[5]?.thumbnails}
                alt={categories[5]?.name}
              />
            </HomeCardOneImage>
          </Link>
          <Link to={`/${categories[6]?.link}`}>
            <HomeCardOneImage title={categories[6]?.name}>
              <img src={categories[6]?.thumbnails} alt={categories[6]?.name} />
            </HomeCardOneImage>
          </Link>
          <Link to={`/${categories[7]?.link}`}>
            <HomeCardOneImage title={categories[7]?.name}>
              <img
                className=" h-72 w-72"
                src={categories[7]?.thumbnails}
                alt={categories[7]?.name}
              />
            </HomeCardOneImage>
          </Link>
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
          <Link to={`/${categories[8]?.link}`}>
            <HomeCardOneImage title={categories[8]?.name}>
              <img src={categories[8]?.thumbnails} alt={categories[8]?.name} />
            </HomeCardOneImage>
          </Link>
          <Link to={`/${categories[1]?.link}`}>
            <HomeCardOneImage title={categories[1]?.name}>
              <img
                className=" h-72 w-72"
                src={categories[1]?.thumbnails}
                alt={categories[1]?.name}
              />
            </HomeCardOneImage>
          </Link>
          <Link to={`/${categories[6]?.link}`}>
            <HomeCardOneImage title={categories[6]?.name}>
              <img src={categories[6]?.thumbnails} alt={categories[6]?.name} />
            </HomeCardOneImage>
          </Link>
          <Link to={`/${categories[5]?.link}`}>
            <HomeCardOneImage title={categories[5]?.name}>
              <img
                className=" h-72 w-72"
                src={categories[5]?.thumbnails}
                alt={categories[5]?.name}
              />
            </HomeCardOneImage>
          </Link>
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
        <ProductSlider
          subCategoryId="656e34938ab097079167133d"
          title="Moblie"
        />
      </div>
    </div>
  );
};

export default Home;

export async function loader() {
  const res = await getAllCategories();
  return res;
}
