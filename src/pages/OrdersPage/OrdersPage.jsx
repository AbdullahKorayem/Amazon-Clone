import { NavLink } from 'react-router-dom';
import SingleOrder from './SingleOrder';
import { useEffect, useState } from 'react';
import { getOrderItems } from '../../firestore/firestore';
function OrdersPage() {
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

  console.log(filteredOrder);
  document.title = 'Amazon : Your Orders';
  return (
    <div className="container lg:px-32 mx-auto mt-10 min-h-screen pb-4">
      <div>
        <h1 className="text-left text-3xl my-5">Your Orders</h1>
      </div>
      <div className="flex flex-row gap-5 pb-2 border-b-2">
        <NavLink
          onFocus={() => setFilter('all')}
          autoFocus={true}
          className={` hover:text-red-700 focus:text-black focus:font-semibold ${
            filter === 'all' ? 'text-black font-semibold' : 'text-blue-700'
          }`}
        >
          Orders
        </NavLink>
        <NavLink
          onFocus={() => setFilter('pending')}
          className={` hover:text-red-700 focus:text-black focus:font-semibold ${
            filter === 'pending' ? 'text-black font-semibold' : 'text-blue-700'
          }`}
        >
          Not Yet Dispatched
        </NavLink>
        <NavLink
          onFocus={() => setFilter('delivered')}
          className={` hover:text-red-700 focus:text-black focus:font-semibold ${
            filter === 'delivered'
              ? 'text-black font-semibold'
              : 'text-blue-700'
          }`}
        >
          Delivered
        </NavLink>
        <NavLink
          onFocus={() => setFilter('cancelled')}
          className={` hover:text-red-700 focus:text-black focus:font-semibold ${
            filter === 'cancelled'
              ? 'text-black font-semibold'
              : 'text-blue-700'
          }`}
        >
          Cancelled Orders
        </NavLink>
      </div>
      {filteredOrder.map(order => {
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
