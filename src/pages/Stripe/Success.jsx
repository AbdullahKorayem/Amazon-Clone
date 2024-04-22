import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addOrder, deleteItemFromCart } from '../../firestore/firestore';
import { Spinner } from 'flowbite-react';
import PagePlaceholder from './../../components/Placeholder/PagePlaceholder';

function Success() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const order = JSON.parse(sessionStorage.getItem('order'));
  useEffect(() => {
    setIsLoading(true);
    async function setorder() {
      const res = await addOrder(order);
    }
    setorder();
    setIsLoading(false);
  }, []);

  function removeItems() {
    order.item.forEach(async ele => {
      const res = await deleteItemFromCart(ele.id);
    });
    sessionStorage.removeItem('checkout');
    sessionStorage.removeItem('order');
    navigate('/');
  }
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <PagePlaceholder />
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <div className="bg-white p-6 md:mx-auto">
            <svg
              viewBox="0 0 24 24"
              className="text-green-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Payment Success
              </h3>
              <p className="text-gray-600 my-2">
                Thank you for completing your secure online payment.{' '}
              </p>
              <p>Have a great day!</p>
              <div className="py-10 text-center">
                <Link
                  onClick={removeItems}
                  className="px-12 bg-slate-800 hover:bg-[#131921] text-white font-semibold rounded-2xl py-3"
                >
                  continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Success;
