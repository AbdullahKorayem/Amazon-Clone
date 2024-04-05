import { useNavigate } from 'react-router-dom';
import CartCard from '../../components/Cards/CartCard';
import { getCartItems, getOrderItems } from '../../firestore/firestore';
import { useContext, useEffect, useState } from 'react';
import { cartItemsCountContext } from '../../contexts/cartItemsCount';
import { useSelector } from 'react-redux';
import ItemCard from '../../components/itemCard/itemCard';
import { isCheckoutContext } from '../../contexts/isCheckout';
import { useTranslation } from 'react-i18next';
import { dirContext } from '../../contexts/direction';

const Cart = () => {
  const { i18n, t } = useTranslation();
  const activeLocale = i18n.resolvedLanguage;
  const userUid = useSelector(state => state.User.user?.uid);
  const { dir } = useContext(dirContext);
  const [items, setItems] = useState([]);
  const [orders, setOrdres] = useState([]);
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const { nums, setNums } = useContext(cartItemsCountContext);
  const { setIsChecked } = useContext(isCheckoutContext);
  useEffect(() => {
    document.title = 'Amazon : Your Cart';

    const fetchItems = async () => {
      const data = await getCartItems(userUid);
      setItems(data);
      const Subtotal = items.reduce((acc, item) => {
        return acc + item.productPrice * item.quantity;
      }, 0);
      setSubtotal(Subtotal);
      const totalItemsNums = items.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
      setNums(totalItemsNums);
      const orderResponse = await getOrderItems(userUid);
      const orderItems = orderResponse.reduce((acc, item) => {
        return acc.concat(item.item);
      }, []);
      setOrdres(orderItems);
    };
    fetchItems();
  }, [items]);

  function proceedToCheckout() {
    setIsChecked(true);
    const orderItems = items.map(item => {
      return {
        id: item.productId,
        quantity: item.quantity,
        price: Math.trunc(item.productPrice),
        name: item.productTitle,
        image: item.productImage,
      };
    });
    sessionStorage.setItem('checkout', JSON.stringify(orderItems));
    navigate('/checkout');
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EAEDED' }}>
      <div className="container m-auto pt-8 pb-5">
        <div className="grid  grid-cols-8 gap-10">
          <div className=" lg:col-span-6 col-span-8 bg-white">
            <div className="text-2xl xl:text-3xl m-4">{t('shopping_cart')}</div>
            <div className="px-4 py-8 pt-2">
              <div
                className={`${
                  dir === 'rtl' ? 'text-left ml-3' : 'text-right mr-3'
                }`}
              >
                {t('price')}
              </div>
              {items.length > 0 ? (
                items.map((item, index) => {
                  return <CartCard item={item} key={index} />;
                })
              ) : (
                <div>{t('No item Added to Cart')}</div>
              )}

              <div className=" text-xl text-right">
                {t('Subtotal')}(<span className="px-1">{nums}</span>
                {t('Items')}):
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
          {/* cheackOut */}
          <div className=" flex flex-col lg:col-span-2 col-span-8 rounded bg-white p-7 h-fit">
            <div>
              <span style={{ color: '#1D8778' }}>
                {t('Your order qualifies for FREE Shipping')}{' '}
              </span>
              {t('Choose this option at checkout')}{' '}
              <span style={{ color: 'blue' }}>{t('see_details')}</span>
            </div>
            <div className=" text-xl ">
              {t('Subtotal')}(<span className="px-1">{nums}</span>
              {t('Items')}):
              <span className="font-bold"> ${subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={proceedToCheckout}
              disabled={items.length === 0}
              className=" my-5 border-none bg-[#ffd814] hover:bg-[#ffc300] disabled:bg-[#ffd814] disabled:opacity-50 "
            >
              {t('proceed_to_buy')}
            </button>
          </div>
          <div className=" lg:col-span-6 col-span-8 bg-white">
            <div className="text-2xl xl:text-3xl m-4">{t('your_items')}</div>
            <div className="px-4 py-8 pt-2">
              <div
                className={`${
                  dir === 'rtl' ? 'text-left ml-3' : 'text-right mr-3'
                }`}
              >
                {t('price')}
              </div>
              {orders.length > 0 ? (
                orders.map((item, index) => {
                  return <ItemCard item={item} key={index} />;
                })
              ) : (
                <div>{t('No item ordered recently')}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
