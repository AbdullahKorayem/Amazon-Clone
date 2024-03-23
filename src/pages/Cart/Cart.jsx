import { useLoaderData, useNavigate } from 'react-router-dom';
import CartCard from '../../components/Cards/CartCard';
import { getCartItems } from '../../firestore/firestore';
import { useContext, useEffect, useState } from 'react';
import { cartItemsCountContext } from '../../contexts/cartItemsCount';
import { useSelector } from 'react-redux';
import { CustomSpinner } from '../../components/Spinners/spinner';
import ItemCard from '../../components/itemCard/itemCard';

const Cart = () => {
  const userUid = useSelector(state => state.User.user?.uid);

  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const { nums, setNums } = useContext(cartItemsCountContext);
  useEffect(() => {
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
    };
    fetchItems();
  }, [items]);

  function proceedToCheckout() {}

  if (items.length === 0) return <CustomSpinner />;
  else
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#EAEDED' }}>
        <div className="container m-auto pt-8 pb-5">
          <div className="grid  grid-cols-8 gap-10">
            <div className=" lg:col-span-6 col-span-8 bg-white">
              <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
              <div className="px-4 py-8 pt-2">
                <div className="text-right">Price</div>
                {items.map((item, index) => {
                  return <CartCard item={item} key={index} />;
                })}

                <div className=" text-xl text-right">
                  Subtotal(<span className="px-1">{nums}</span>Items):
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            {/* cheackOut */}
            <div className=" flex flex-col lg:col-span-2 col-span-8 rounded bg-white p-7 h-fit">
              <div>
                <span style={{ color: '#1D8778' }}>
                  Your order qualifies for FREE Shipping
                </span>
                Choose this option at checkout.
                <span style={{ color: 'blue' }}>See details</span>
              </div>
              <div className=" text-xl ">
                Subtotal(<span className="px-1">{nums}</span>Items):
                <span className="font-bold"> ${subtotal.toFixed(2)}</span>
              </div>
              <button
                onClick={() => {
                  navigate('/checkout');
                }}
                className=" my-5 border-none bg-[#ffd814] hover:bg-[#ffc300]s "
              >
                Proceed to Buy
              </button>
            </div>
            <div className=" lg:col-span-6 col-span-8 bg-white">
              <div className="text-2xl xl:text-3xl m-4">Your Items</div>
              <div className="px-4 py-8 pt-2">
                <div className="text-right">Price</div>
                {items.map((item, index) => {
                  return <ItemCard item={item} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;
