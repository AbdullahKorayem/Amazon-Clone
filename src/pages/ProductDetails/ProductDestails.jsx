import { BiShoppingBag } from 'react-icons/bi';
import ReactImageGallery from 'react-image-gallery';
import 'react-rater/lib/react-rater.css';
import StarRating from '../../components/StarRating/StarRating';
import HandlePrice from '../../components/HandlePrice/HandlePrice';
import Available from '../../components/Available/Available';
import { useContext, useEffect, useState } from 'react';
import { langContext } from '../../contexts/lang';
import { getProductById } from '../../firestore/firestore';

const ProductDetail = () => {
  const [product, setProduct] = useState(null); // Initialize product state to null
  const { lang } = useContext(langContext);
  let price;
  let availability;
  let images = [];

  useEffect(() => {
    async function fetchData() {
      const pro = await getProductById('655d1d05f752cc400495d713');
      setProduct(pro);
    }

    fetchData();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  price = product.price - (product.price * product.discountPercentage) / 100;
  availability = product.quantityInStock > 0;
  images = product.images.map(img => {
    return {
      original: img,
      thumbnail: img,
    };
  });

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
        <h3 className="pt-3 text-2xl  lg:pt-0">{product[lang].description}</h3>
        <div className="flex items-center mt-2">
          <StarRating rate={product.rating} />
          <span className="mb-3">({product.ratingQuantity})</span>
        </div>
        <HandlePrice
          prePrice={product.price}
          price={price}
          discountPercentage={product.discountPercentage}
        />
        <div className=" w-full h-0.5 bg-gray-200 my-4"></div>
        <Available availability={availability} />
        <ProductData name="Brand Name" description={product[lang].brand} />
        <ProductData name="Model Name" description={product[lang].title} />
        <HandleQuantity quantityInStock={product.quantityInStock} />
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
