import ReactImageGallery from 'react-image-gallery';
import 'react-rater/lib/react-rater.css';
import StarRating from '../../components/StarRating/StarRating';
import HandlePrice from '../../components/HandlePrice/HandlePrice';
import Available from '../../components/Available/Available';
import { useContext, useState } from 'react';
import { langContext } from '../../contexts/lang';
import { addProductToCart, getProductById } from '../../firestore/firestore';
import HandleQuantity from '../../components/HandleQuantity/HandleQuantity';
import ProductData from '../../components/ProductData/ProductData';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { cartItemsCountContext } from '../../contexts/cartItemsCount';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const userUid = useSelector(state => state.User.user?.uid);
  const { id: productId } = useParams();
  const product = useLoaderData();
  const navigate = useNavigate();
  const { lang } = useContext(langContext);
  const [quantity, setQuantity] = useState(1);
  const { nums, setNums } = useContext(cartItemsCountContext);
  let price;
  let availability;
  let images = [];

  if (!product) {
    return <div className="min-h-screen">Loading...</div>;
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
    <section className="container mx-0 flex-grow  max-w-[1200px]  border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
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
        <div className="my-3 font-bold">
          <Available availability={availability} size="xl" />
        </div>
        <ProductData name="Brand Name" description={product[lang].brand} />
        <ProductData name="Model Name" description={product[lang].title} />
        <HandleQuantity
          quantity={quantity}
          setQuantity={setQuantity}
          quantityInStock={product.quantityInStock}
        />
        <div className="mt-7 flex flex-row items-center gap-6">
          <button
            onClick={() => {
              if (userUid) {
                addProductToCart(
                  userUid,
                  productId,
                  product.thumbnail,
                  product[lang].description,
                  price,
                  product.quantityInStock,
                  quantity
                );
                setNums(nums => nums + quantity);
              } else navigate('/login');
            }}
            className=" bg-[#ffd814] hover:bg-[#ffc300]  flex h-12 w-2/3 items-center justify-center text-black duration-100 border-none "
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

export async function loader({ params }) {
  const { id } = params;
  const product = await getProductById(id);
  return product;
}
