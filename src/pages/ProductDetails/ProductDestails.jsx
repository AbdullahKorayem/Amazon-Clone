import ReactImageGallery from 'react-image-gallery';
import 'react-rater/lib/react-rater.css';
import HandlePrice from '../../components/HandlePrice/HandlePrice';
import Available from '../../components/Available/Available';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { langContext } from '../../contexts/lang';
import {
  addProductToCart,
  getProductById,
  getProductsBySubCategoryId,
} from '../../firestore/firestore';
import HandleQuantity from '../../components/HandleQuantity/HandleQuantity';
import ProductData from '../../components/ProductData/ProductData';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { cartItemsCountContext } from '../../contexts/cartItemsCount';
import { useSelector } from 'react-redux';
import ProductsList from './../../components/ProductsList/ProductsList';
import ProductSliderV2 from './../../components/productSlider/ProductSliderV2';
import { FaLocationDot } from 'react-icons/fa6';
import SetRating from '../../components/SetRating/SetRating';
import { useTranslation } from 'react-i18next';
import { isCheckoutContext } from '../../contexts/isCheckout';

const ProductDetail = () => {
  const { i18n, t } = useTranslation();
  const activeLocale = i18n.resolvedLanguage;
  const userUid = useSelector(state => state.User.user?.uid);
  const { id: productId } = useParams();
  const product = useLoaderData();
  const navigate = useNavigate();
  const { lang } = useContext(langContext);
  const [quantity, setQuantity] = useState(1);
  const { nums, setNums } = useContext(cartItemsCountContext);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const { setIsChecked } = useContext(isCheckoutContext);

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
  useLayoutEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  }, [product]);

  useEffect(() => {
    async function fetch() {
      const result = await getProductsBySubCategoryId(product.subCategoryId);
      setRelatedProduct(result);
    }
    fetch();
  }, []);
  return (
    <div>
      <div className=" flex gap-2">
        <section className="container mx-auto flex-grow  max-w-[1200px]  border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
          <div className="container mx-auto px-4">
            <ReactImageGallery
              showBullets={false}
              showFullscreenButton={false}
              showPlayButton={false}
              items={images}
            />
          </div>
          <div className="mx-auto px-5  lg:px-5">
            <h3 className="pt-3 text-2xl  lg:pt-0">
              {product[lang].description}
            </h3>
            <div className="flex items-center mt-2">
              <SetRating
                product={product}
                productId={productId}
                userUid={userUid}
              />
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
            <ProductData
              name={t('Brand Name')}
              description={product[lang].brand}
            />
            <ProductData
              name={t('Model Name')}
              description={product[lang].title}
            />

            <div className="mt-7 flex lg:hidden md:hidden flex-col items-center gap-3">
              <HandleQuantity
                quantity={quantity}
                setQuantity={setQuantity}
                quantityInStock={product.quantityInStock}
              />
              <button
                onClick={() => {
                  if (userUid) {
                    addProductToCart(
                      userUid,
                      productId,
                      product.thumbnail,
                      product[lang].description,
                      product[lang].title,
                      price,
                      product.quantityInStock,
                      quantity,
                      product.SellerUid
                    );
                    setNums(nums => nums + quantity);
                  } else navigate('/login');
                }}
                className=" bg-[#ffd814] hover:bg-[#ffc300]  flex  h-7  w-52 items-center justify-center text-black duration-100 border-none "
              >
                {t('add_to_cart')}
              </button>
            </div>
          </div>
        </section>
        <div className="hidden md:flex  gap-y-4 mt-6 text-gray-700 bg-white border rounded-xl w-60 p-4">
          <div className="flex pl-1 gap-y-2 flex-col">
            <div className="flex">
              <p className=" text-2xl">
                <strong>${price}</strong>
              </p>
            </div>
            <div style={{ color: '#007185' }}>{t('FREE Returns')} </div>

            <div className="flex items-center">
              <FaLocationDot />
              <p style={{ color: '#007185' }}>{t('deliver_to')} Egypt</p>
            </div>
            <div className="my-3 font-bold">
              <Available availability={availability} size="xl" />
            </div>
            <div className=" flex  flex-col justify-center items-center">
              <HandleQuantity quantity={quantity} setQuantity={setQuantity} />
              <div className="mt-7 flex flex-col items-center gap-3">
                <button
                  onClick={() => {
                    if (userUid) {
                      addProductToCart(
                        userUid,
                        productId,
                        product.thumbnail,
                        product[lang].description,
                        product[lang].title,
                        price,
                        product.quantityInStock,
                        quantity,
                        product.SellerUid
                      );
                      setNums(nums => nums + quantity);
                    } else navigate('/login');
                  }}
                  className=" bg-[#ffd814] hover:bg-[#ffc300]  flex  h-7  w-52 items-center justify-center text-black duration-100 border-none "
                >
                  {t('add_to_cart')}
                </button>
                <button
                  onClick={() => {
                    if (userUid) {
                      setIsChecked(true);
                      setNums(nums => nums + quantity);
                      const orderItems = [
                        {
                          id: productId,
                          quantity: quantity,
                          price: Math.trunc(price),
                          name: product[lang].title,
                          image: product.thumbnail,
                          SellerUid: product.SellerUid,
                        },
                      ];

                      sessionStorage.setItem(
                        'checkout',
                        JSON.stringify(orderItems)
                      );
                      navigate('/checkout');
                    } else navigate('/login');
                  }}
                  className=" bg-[#FFA41C] hover:bg-[#FFA41C]  flex  h-7  w-52 items-center justify-center text-black duration-100 border-none "
                >
                  {t('buy_now')}
                </button>
              </div>
            </div>
            <div className=" flex gap-8 text-xs">
              <div className=" flex flex-col">
                <span>{t('ships_from')} </span>
                <span>{t('sold_by')} </span>
                <span>{t('payment')} </span>
              </div>
              <div className=" flex flex-col">
                <span>Amazon.eg </span>
                <span>Amazon.eg </span>
                <span>{t('secure_transaction')} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductSliderV2 data={relatedProduct} title={t('suggested_products')} />
      <section className="container my-20 border-t-2 border-gray-200">
        <div className="ms-5 text-3xl my-10 font-semibold">
          {t('related_products')}
        </div>
        <ProductsList products={relatedProduct} />
      </section>
    </div>
  );
};

export default ProductDetail;

export async function loader({ params }) {
  const { id } = params;
  const product = await getProductById(id);
  return product;
}
