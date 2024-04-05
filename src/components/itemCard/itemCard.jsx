import { useContext } from 'react';
import Available from '../Available/Available';
import { Link } from 'react-router-dom';
import { dirContext } from '../../contexts/direction';

function ItemCard({ item }) {
  const { id, image, name, price, quantity } = item;
  const { dir } = useContext(dirContext);
  return (
    <div className="w-full border-t-2 border-slate-300 rounded-md p-4 flex  justify-between">
      <div className="flex items-center">
        <div className="w-30 h-30">
          <img
            className={`w-16 ${dir === 'rtl' ? 'ml-16' : 'mr-16'} `}
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <Link to={`/product/${id}`}>
            <h3 className="font-semibold w-[90%]">{name}</h3>
          </Link>
        </div>
      </div>
      <div className=" font-semibold">${price}</div>
    </div>
  );
}

export default ItemCard;
