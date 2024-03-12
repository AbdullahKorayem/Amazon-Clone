import HomeSlider from '../components/HomeSlider/HomeSlider';
import {
  HomeCardFourImage,
  HomeCardOneImage,
} from '../components/Cards/HomeCards';
import Slider from '../components/Slider/Slider';
const Home = () => {
  return (
    <div className=" pl-7 pr-7">
      <HomeSlider />
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
            <img src="./src/assets/images/Headphones.jpg" />
            <p>HeadPhones</p>
          </div>
          <div>
            <img src="./src/assets/images/Headphones.jpg" />
            <p>HeadPhones</p>
          </div>
          <div>
            <img src="./src/assets/images/Headphones.jpg" />
            <p>HeadPhones</p>
          </div>
          <div>
            <img src="./src/assets/images/Headphones.jpg" />
            <p>HeadPhones</p>
          </div>
        </HomeCardFourImage>
        <HomeCardFourImage
          title={'Electronics | Low Prices'}
          link={'Discover More'}
        >
          <div>
            <img src="./src/assets/images/mobiles.jpg" />
            <p>Mobiles</p>
          </div>
          <div>
            <img src="./src/assets/images/Head2.jpg" />
            <p>HeadPhones</p>
          </div>
          <div>
            <img src="./src/assets/images/Tablets.jpg" />
            <p>Tablets</p>
          </div>
          <div>
            <img src="./src/assets/images/camera.jpg" />
            <p>camera</p>
          </div>
        </HomeCardFourImage>
        <HomeCardFourImage
          title={'Electronics | Low Prices'}
          link={'Discover More'}
        >
          <div>
            <img src="./src/assets/images/mobiles.jpg" />
            <p>Mobiles</p>
          </div>
          <div>
            <img src="./src/assets/images/Head2.jpg" />
            <p>HeadPhones</p>
          </div>
          <div>
            <img src="./src/assets/images/Tablets.jpg" />
            <p>Tablets</p>
          </div>
          <div>
            <img src="./src/assets/images/camera.jpg" />
            <p>camera</p>
          </div>
        </HomeCardFourImage>
      </div>
      <Slider />
    </div>
  );
};

export default Home;
