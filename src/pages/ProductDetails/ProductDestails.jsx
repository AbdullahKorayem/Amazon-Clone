import { BiShoppingBag } from 'react-icons/bi';
import ReactImageGallery from 'react-image-gallery';
import 'react-rater/lib/react-rater.css';
import StarRating from '../../components/StarRating/StarRating';
import HandlePrice from '../../components/HandlePrice/HandlePrice';
import Available from '../../components/Available/Available';
import { useContext, useState } from 'react';
import { langContext } from '../../contexts/lang';

const pro = {
  proId: '656b1df907b2d1b07cb2c992',
  en: {
    title: 'Casio Dress Watch for Men',
    description:
      'Casio Dress Watch for Men, Quartz Movement, Analog Display, Brown Leather Strap (W-218HC-4AVDF)\n',
    brand: 'Casio',
  },
  ar: {
    title: 'ساعة رسمية للرجال',
    description:
      'ساعة رسمية للرجال، حركة كوارتز، عرض انالوج من كاسيو، سوار جلد بني MTP-VD02L-7EUDF\n',
    brand: 'كاسيو',
  },
  thumbnail: 'https://m.media-amazon.com/images/I/61neoeSVdBL._AC_SX679_.jpg',
  images: [
    'https://m.media-amazon.com/images/I/51OCGrb4nZL._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/51KzYHAxV7L._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/51KzYHAxV7L._AC_SX679_.jpg',
    'https://m.media-amazon.com/images/I/41TRHcxnqRL._AC_SX679_.jpg',
  ],
  categoryId: '65527ac3376a52ea210d9706',
  subCategoryId: '655bb731c29668369f9748f7',
  sku: 'cs1',
  quantityInStock: 120,
  price: 1130,
  discountPercentage: 1,
  rating: 4,
  ratingQuantity: 1,
  sold: 0,
};

const ProductDetail = () => {
  const { lang } = useContext(langContext);
  const {
    images,
    title,
    availability,
    brand,
    rating,
    ratingQuantity,
    productName,
    prePrice,
    price,
    discountPercentage,
    quantityInStock,
  } = {
    images: pro.images.map(img => {
      return {
        original: img,
        thumbnail: img,
      };
    }),
    title: pro[lang].description,
    availability: pro.quantityInStock > 0,
    brand: pro[lang].brand,
    rating: pro.rating,
    ratingQuantity: pro.ratingQuantity,
    productName: pro[lang].title,
    prePrice: pro.price,
    price: pro.price - (pro.price * pro.discountPercentage) / 100,
    discountPercentage: pro.discountPercentage,
    quantityInStock: pro.quantityInStock,
  };

  return (
    <section className="container flex-grow mx-0 max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
      <div className="container mx-auto px-4">
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={images}
        />
      </div>
      <div className="mx-auto px-5 lg:px-5">
        <h3 className="pt-3 text-2xl  lg:pt-0">{title}</h3>
        <div className="flex items-center mt-2">
          <StarRating rate={rating} />
          <span className="mb-3">({ratingQuantity})</span>
        </div>
        <HandlePrice
          prePrice={prePrice}
          price={price}
          discountPercentage={discountPercentage}
        />
        <div className=" w-full h-0.5 bg-gray-200 my-4"></div>
        <Available availability={availability} />
        <ProductData name="Brand Name" description={brand} />
        <ProductData name="Model Name" description={productName} />
        <HandleQuantity quantityInStock={quantityInStock} />
        <div className="mt-7 flex flex-row items-center gap-6">
          <button
            className="flex h-12 w-1/3 items-center justify-center text-black duration-100 border-none "
            style={{ backgroundColor: '#ffa41c' }}
          >
            <BiShoppingBag className="mx-2" />
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

function ProductData({ name, description }) {
  return (
    <p className="font-bold">
      {name}: <span className="font-normal">{description}</span>
    </p>
  );
}

function HandleQuantity({ quantityInStock }) {
  const [quantity, setQuantity] = useState(0);
  function handlePlus() {
    if (quantity < quantityInStock) setQuantity(quantity => quantity + 1);
  }
  function handleMins() {
    if (quantity > 0) setQuantity(quantity => quantity - 1);
  }
  const plusMinuceButton =
    'flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500';
  return (
    <div className="mt-6">
      <p className="pb-2 text-xs text-gray-500">Quantity</p>
      <div className="flex">
        <button onClick={handleMins} className={`${plusMinuceButton}`}>
          −
        </button>
        <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
          {quantity}
        </div>
        <button onClick={handlePlus} className={`${plusMinuceButton}`}>
          {' '}
          +
        </button>
      </div>
    </div>
  );
}
