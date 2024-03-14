import { useNavigate } from 'react-router-dom';
import CartCard from '../../components/Cards/CartCard';

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EAEDED' }}>
      <div className="container m-auto pt-8 pb-5">
        <div className="grid grid-cols-8 gap-10">
          <div className="col-span-6 bg-white">
            <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
            <div className="px-4 py-8 pt-2">
              <div className="text-right">Price</div>

              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />

              <div className=" text-xl text-right">
                Subtotal(<span className="px-1">1</span>Items):
                <span className="font-bold">$20.00</span>
              </div>
            </div>
          </div>
          {/* cheackOut */}
          <div className=" flex flex-col col-span-2 rounded bg-white p-7 h-fit">
            <div>
              <span style={{ color: '#1D8778' }}>
                Your order qualifies for FREE Shipping
              </span>
              Choose this option at checkout.
              <span style={{ color: 'blue' }}>See details</span>
            </div>
            <div className=" text-xl ">
              Subtotal(<span className="px-1">1</span>Items):
              <span className="font-bold"> $20.00</span>
            </div>
            <button
              onClick={() => {
                navigate('/checkout');
              }}
              className=" my-5 border-none bg-[#ffd814]   hover:bg-[#ffc300] px-20"
            >
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
