import { useNavigate } from 'react-router-dom';
import { updateOrderStatus } from '../../firestore/firestore';
import SingleItem from './SingleItem';

function SingleOrder({ order, setChange, change }) {
  const navigate = useNavigate();
  function timestampToDate(timestamp) {
    var date = new Date(timestamp);
    var day = date.getDate();
    var month = date.toLocaleString('default', { month: 'long' });
    var year = date.getFullYear();
    return day + ' ' + month + ' ' + year;
  }
  async function cancelOrder() {
    const res = await updateOrderStatus(order.id);
    // navigate('/orders');
    setChange(!change);
  }
  const date = timestampToDate(order.orderDate);
  console.log(date);
  return (
    <div className="border-2 mt-10 rounded-lg">
      <div className=" relative flex bg-[#f0f2f2] text-gray-700 p-3  flex-row text-sm gap-20">
        <div className="flex flex-col">
          <span>ORDER PLACED</span> <span>{date}</span>
        </div>
        <div className="flex flex-col">
          <span>TOTAL</span>
          <span>$ {order.totalPrice}</span>
        </div>
        <div className="flex flex-col ">
          <span>SHIP TO</span> <span>{order.shippingAddress.fullName}</span>
        </div>
        <div className=" flex flex-col absolute items-end right-4">
          <span>ORDER # {order.id}</span>
          {order.status !== 'cancelled' && (
            <span
              onClick={cancelOrder}
              className="text-red-600 text-base cursor-pointer font-semibold w-fit "
            >
              cancel order
            </span>
          )}
        </div>
      </div>
      {order.status === 'cancelled' && (
        <div className="text-red-600 font-bold text-xl ms-5 my-3">
          Cancelled
        </div>
      )}

      {order.item.map((item, index) => {
        return <SingleItem key={index} item={item} />;
      })}
    </div>
  );
}

export default SingleOrder;
