import { NavLink } from 'react-router-dom';
import SingleOrder from './SingleOrder';
import { useContext, useEffect, useState } from 'react';
import { getOrderItems } from '../../firestore/firestore';
import { useTranslation } from 'react-i18next';
import { dirContext } from '../../contexts/direction';
function OrdersPage() {
  const { i18n, t } = useTranslation();
  const { dir } = useContext(dirContext);
  const [userOrders, setUserOrders] = useState([]);
  const [filter, setFilter] = useState('all');
  const [change, setChange] = useState(false);
  let filteredOrder = userOrders;
  useEffect(() => {
    const userId = localStorage.getItem('UserUid');
    const fetchOrder = async () => {
      const orders = await getOrderItems(userId);
      setUserOrders(orders);
    };
    fetchOrder();
  }, [change]);
  if (filter !== 'all') {
    filteredOrder = userOrders.filter(order => order.status === filter);
  } else {
    filteredOrder = userOrders;
  }

  document.title = 'Amazon : Your Orders';
  return (
    <div className="container lg:px-32 mx-auto mt-10 min-h-screen pb-4">
      <div>
        <h1
          className={`${
            dir === 'rtl' ? 'text-right' : 'text-left'
          } text-3xl my-5`}
        >
          {t('your_order')}
        </h1>
      </div>
      <div className="flex flex-row gap-5 pb-2 border-b-2">
        <NavLink
          onFocus={() => setFilter('all')}
          autoFocus={true}
          className={` hover:text-red-700 focus:text-black focus:font-semibold ${
            filter === 'all' ? 'text-black font-semibold' : 'text-blue-700'
          }`}
        >
          {t('orders')}
        </NavLink>
        <NavLink
          onFocus={() => setFilter('pending')}
          className={` hover:text-red-700 focus:text-black focus:font-semibold ${
            filter === 'pending' ? 'text-black font-semibold' : 'text-blue-700'
          }`}
        >
          {t('Not Yet Dispatched')}
        </NavLink>
        <NavLink
          onFocus={() => setFilter('delivered')}
          className={` hover:text-red-700 focus:text-black focus:font-semibold ${
            filter === 'delivered'
              ? 'text-black font-semibold'
              : 'text-blue-700'
          }`}
        >
          {t('delivered')}
        </NavLink>
        <NavLink
          onFocus={() => setFilter('cancelled')}
          className={` hover:text-red-700 focus:text-black focus:font-semibold ${
            filter === 'cancelled'
              ? 'text-black font-semibold'
              : 'text-blue-700'
          }`}
        >
          {t('cancelled_orders')}
        </NavLink>
      </div>
      {filteredOrder
        .sort((a, b) => b.orderDate - a.orderDate)
        .map(order => {
          return (
            <SingleOrder
              setChange={setChange}
              change={change}
              key={order.id}
              order={order}
            />
          );
        })}
    </div>
  );
}

export default OrdersPage;
