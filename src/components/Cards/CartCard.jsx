import { useState } from 'react';
import Available from '../Available/Available';
import {
  addProductToCart,
  deleteItemFromCart,
} from '../../firestore/firestore';
import { Link } from 'react-router-dom';

function CartCard({ item }) {
  const {
    productId,
    productImage,
    productDescription,
    productPrice,
    quantityInStock,
    quantity,
  } = item;
  const [Quantity, setQuantity] = useState(quantity);
  const availability = quantityInStock > 0;

  function handleQuantityChange(e) {
    setQuantity(+e.target.value);
    addProductToCart(
      '4kS2ASb6kLlaTn7Bos8Nr',
      productId,
      productImage,
      productDescription,
      productPrice,
      quantityInStock,
      +e.target.value
    );
  }

  return (
    <Link to={`/product/${productId}`}>
      <div className="w-full border-t-2 border-slate-300 rounded-md p-4 flex  justify-between">
        <div className="flex items-center">
          <div>
            <img className="w-40 mr-16 " src={productImage} alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold w-[90%]">{productDescription}</h3>

            <Available availability={availability} size="xs" />

            <p className="text-gray-500 text-xs">Eligible for FREE delivery</p>
            <div className="flex items-center">
              <select
                className="bg-gray-200 border-none outline-none py-1 rounded-xl mr-2"
                name="Quantity"
                value={Quantity}
                id=""
                onChange={e => handleQuantityChange(e)}
              >
                {Array.from({ length: quantityInStock }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <div className="border-r border-gray-400 mx-1 h-4"></div>
              <button
                onClick={() => {
                  deleteItemFromCart(productId);
                }}
                className="  text-sm border-none text-sky-800 cursor-pointer"
              >
                Delete
              </button>

              <div className="border-r  border-gray-400 mx-1 h-4"></div>
              <button className="border-none text-sm text-sky-800  cursor-pointer">
                Share
              </button>
            </div>
          </div>
        </div>
        <div className=" font-semibold">${productPrice}</div>
      </div>
    </Link>
  );
}

export default CartCard;
